import axios from 'axios'

//创建axios实例
const request = axios.create({
  // API 请求的默认前缀
  // 发布环境
  baseURL: '/api'
  // 开发mock请求
  // baseURL: 'http://127.0.0.1:4523/m1/1501427-0-default'
})

request.interceptors.request.use(config => {
  const token = localStorage.getItem('ACCESS_TOKEN')
  // 如果 token 存在
  // 让每个请求携带自定义 token 请根据实际情况自行修改
  if (token) {
    config.headers['Authorization'] = 'Bearer ' + token // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  return config
})

export default request