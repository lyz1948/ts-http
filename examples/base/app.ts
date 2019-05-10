import axios from '../../src/index'

axios({
  method: 'post',
  url: '/base/post',
  responseType: 'json',
  data: {
    a: 1,
    b: 2
  }
}).then(res => {
  console.log(res)
})

axios({
  method: 'post',
  url: '/base/post',
  headers: {
    'content-type': 'application/json;charset=utf-8',
    Access: 'application/json, text/plain, */*'
  },
  data: {
    foo: 10,
    bar: 20
  }
}).then(res => {
  console.log(res)
})
