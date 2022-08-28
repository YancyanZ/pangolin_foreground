import request from '@/utils/request.js'

export const courseProList = function () {
  return request({
    url: '/course/prolist',
    method: 'get'
  })
}