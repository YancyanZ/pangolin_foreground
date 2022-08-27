import axios from 'axios'

//创建axios实例
const request = axios.create({
  // API 请求的默认前缀
  // 实际请求
  // baseURL: 'https://applet-base-api-t.itheima.net'
  // mock请求
  baseURL: 'http://127.0.0.1:4523/m1/1501427-0-default'
})

export default request