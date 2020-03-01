import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/main";
import Signin from "../views/signin";
import Editor from "../views/editor";
import Register from "../views/register";
import Notice from "../views/notice";
import Custom from "../views/custom";
import Account from "../views/account";
import Pay from "../views/pay";

//管理员
import Contral from "../views/contral";
import Son1Manage from "../views/Contral/son1Manage";
import Son1ManageNew from "../views/Contral/son1ManageNew";
import Son2CarMap from "../views/Contral/son2CarMap";
import Son2_1Driver from "../views/Contral/son2_1Driver";
import Son2_2DriReg from "../views/Contral/son2_2DriReg";
import Son3MerchartMap from "../views/Contral/son3MerchartMap";
import Son3MerchartMapNew from "../views/Contral/son3MerchartMapNew";
import Son4Custom from "../views/Contral/son4Custom";
import Son5Record from "../views/Contral/son5Record";
import Son6Notice from "../views/Contral/son6Notice";
import Son7Feedback from "../views/Contral/son7Feedback";
import Son7_1Replay from "../views/Contral/son7_1Replay";

//商铺
import merchartContral from "../views/merchartContral";
import Son1Custom from "../views/merchartContral/son1Custom";
import Son2Manager from "../views/merchartContral/son2Manager";
import Son2_1Manager from "../views/merchartContral/son2_1Manager";
import Son2_2Manager from "../views/merchartContral/son2_2Manager";
import Son2Test from "../views/merchartContral/son2Test";
import Son3Feedback from "../views/merchartContral/son3Feedback";

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
    component: Pay,
    name: "Pay",
    path: "/Pay"
  },
  {
    component: Custom,
    name: "Custom",
    path: "/Custom"
  },
  {
    component: Account,
    name: "Account",
    path: "/Account",
    meta: {
      requireAuth: true
    }
  },
  {
    component: merchartContral,
    name: "merchartContral",
    path: "/merchartContral",
    children: [
      {
        path: "",
        redirect: "/merchartContral/Son1Custom"
      },
      {
        component: Son1Custom,
        name: "Son1Custom",
        path: "/merchartContral/Son1Custom",
        meta: {
          requireAuth: true
        }
      },
      {
        component: Son2Manager,
        name: "Son2Manager",
        path: "/merchartContral/Son2Manager",
        children: [
          {
            path: "",
            redirect: "/merchartContral/Son2Manager/Son2Test"
          },
          {
            component: Son2_1Manager,
            name: "Son2_1Manager",
            path: "/merchartContral/Son2Manager/Son2_1Manager"
          },
          {
            component: Son2_2Manager,
            name: "Son2_2Manager",
            path: "/merchartContral/Son2Manager/Son2_2Manager"
          },
          {
            component: Son2Test,
            name: "Son2Test",
            path: "/merchartContral/Son2Manager/Son2Test"
          }
        ]
      },

      {
        component: Son3Feedback,
        name: "Son3Feedback",
        path: "/merchartContral/Son3Feedback"
      }
    ]
  },
  {
    component: Contral,
    name: "Contral",
    path: "/contral",
    meta: {
      requireAuth: true
    },
    children: [
      {
        path: "",
        redirect: "/contral/Son1ManageNew",
        meta: {
          requireAuth: true
        }
      },
      {
        component: Son1Manage,
        name: "Son1Manage",
        path: "/contral/Son1Manage",
        meta: {
          requireAuth: true
        }
      },
      {
        component: Son1ManageNew,
        name: "Son1ManageNew",
        path: "/contral/Son1ManageNew",
        meta: {
          requireAuth: true
        }
      },
      {
        component: Son2CarMap,
        name: "Son2CarMap",
        path: "/contral/Son2CarMap"
      },
      {
        component: Son2_1Driver,
        name: "Son2_1Driver",
        path: "/contral/Son2_1Driver"
      },
      {
        component: Son2_2DriReg,
        name: "Son2_2DriReg",
        path: "/contral/Son2_2DriReg"
      },
      {
        component: Son3MerchartMap,
        name: "Son3MerchartMap",
        path: "/contral/Son3MerchartMap"
      },
      {
        component: Son3MerchartMapNew,
        name: "Son3MerchartMapNew",
        path: "/contral/Son3MerchartMapNew"
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
        component: Son7_1Replay,
        name: "Son7_1Replay",
        path: "/contral/Son7_1Replay"
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
    component: Editor,
    name: "Editor",
    path: "/Editor",
    meta: {
      requireAuth: true
    }
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
