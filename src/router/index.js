import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

import Layout from '@/views/Layout/Layout.vue'
import UserLayout from '@/views/Layout/UserLayout.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import User from '@/views/User.vue'
import Info from '@/views/User/Info.vue'
import Avatar from '@/views/User/Avatar.vue'

Vue.use(VueRouter)

const routes = [
  // 登录路由组件
  {path:'/login',component:Login},
  // 首页路由组件
  { 
    path: '/',
    component: Layout,
    // 首页子组件
    children:[
      {path:'/',redirect:'home'},
      // 首页
      {path:'home',component:Home},
    ]
  },
  // 用户中心
  {
    path:'/center',
    component:UserLayout,
    children:[
      {path:'/',redirect:'/user'},
      // 个人设置
      {
        path:'/user',
        component:User,
        children:[
          {path:'/',redirect:'info'},
          // 我的信息
          {path:'info',component:Info},
          {path:'avatar',component:Avatar}
        ]
      },
      // // 我的成长
      // {
      //   path:'/growth',
      //   component:User,
      //   children:[
      //     // 我的信息
      //     {}
      //     {path:'info',component:UserInfo},
      //   ]
      // },
    ]
  },
  
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  // 缺少验证码失效情况
  const token = localStorage.getItem('ACCESS_TOKEN')
  if (!token) return next('/login')
  store.commit('SET_TOKEN',token)
  // store.dispatch('GetInfo')
  next()
})

router.afterEach((to,from,next)=>{
  document.querySelector("body").setAttribute("style","overflow: auto !important;")
})

export default router
