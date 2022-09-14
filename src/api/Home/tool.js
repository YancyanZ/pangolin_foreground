import request from '@/utils/request.js'

export const toolList = function () {
  return request({
    url: 'process/tool/list',
    method: 'get'
  })
}