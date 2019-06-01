import axios from '../../src/axios'
import qs from 'qs'
import { AxiosTransformer } from '../../src/types';

// axios.defaults.headers.common['test111'] = 111

// tslint:disable-next-line: no-floating-promises
// axios({
//   url: '/config/post',
//   method: 'post',
//   data: qs.stringify({
//     foo: 'foo'
//   }),
//   headers: {
//     test: '321'
//   }
// }).then(res => {
//   console.log(res.data)
// })

// tslint:disable-next-line: no-floating-promises
axios({
  transformRequest: [
    (function(data) {
      return qs.stringify(data)
      // return data
    }),
    ...(axios.defaults.transformRequest as AxiosTransformer[])
  ],
  transformResponse: [
    ...(axios.defaults.transformResponse as AxiosTransformer[]),
    function(data) {
      if (typeof data === 'object') {
        data.b = 222
      }
      return data
    }
  ],
  url: '/config/post',
  method: 'post',
  data: {
    b: 1
  }
}).then((res) => {
  console.log(res.data)

})
