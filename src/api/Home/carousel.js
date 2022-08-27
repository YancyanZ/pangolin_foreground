import request from '@/utils/request.js'

export const carouselList = function () {
  return request({
    url: '/home/carousel',
    method: 'get'
  })
}