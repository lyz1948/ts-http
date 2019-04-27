import { isPlainObject } from './index'

function normalizeHeaderName(headers: any, normalizeHeader: any): void {
  if (!headers) {
    return
  }
  Object.keys(headers).forEach(name => {
    if (name !== normalizeHeader && name.toUpperCase() === normalizeHeader.toUpperCase()) {
      headers[normalizeHeader] = headers[name]
      delete headers[name]
    }
  })
}

export function processHeaders(headers: any, data: any): any {
  normalizeHeaderName(headers, 'Content-Type')
  if (isPlainObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }

  return headers
}

export function parseHeaders(headers: string): any {
  const parsed = Object.create(null)
  if (!headers) {
    return parsed
  }
  headers.split('\r\n').forEach(row => {
    let [key, val] = row.split(':')
    key = key.trim().toLowerCase()

    if (!key) {
      return
    }

    if (val) {
      val = val.trim()
    }
    parsed[key] = val
  })
  return parsed
}
