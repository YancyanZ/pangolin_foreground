import request from '@/utils/request.js'

export const columnlList = function () {
  return request({
    url: 'process/column/list',
    method: 'get'
  })
}