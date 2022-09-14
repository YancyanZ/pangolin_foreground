import request from '@/utils/request.js'

export const carouselList = function () {
  return request({
    url: 'process/carousel/list',
    method: 'get'
  })
}