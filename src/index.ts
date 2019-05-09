import xhr from './xhr'
import { AxiosRequestConfig } from './types'
import { formatUrl } from './utils/url'

function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return formatUrl(url, params)
}

export default axios
