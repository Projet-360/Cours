require('dotenv').config()

const express = require('express')
const app = express()
const path = require('path')

const Prismic = require('@prismicio/client')
const PrismicDOM = require('prismic-dom')
const UAParser = require('ua-parser-js')

const initApi = req => {
  return Prismic.getApi(process.env.PRISMIC_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    req
  })
}

const handleLinkResolver = doc => {
  return '/'
}

app.use( (req, res, next)  => {
  res.locals.ctx = {
    endpoint: process.env.PRISMIC_ENDPOINT,
    linkResolver: handleLinkResolver
  }

  res.locals.PrismicDOM = PrismicDOM

  next()
})


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('pages/home', {
    meta: {
      data: {
        title:'floema',
        description:'the description'
      }
    }
  })
})

app.get('/about', (req, res) => {
  initApi(req).then( api =>{
    const api = await initApi(req)
    const about = await api.getSingle('about')
    const meta = await api.getSingle('meta')

    res.render('pages/about', {        
      about,
      meta
    })
  })
})

app.get('/collection', (req, res) => {
  res.render('pages/collection', {
    meta: {
      data: {
        title:'floema',
        description:'the description'
      }
    }
  })
})

app.get('/detail/:uid', async (req, res) => {
  const api = await initApi(req)
  const product = await api.getByUID('product')
  const meta = await api.getSingle('meta')
  
  res.render('pages/about', {        
    product,
    meta
  })
})

app.listen(3000)