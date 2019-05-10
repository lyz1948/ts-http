import xhr from './xhr'
import { AxiosRequestConfig } from './types'
import { formatUrl } from './utils/url'
import { transformRequest } from './utils/data'

function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.data = transformRequestData(config)
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return formatUrl(url, params)
}

function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config)
}

export default axios
