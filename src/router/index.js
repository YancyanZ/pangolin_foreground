import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/views/Layout.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'

Vue.use(VueRouter)

const routes = [
  // 重定向
  { path:'/',redirect:'/login'},
  // 登录路由组件
  {path:'/login',component:Login},
  // 首页路由组件
  { 
    path: '/',
    component: Layout,
    // 首页子组件
    children:[
      // 首页
      {path:'/home',component:Home}
    ]
  }
  
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const token = localStorage.getItem('ACCESS_TOKEN')
  if (!token) return next('/login')
  next()
})

router.afterEach((to,from,next)=>{
  document.querySelector("body").setAttribute("style","overflow: auto !important;")
})

export default router
