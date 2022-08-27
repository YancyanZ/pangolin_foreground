import request from '@/utils/request.js'

export const traningList = function () {
  return request({
    url: '/training',
    method: 'get'
  })
}