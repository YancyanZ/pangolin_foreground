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

// 获取用户信息
export function getInfo () {
  return request({
    url:'/getInfo',
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

//用户注册
export function register(parameter) {
  return request({
    url: '/login',
    method: 'post',
    data: parameter
  })
}