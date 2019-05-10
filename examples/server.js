const express = require('express')
const webpack = require('webpack')
const bodyParser = require('body-parser')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const WebpackConfig = require('./webpack.config')

const app = express()
const compiler = webpack(WebpackConfig)
const host = '127.0.0.1'
const port = process.env.PORT || 4000

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/__build__/',
  stats: {
    colors: true,
    chunks: false
  }
}))

app.use(webpackHotMiddleware(compiler))

app.use(express.static(__dirname))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

const router = express.Router()

requestSimpleRoute()
requestBaseRoute()
requestErrorRoute()

function requestSimpleRoute() {
  router.get('/simple/get', (req, res) => {
    res.json({
      msg: 'Hello Typescript'
    })
  })
}

function requestBaseRoute() {
  router.get('/base/get', (req, res) => {
    res.json(req.query)
  })

  router.post('/base/post', (req, res) => {
    res.json(req.body)
  })

  router.post('/base/buffer', (req, res) => {
    let msg = []

    req.on('data', (chunk) => {
      if (chunk) {
        msg.push(chunk)
      }
    })

    req.on('end', () => {
      let buf = Buffer.concat(msg)
      res.json(buf.toJSON())
    })
  })
}

function requestErrorRoute() {
  router.get('/error/get', function(req, res) {
    if (Math.random() > 0.5) {
      res.json({
        message: 'hi, see me then network is ok'
      })
    } else {
      res.status(500)
      res.end()
    }
  })

  router.get('/error/timeout', function(req, res) {
    setTimeout(() => {
      res.json({
        message: 'hello world'
      })
    }, 4000)
  })
}

app.use(router)

module.export = app.listen(port, () => {
  console.log(`service is running at http://${host}:${port} Press Ctrl + C to exit`)
})
