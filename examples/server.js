const express = require('express')
const webpack = require('webpack')
const atob = require('atob')
const bodyParser = require('body-parser')
const cookieParse = require('cookie-parser')
const multiparty = require('connect-multiparty')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const WebpackConfig = require('./webpack.config')
const { resolve } = require('path')

require('./server2')

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
app.use(express.static(__dirname, {
  setHeaders(res) {
    res.cookie('XSRF-TOKEN-D', 'xyz123')
  }
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParse())
app.use(multiparty({
  uploadDir: resolve(__dirname, 'upload')
}))
const router = express.Router()

requestSimpleRoute()
requestBaseRoute()
requestErrorRoute()
requestExtendRouter()
requestInterceptorRouter()
requestConfigRouter()
requestCancelRouter()
requstMoreRouter()

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

function requestExtendRouter() {
  router.get('/extend/get', (req, res) => {
    res.json({
      message: 'hello typescript'
    })
  })

  router.options('/extend/options', (req, res) => {
    res.end()
  })

  router.delete('/extend/delete', (req, res) => {
    res.end()
  })

  router.head('/extend/head', (req, res) => {
    res.end()
  })

  router.post('/extend/post', (req, res) => {
    res.json(req.body)
  })

  router.put('/extend/put', (req, res) => {
    res.json(req.body)
  })

  router.patch('/extend/patch', (req, res) => {
    res.json(req.body)
  })

  router.get('/extend/user', (req, res) => {
    res.json({
      code: 0,
      message: 'okay',
      result: {
        name: 'pip',
        age: 15
      }
    })
  })
}

function requestInterceptorRouter() {
  router.get('/interceptors/get', (req, res) => {
    res.send('hello')
  })
}

function requestConfigRouter() {
  router.post('/config/post', (req, res) => {
    res.json(req.body)
  })
}

function requestCancelRouter() {
  router.get('/cancel/get', (req, res) => {
    setTimeout(() => {
      res.json('hello')
    }, 1000)
  })

  router.post('/cancel/post', (req, res) => {
    setTimeout(() => {
      res.json(req.body)
    }, 1000)
  })
}

function requstMoreRouter() {
  router.get('/more/get', (req, res) => {
    res.json(req.cookies)
  })
  router.post('/more/upload', (req, res) => {
    console.log(req.body, req.files)
    res.json('Upload Success!')
  })
  router.post('/more/post', (req, res) => {
    const auth = req.headers.authorization
    const [ type, credentials ] = auth.split(' ')
    console.log(atob(credentials))
    const [ username, password ] = atob(credentials).split(':')
    if (type === 'Basic' && username === 'lyz' && password === '123456') {
      res.json(req.body)
    } else {
      res.status(401)
      res.end('UnAuthorization')
    }
  })

  router.get('/more/304', (req, res) => {
    res.status(304)
    res.end()
  })

  router.get('/more/getX', (req, res) => {
    res.end('X')
  })

  router.get('/more/getY', (req, res) => {
    res.end('Y')
  })
}

app.use(router)

module.export = app.listen(port, () => {
  console.log(`service is running at http://${host}:${port} Press Ctrl + C to exit`)
})
