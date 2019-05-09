import xhr from './xhr'
import { AxiosRequestConfig } from './types'

function axios(config: AxiosRequestConfig): void {
  xhr(config)
}

export default axios
