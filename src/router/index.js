import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/main';
import Contral from "../views/contral";
Vue.use(VueRouter)

const routes = [
  {
    path: "",
    redirect: "/main"
  },
  {
    component: Main,
    name: "main",
    path: "/main"
  },
  {
    component: Contral,
    name: "Contral",
    path: "/contral"
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
