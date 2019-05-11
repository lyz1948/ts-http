import axios from '../../src/index'

axios({
  url: '/extend/post',
  method: 'post',
  data: {
    message: 'hi'
  }
})
axios.request({
  url: '/extend/post',
  method: 'post',
  data: {
    message: 'hello'
  }
})

axios.get('/extend/get')

axios.options('/extend/options')

axios.delete('/extend/delete')

axios.head('/extend/head')

axios.post('/extend/post', { message: 'post' })

axios.put('/extend/put', { message: 'put' })

axios.patch('/extend/patch', { message: 'patch' })

axios('/extend/post', {
  method: 'post',
  data: {
    x: 10,
    y: 20
  }
})

axios({
  url: '/extend/post',
  method: 'post',
  data: {
    x: 10,
    y: 20
  }
})

interface ResponseData<T = any> {
  code: number
  resulte: T
  message: string
}

interface User<T=any> {
  name: string
  age: number
}

function getUser<T = any>() {
  return axios<ResponseData<T>>('/extend/user')
    .then(res => res.data)
    .catch(err => console.log(err))
}

;(async function getUserInfo () {
  const user = await getUser<User>()
  if (user) {
    console.log(user.resulte)
  }
}())
