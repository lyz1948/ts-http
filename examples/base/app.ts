import axios from '../../src/index'

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     a: 10,
//     b: 42
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: ['bar', 'baz']
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: {
//       bar: 'baz'
//     }
//   }
// })

// const date = new Date()
// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     date
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: '@:$, '
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get#hash',
//   params: {
//     foo: 'bar'
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get?foo=abc',
//   params: {
//     bar: 'baz'
//   }
// })

axios({
  method: 'post',
  url: '/base/post',
  data: {
    foo: 'foo',
    bar: 'baz'
  }
})

// const arr = new Int32Array([11, 21])
// axios({
//   method: 'post',
//   url: '/base/buffer',
//   data: arr
// })

axios({
  method: 'post',
  url: '/base/post',
  headers: {
    'content-type': 'application/json;charset=utf-8',
    'Access': 'application/json, text/plain, */*'
  },
  data: {
    foo: 10,
    bar: 20
  }
})

const paramString = 'q=URLUtils.searchParams&topic=api'
const searchParams = new URLSearchParams(paramString)

axios({
  method: 'post',
  url: '/base/post',
  data: searchParams
})
