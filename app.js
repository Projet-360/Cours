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

app.get('/', function (req, res) {
  res.render('pages/home', {
    meta: {
      data: {
        title:'floema',
        description:'the description'
      }
    }
  })
})

app.get('/about', function (req, res) {
  initApi(req).then( api =>{
    api.query(
    Prismic.Predicates.at('document.type', 'about')
    ).then(response => {
      console.log(response)
      res.render('pages/about', {
        meta: {
          data: {
            title:'floema',
            description:'the description'
          }
        }
      })
    })
  })
})

app.get('/collection', function (req, res) {
  res.render('pages/collection', {
    meta: {
      data: {
        title:'floema',
        description:'the description'
      }
    }
  })
})

app.get('/detail/:uid', function (req, res) {
  res.render('pages/detail', {
    meta: {
      data: {
        title:'floema',
        description:'the description'
      }
    }
  })
})

app.listen(3000)