import request from '@/utils/request.js'

export const Listmenu = function () {
  return request({
    url: '/home/menu',
    method: 'get'
  })
}