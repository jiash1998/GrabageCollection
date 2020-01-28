import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/main";
import Contral from "../views/contral";
import Signin from "../views/signin";
import Register from "../views/register";
import Notice from "../views/notice";
import Custom from "../views/custom";
import merchartContral from "../views/merchartContral";
import Son1Manage from "../views/Contral/son1Manage";
import Son2CarMap from "../views/Contral/son2CarMap";
import Son3MerchartMap from "../views/Contral/son3MerchartMap";
import Son4Custom from "../views/Contral/son4Custom";
import Son5Record from "../views/Contral/son5Record";
import Son6Notice from "../views/Contral/son6Notice";
import Son7Feedback from "../views/Contral/son7Feedback";


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
    component: Notice,
    name: "Notice",
    path: "/Notice"
  },
  {
    component: Custom,
    name: "Custom",
    path: "/Custom"
  },
  {
    component: merchartContral,
    name: "merchartContral",
    path: "/merchartContral"
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
      },
      {
        component: Son2CarMap,
        name: "Son2CarMap",
        path: "/contral/Son2CarMap"
      },
      {
        component: Son3MerchartMap,
        name: "Son3MerchartMap",
        path: "/contral/Son3MerchartMap"
      },
      {
        component: Son5Record,
        name: "Son5Record",
        path: "/contral/Son5Record"
      },
      {
        component: Son6Notice,
        name: "Son6Notice",
        path: "/contral/Son6Notice"
      },
      {
        component: Son7Feedback,
        name: "Son7Feedback",
        path: "/contral/Son7Feedback"
      },
      {
        component: Son4Custom,
        name: "Son4Custom",
        path: "/contral/Son4Custom"
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
