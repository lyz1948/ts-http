import xhr from './xhr'
import { AxiosRequestConfig } from './types'
import { formatUrl } from './utils/url'
import { transformRequest } from './utils/data'
import { processHeaders } from './utils/headers'

function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return formatUrl(url, params)
}

function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config)
}

function transformHeaders(config: AxiosRequestConfig): any {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

export default axios
