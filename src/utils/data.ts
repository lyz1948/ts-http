import { isPlainObject } from './index'

export function transformRequest(data: any): any {
  return isPlainObject(data) ? JSON.stringify(data) : data
}
