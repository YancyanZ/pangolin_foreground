import request from '@/utils/request.js'

// 获取验证码
export function getCodeImg () {
  return request({
    url: '/captchaImage',
    method: 'get'
  })
}

// 登录
export function login(parameter) {
  return request({
    url: '/login',
    method: 'post',
    data: parameter
  })
}