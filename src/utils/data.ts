import { isPlainObject } from './index'

export const transformRequest = (data: any): any => {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}

export const transformResponse = (data: any): any => {
  console.log('transform response data', data)
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch (err) {
      // do nonthing
    }
  }
  return data
}
