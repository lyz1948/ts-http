import { isPlainObject } from './index'

export const transformRequest = (data: any): any => {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }

  return data
}

export function transformResponse(data: any): any {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch (err) {
      // do nonthing
    }
  }
  return data
}
