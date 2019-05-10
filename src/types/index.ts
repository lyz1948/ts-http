export type Method =
  | 'get'
  | 'GET'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'head'
  | 'HEAD'
  | 'delete'
  | 'DELETE'
  | 'patch'
  | 'PATCH'
  | 'options'
  | 'OPTIONS'

export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
  headers?: any
  responseType?: any
}

export interface AxiosResponse {
  data: any
  headers: any
  status: number
  statusText: string
  config: AxiosRequestConfig
  responseType?: XMLHttpRequestResponseType
  request: any
}

export interface AxiosPromise extends Promise<AxiosResponse> {}
