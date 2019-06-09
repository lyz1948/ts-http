import axios, { AxiosError } from '../../src/index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import qs from 'qs'

const service = axios.create()

function calcPercentage(loaded: number, total: number): number {
  return Math.floor(loaded * 1.0) / total
}

function loadProgressBar() {
  const startProgress = function() {
    service.interceptors.request.use(config => {
      NProgress.start()
      return config
    })
  }
  const updateProgress = function() {
    const update = (e: ProgressEvent) => {
      console.log(e)
      NProgress.set(calcPercentage(e.loaded, e.total))
    }
    service.defaults.onDownloadProgress = update
    service.defaults.onUploadProgress = update
  }
  const stopProgress = function() {
    service.interceptors.response.use(res => {
      NProgress.done()
      return res
    }, error => {
      NProgress.done()
      return Promise.reject(error)
    })
  }
  startProgress()
  updateProgress()
  stopProgress()
}

loadProgressBar()

const downloadEl = document.getElementById('down')

downloadEl.addEventListener('click', function() {
  const imgUrl = 'http://a.hiphotos.baidu.com/image/h%3D300/sign=a62e824376d98d1069d40a31113eb807/838ba61ea8d3fd1fc9c7b6853a4e251f94ca5f46.jpg'
  service.get(imgUrl)
})

const uploadEl = document.getElementById('up')
uploadEl.addEventListener('click', function() {
  const fd = new FormData()
  const fileEl = document.getElementById('file') as HTMLInputElement
  if (fileEl.files) {
    fd.append('file', fileEl.files[0])
    service.post('/more/upload', fd)
  }
})

// tslint:disable-next-line: no-floating-promises
service.post('/more/post', {
  a: 1
}, {
  auth: {
    username: 'lyz',
    password: '123456'
  }
}).then(res => {
  console.log(res)
})

service.get('/more/304').then(res => {
  console.log(res)
}).catch((e: AxiosError) => {
  console.log(e.message)
})

service.get('/more/304', {
  validateStatus(status) {
    return status >= 200 && status < 400
  }
}).then(res => {
  console.log(res)
}).catch((e: AxiosError) => {
  console.log(e.message)
})

// tslint:disable-next-line: no-floating-promises
axios.get('/more/get', {
  params: new URLSearchParams('a=b&c=d')
}).then(res => {
  console.log(res)
})

// tslint:disable-next-line: no-floating-promises
axios.get('/more/get', {
  params: {
    a: 1,
    b: 2,
    c: ['x', 'y', 'z']
  }
}).then(res => {
  console.log(res)
})

const instance = axios.create({
  paramsSerializer(params) {
    return qs.stringify(params, {
      arrayFormat: 'brackets'
    })
  }
})

// tslint:disable-next-line: no-floating-promises
instance.get('/more/get', {
  params: {
    a: 1,
    b: 2,
    c: ['x', 'y', 'z']
  }
}).then(res => {
  console.log(res)
})

const myInstance = axios.create({
  baseUrl: 'http://cdn.ykpine.com/'
})

myInstance.get('image/orange.jpeg')
myInstance.get('http://cdn.ykpine.com/image/px500_3.png')
