import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    path: "118.31.12.146",
    //定制页面
    custom: true,
    //登录姓名
    username:"test"
  },
  mutations: {
    customModify(state) {
      return (state.custom = false);
    },
    customModifyToo(state) {
      return (state.custom = true);
    }
  },
  actions: {},
  modules: {}
});
