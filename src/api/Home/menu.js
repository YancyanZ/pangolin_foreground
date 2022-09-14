import request from '@/utils/request.js'

export const menuList = function () {
  return request({
    url: 'process/navigation/list',
    method: 'get'
  })
}