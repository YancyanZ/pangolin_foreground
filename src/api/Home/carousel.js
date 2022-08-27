import request from '@/utils/request.js'

export const Listcarousel = function () {
  return request({
    url: '/home/carousel',
    method: 'get'
  })
}