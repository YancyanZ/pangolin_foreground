import request from '@/utils/request.js'
import { praseStrEmpty } from '@/utils/aidex'

// // 查询用户详细
// export function getUser (userId) {
//   return request({
//     url: '/system/user/' + praseStrEmpty(userId),
//     method: 'get'
//   })
// }

// 查询用户详细(使用用户名)
export function getUser (username) {
  return request({
    url: '/system/user/' + praseStrEmpty(username),
    method: 'get'
  })
}