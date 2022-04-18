require('dotenv').config()

const logger = require('morgan')
const express = require('express')
const errorHandler = require('errorhandler')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const app = express()
const path = require('path')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride())
app.use(errorHandler())

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
  // res.locals.ctx = {
  //   endpoint: process.env.PRISMIC_ENDPOINT,
  //   linkResolver: handleLinkResolver
  // }

  res.locals.links = handleLinkResolver 

  res.locals.Numbers = index => {
    return index == 0 ? 'One' : index == 1 ? 'Two' : index == 2 ? 'Three' : index == 3 ? 'Four' : '';
  }

  res.locals.PrismicDOM = PrismicDOM

  next()
})


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', async (req, res) => {
  const api = await initApi(req)
  const home = await api.getSingle('home')
  const meta = await api.getSingle('meta')
  const preloader = await api.getSingle('preloader')

  res.render('pages/home', {        
    home,
    meta,
    preloader
  })
})

app.get('/about', async (req, res) => {

  const api = await initApi(req)
  const about = await api.getSingle('about')
  const meta = await api.getSingle('meta')
  const preloader = await api.getSingle('preloader')

  res.render('pages/about', {        
    about,
    meta,
    preloader
  })

})

app.get('/collections', async (req, res) => {
  const api = await initApi(req)
  const meta = await api.getSingle('meta')
  const home = await api.getSingle('home')
  const { results: collections} = await api.query(Prismic.Predicates.at('document.type', 'collection'),{ fetchLinks : 'product.image' })
  const preloader = await api.getSingle('preloader')

  console.log(home);
  res.render('pages/collections', {
    home,
    collections,
    meta,
    preloader
  })
})

app.get('/detail/:uid', async (req, res) => {
  const api = await initApi(req)
  const meta = await api.getSingle('meta')
  const product = await api.getByUID('product', req.params.uid,{ fetchLinks : 'collection.title' })
  const preloader = await api.getSingle('preloader')

  console.log(product);
  res.render('pages/detail', {
    product,
    meta,
    preloader
  })
})

app.listen(3000)