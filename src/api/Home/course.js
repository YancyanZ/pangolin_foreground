import request from '@/utils/request.js'

export const courseProList = function () {
  return request({
    url: 'process/course/prolist',
    method: 'get'
  })
}