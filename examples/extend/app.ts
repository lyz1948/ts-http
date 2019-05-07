import axios from '../../src/index'

axios({
  method: 'get',
  url: '/extend/get',
  params: {
    a: 10
  }
})

axios.request({
  method: 'post',
  url: '/extend/post',
  data: {
    foo: 'bar'
  }
})

axios.get('/extend/get')

axios.options('/extend/options')

axios.delete('/extend/delete')

axios.head('/extend/head')

axios.post('/extend/post', { message: 'post' })

axios.put('/extend/put', { message: 'put' })

axios.patch('/extend/patch', { message: 'patch' })

axios({
  url: '/extend/post',
  method: 'post',
  data: {
    msg: 'hi'
  }
})
