/** @format */

import $fetch from '@system.fetch'
import $utils from './utils'

function requestHandle(params) {
  return new Promise((resolve, reject) => {
    $fetch.fetch({
      url: params.url,
      method: params.method,
      data: params.data,
      success: data => {
        /* @desc: 优化！存储请求返回的时间，以保证可能需要使用时间的正确性; */
        $utils.setCurrentTime(data.headers.Date)

        const serverResponse = JSON.parse(data.data)
        if (serverResponse.success) {
          resolve(serverResponse.value)
        } else {
          resolve(serverResponse.message)
        }
      },
      fail: (data, code) => {
        console.log(`🐛 request fail, code = ${code}`)
        reject(data)
      },
      complete: data => {
        reject(data)
      }
    })
  })
}

export default {
  post: function(url, params) {
    return requestHandle({
      method: 'post',
      url: url,
      data: params
    })
  },
  get: function(url, params) {
    return requestHandle({
      method: 'get',
      url: $utils.queryString(url, params)
    })
  }
}
