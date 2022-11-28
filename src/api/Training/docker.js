import request from '@/utils/request.js'
import { praseStrEmpty } from '@/utils/aidex'

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
    url: '/container/stopcontainer/' + praseStrEmpty(traingID),
    method: 'get'
  })
}

//提交答案
export function submitAnswer(data) {
  return request({
    url: '/container/removecontainer/',
    method: 'post',
    data: data
  })
}
