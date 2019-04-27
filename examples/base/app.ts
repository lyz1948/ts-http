import axios from '../../src/index'

// axios({
//   url: '/base/get',
//   method: 'get',
//   params: {
//     baz: ['foo', 'bar']
//   }
// })

// axios({
//   url: '/base/get',
//   method: 'get',
//   params: {
//     foo: {
//       bar: 'baz'
//     }
//   }
// })

// const date = new Date()
// axios({
//   url: '/base/get',
//   method: 'get',
//   params: {
//     date
//   }
// })

// axios({
//   url: '/base/get',
//   method: 'get',
//   params: {
//     foo: '@:$'
//   }
// })

// axios({
//   url: '/base/get',
//   method: 'get',
//   params: {
//     foo: 'baz',
//     bar: null
//   }
// })

// axios({
//   url: '/base/get#first',
//   method: 'get',
//   params: {
//     foo: 'hash'
//   }
// })

// axios({
//   url: '/base/get?foo=bar',
//   method: 'get',
//   params: {
//     bar: 'baz'
//   }
// })

axios({
  method: 'post',
  url: '/base/post',
  responseType: 'json',
  data: {
    a: 10,
    b: 22
  }
}).then(res => {
  console.log('== axios then response ==')
  console.log(res)
})

// axios({
//   method: 'post',
//   url: '/base/post',
//   headers: {
//     'content-type': 'application/json',
//     Accept: 'application/json, text/plain, */*'
//   },
//   data: {
//     a: 110,
//     b: 221
//   }
// }).then(res => {
//   console.log(res)
// })

// const paramString = 'q=URLUtils.searchParams&topic=api'
// const searchParams = new URLSearchParams(paramString)
// axios({
//   method: 'post',
//   url: '/base/post',
//   data: searchParams
// }).then(res => {
//   console.log(res)
// })

// const arr = new Int32Array([21, 31])
// axios({
//   method: 'post',
//   url: '/base/buffer',
//   data: arr
// }).then(res => {
//   console.log(res)
// })
