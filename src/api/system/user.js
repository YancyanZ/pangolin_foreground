import request from '@/utils/request.js'
import { praseStrEmpty } from '@/utils/aidex'

// 查询用户详细(使用用户名)
export function getUser (username) {
  return request({
    url: '/process/student/' + praseStrEmpty(username),
    method: 'get'
  })
}

// 修改用户详细
export function modUser (username,data) {
  return request({
    url: '/process/student/' + praseStrEmpty(username),
    method: 'post',
    data: data
  })
}