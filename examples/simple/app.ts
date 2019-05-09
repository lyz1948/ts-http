import axios from '../../src/index'

axios({
  method: 'get',
  url: '/simple/get',
  params: {
    a: 10,
    b: 42
  }
})
