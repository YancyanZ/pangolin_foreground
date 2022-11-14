import request from '@/utils/request.js'

// 创建docker获取地址
export function createDocker(traingName) {
  return request({
    url: '/container/create/' + praseStrEmpty(traingName),
    method: 'get'
  })
}

// 关闭docker
export function closeDocker(traingID) {
  return request({
    url: '/captchaImage' + praseStrEmpty(traingID),
    method: 'get'
  })
}
