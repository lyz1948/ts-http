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

