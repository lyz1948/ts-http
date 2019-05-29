import axios from '../../src/index'

axios.interceptors.request.use(config => {
  config.headers.test += '=> one'
  return config
})

axios.interceptors.request.use(config => {
  config.headers.test += '=> two'
  return config
})

axios.interceptors.request.use(config => {
  config.headers.test += '=> three'
  return config
})

axios.interceptors.response.use(res => {
  res.data += '<== one'
  return res
})

let interceptor = axios.interceptors.response.use(res => {
  res.data += '<== two'
  return res
})

axios.interceptors.response.use(res => {
  res.data += '<== three'
  return res
})

axios.interceptors.response.eject(interceptor)

// tslint:disable-next-line: no-floating-promises
axios({
  url: '/interceptors/get',
  method: 'get',
  headers: {
    test: ''
  }
}).then(res => {
  console.log(res)
})

