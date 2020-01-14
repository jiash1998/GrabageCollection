import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/main";
import Contral from "../views/contral";
import Signin from "../views/signin";
import Register from "../views/Register";
import Son1Manage from "../views/Contral/son1Manage";
Vue.use(VueRouter);

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
    path: "/contral",
    children: [
      {
        path: "",
        redirect: "/contral/Son1Manage"
      },
      {
        component: Son1Manage,
        name: "Son1Manage",
        path: "/contral/Son1Manage"
      }
    ]
  },
  {
    component: Signin,
    name: "Signin",
    path: "/signin"
  },
  {
    component: Register,
    name: "Register",
    path: "/register"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
