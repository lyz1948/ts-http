import axios from '../../src/axios'
import qs from 'qs'

axios.defaults.headers.common['test111'] = 111

// tslint:disable-next-line: no-floating-promises
axios({
  url: '/config/post',
  method: 'post',
  data: qs.stringify({
    foo: 'foo'
  }),
  headers: {
    test: '321'
  }
}).then(res => {
  console.log(res.data)
})
