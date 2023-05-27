import webview from '@system.webview'
import { AsyncWebviewSetCookie } from './types'

export const asyncWebviewSetCookie: AsyncWebviewSetCookie = ({ domain, name, value, maxAge, path }) => {
  return new Promise((resolve, reject) => {
    webview.setCookie({
      domain, 
      name, 
      value, 
      maxAge, 
      path,
      success: resolve,
      fail: reject
    })
  })
}
