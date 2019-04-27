import axios, { AxiosError } from '../../src/index'

// 正常请求
axios({
  method: 'get',
  url: '/error/get',
  data: {
    x: 10,
    y: 20
  }
})
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })

// 错误地址
axios({
  method: 'get',
  url: '/error/get1',
  data: {
    x: 10,
    y: 20
  }
})
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })

// 延迟请求
setTimeout(() => {
  axios({
    method: 'get',
    url: '/error/timeout',
    data: {
      a: 1,
      b: 2
    }
  })
    .then(res => {
      console.log(res)
    })
    .catch(e => {
      console.log(e)
    })
}, 5000)

axios({
  method: 'get',
  url: '/error/timeout',
  timeout: 2000
})
  .then(res => {
    console.log(res)
  })
  .catch((err: AxiosError) => {
    console.log(err.code)
    console.log(err.message)
  })
