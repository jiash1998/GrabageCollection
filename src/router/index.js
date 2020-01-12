import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/main'
Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect: "/main"
  },
  {
    component:Main,
    name:'main',
    path:'/main'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
