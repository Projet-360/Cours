import each from 'lodash/each'

import Preloader from './components/Preloader'

import Home from './pages/Home'
import About from './pages/About'
import Collections from './pages/Collections'
import Detail from './pages/Detail'

class App {
    constructor() {
        this.createPreloader()
        this.createContent()
        this.createPages()

        this.addEventListeners()
        this.addLinkListeners()
        this.update()
    }

    createPreloader() {
        this.preloader = new Preloader()
        this.preloader.once('completed', this.onPreloaded.bind(this))
    }

    createContent() {
        this.content = document.querySelector('.content')
        this.template = this.content.getAttribute('data-template')
    }

    createPages() {
        this.pages = {
            'home': new Home(),
            'about': new About(),
            'collections': new Collections(),
            'detail': new Detail()
        }

        this.page = this.pages[this.template]

        this.page.create()
        this.page.onResize()
    }

    onPreloaded() {
        this.preloader.destroy()
        this.page.show()
    }

    async onChange (url) {
        await this.page.hide()

        const request = await window.fetch(url)

        if ( request.status === 200) {
            const html = await request.text()
            const div = document.createElement('div')

            div.innerHTML = html

            const divContent = div.querySelector('.content')

            this.template = divContent.getAttribute('data-template')

            this.content.setAttribute('data-template', this.template)
            this.content.innerHTML = divContent.innerHTML

            this.page = this.pages[this.template]
            this.page.create()
            this.page.onResize()
            this.page.show()
        } else {
            console.log("C'est la merde mon gars !");
        }
    }

    onResize() {
        if (this.page && this.page.onResize) {
            this.page.onResize()
        }
    }

    update() {
        if (this.page && this.page.update) {
            this.page.update()
        }

        this.frame = window.requestAnimationFrame(this.update.bind(this))   
    }

    addEventListeners() {
        window.addEventListener('resize', this.onResize.bind(this))
    }

    addLinkListeners () {
        const links = document.querySelectorAll('a')

        each(links, link => {
            link.onclick = event => {
                const { href } = link
                event.preventDefault()

                this.onChange(href)
            }
        })
    }
}

new App()