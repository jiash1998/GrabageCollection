import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/main";
import Signin from "../views/signin";
import Register from "../views/register";
import Notice from "../views/notice";
import Custom from "../views/custom";
import Account from "../views/account";
import Pay from "../views/pay";
import PaySuccess from "../views/paySuccess";

//管理员
import ContralNew from "../views/contralNew";

import Son1ManageNew from "../views/Contral/son1ManageNew";
import Son2CarMap from "../views/Contral/son2CarMap";
import Son2_1Driver from "../views/Contral/son2_1Driver";
import Son2_2DriReg from "../views/Contral/son2_2DriReg";
import Son3MerchartMapNew from "../views/Contral/son3MerchartMapNew";
import Son4Custom from "../views/Contral/son4Custom";
import Son5Record from "../views/Contral/son5Record";
import Son6Notice from "../views/Contral/son6Notice";
import Son7Feedback from "../views/Contral/son7Feedback";
import Son7_1Replay from "../views/Contral/son7_1Replay";
import Son8Echarts from "../views/Contral/son8Echarts";
import Son9Enter from "../views/Contral/son9Enter";
import Son10Detail from "../views/Contral/son10Detail";

//商铺
import merchartContral from "../views/merchartContral";
import Son1Custom from "../views/merchartContral/son1Custom";
import Son2Manager from "../views/merchartContral/son2Manager";
import Son2_2ManageInner from "../views/merchartContral/son2_2ManageInner";
import Son2_1ManageOuter from "../views/merchartContral/son2_1ManageOuter";
import Son3Feedback from "../views/merchartContral/son3Feedback";
import Son4ServiceDet from "../views/merchartContral/son4ServiceDet";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/main",
  },
  {
    component: Main,
    name: "main",
    path: "/main",
  },
  {
    component: Notice,
    name: "Notice",
    path: "/Notice",
  },
  {
    component: Pay,
    name: "Pay",
    path: "/Pay",
  },
  {
    component: PaySuccess,
    name: "PaySuccess",
    path: "/PaySuccess",
  },
  {
    component: Custom,
    name: "Custom",
    path: "/Custom",
  },
  {
    component: Account,
    name: "Account",
    path: "/Account",
    meta: {
      requireAuth: true,
    },
  },
  {
    component: Son4ServiceDet,
    name: "Son4ServiceDet",
    path: "/Son4ServiceDet",
  },
  {
    component: merchartContral,
    name: "merchartContral",
    path: "/merchartContral",
    children: [
      {
        path: "",
        redirect: "/merchartContral/Son1Custom",
      },
      {
        component: Son1Custom,
        name: "Son1Custom",
        path: "/merchartContral/Son1Custom",
        meta: {
          requireAuth: true,
        },
      },
      {
        component: Son2Manager,
        name: "Son2Manager",
        path: "/merchartContral/Son2Manager",
        children: [
          {
            path: "",
            redirect: "/merchartContral/Son2Manager/Son2_1ManageOuter",
          },
          {
            component: Son2_2ManageInner,
            name: "Son2_2ManageInner",
            path: "/merchartContral/Son2Manager/Son2_2ManageInner",
          },
          {
            component: Son2_1ManageOuter,
            name: "Son2_1ManageOuter",
            path: "/merchartContral/Son2Manager/Son2_1ManageOuter",
          },
        ],
      },
      {
        component: Son3Feedback,
        name: "Son3Feedback",
        path: "/merchartContral/Son3Feedback",
      },
      // {
      //   component: Son4ServiceDet,
      //   name: "Son4ServiceDet",
      //   path: "/merchartContral/Son4ServiceDet",
      // },
    ],
  },
  {
    component: ContralNew,
    name: "ContralNew",
    path: "/ContralNew",
    meta: {
      requireAuth: true,
    },
    children: [
      {
        path: "",
        redirect: "/ContralNew/Son1ManageNew",
        meta: {
          requireAuth: true,
        },
      },
      {
        component: Son1ManageNew,
        name: "Son1ManageNew",
        path: "/ContralNew/Son1ManageNew",
        meta: {
          requireAuth: true,
        },
      },
      {
        component: Son2CarMap,
        name: "Son2CarMap",
        path: "/ContralNew/Son2CarMap",
      },
      {
        component: Son2_1Driver,
        name: "Son2_1Driver",
        path: "/ContralNew/Son2_1Driver",
      },
      {
        component: Son2_2DriReg,
        name: "Son2_2DriReg",
        path: "/ContralNew/Son2_2DriReg",
      },
      {
        component: Son3MerchartMapNew,
        name: "Son3MerchartMapNew",
        path: "/ContralNew/Son3MerchartMapNew",
      },
      {
        component: Son5Record,
        name: "Son5Record",
        path: "/ContralNew/Son5Record",
      },
      {
        component: Son6Notice,
        name: "Son6Notice",
        path: "/ContralNew/Son6Notice",
      },
      {
        component: Son7Feedback,
        name: "Son7Feedback",
        path: "/ContralNew/Son7Feedback",
      },
      {
        component: Son7_1Replay,
        name: "Son7_1Replay",
        path: "/ContralNew/Son7_1Replay",
      },
      {
        component: Son4Custom,
        name: "Son4Custom",
        path: "/ContralNew/Son4Custom",
      },
      {
        component: Son8Echarts,
        name: "Son8Echarts",
        path: "/ContralNew/Son8Echarts",
      },
      {
        component: Son9Enter,
        name: "Son9Enter",
        path: "/ContralNew/Son9Enter",
      },
      {
        component: Son10Detail,
        name: "Son10Detail",
        path: "/ContralNew/Son10Detail",
      },
    ],
  },
  {
    component: Signin,
    name: "Signin",
    path: "/signin",
  },
  {
    component: Register,
    name: "Register",
    path: "/register",
  },
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    // 判断该路由是否需要登录权限
    if (sessionStorage.getItem("token") == "true") {
      // 判断本地是否存在token
      next();
    } else {
      // 未登录,跳转到登陆页面
      alert("请先登录");
      next({ path: "/signin" });
    }
  } else {
    next();
  }
});
