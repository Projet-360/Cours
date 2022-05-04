import Component from "./Component";

export default class Animation extends Component {
    constructor ({element, elements})  {
        super({
            element,
            elements
        })

        this.createObserver()

        this.animationOut()
    }

    createObserver() {
        this.observer = new window.IntersectionObserver( entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    this.animationIn()
                } else {
                    this.animationOut()
                }
            })
        })

        this.observer.observe(this.element)
    }

    animationOut() {
        
    }

    animationOut() {

    }
}