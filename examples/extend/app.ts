import axios from '../../src/index'

// axios({
//   method: 'get',
//   url: '/extend/get',
//   params: {
//     a: 10
//   }
// })

// axios.request({
//   method: 'post',
//   url: '/extend/post',
//   data: {
//     foo: 'bar'
//   }
// })

// axios.get('/extend/get')

// axios.options('/extend/options')

// axios.delete('/extend/delete')

// axios.head('/extend/head')

// axios.post('/extend/post', { message: 'post' })

// axios.put('/extend/put', { message: 'put' })

// axios.patch('/extend/patch', { message: 'patch' })

// axios({
//   url: '/extend/post',
//   method: 'post',
//   data: {
//     msg: 'hi'
//   }
// })

axios('/extend/post', {
  method: 'post',
  data: {
    msg: 'tow params'
  }
})

interface ResponseData<T = any> {
  code: number
  result: T
  message: string
}

interface User {
  name: string
  age: number
}

function getUser <T>() {
  return axios<ResponseData <T>>('/extend/user')
    .then(res => res.data)
    .catch(err => console.log(err))
}

;(async function test() {
  const user = await getUser<User>()
  if (user) {
    console.log(user.result.name)
  }
}())
