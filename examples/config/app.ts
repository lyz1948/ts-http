import axios from '../../src/axios'
import qs from 'qs'
import { AxiosTransformer } from '../../src/types';

// tslint:disable-next-line: no-floating-promises
const service = axios.create({
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
  ]
})

service({
  url: '/config/post',
  method: 'post',
  data: {
    b: 1
  }
}).then((res) => {
  console.log(res.data)
})
