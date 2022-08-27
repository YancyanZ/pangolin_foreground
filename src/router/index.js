import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/views/Layout.vue'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect:'/home',component: Layout,
  children:[
    {path:'/home',component:Home},
    {path:'/train'}
  ]}
]

const router = new VueRouter({
  routes
})

export default router
