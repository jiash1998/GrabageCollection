import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    path: "118.31.12.146",
    //定制页面
    custom: true,
    //登录姓名
    username: "test",
    mapStart: "滁州市琅琊区南谯北路苏宁广场",
    mapEnd: "安徽省滁州市丰乐大道1528号"
  },
  mutations: {
    viewUsername(state,payload){
      return state.username = payload;
    },
    customModify(state) {
      return (state.custom = false);
    },
    customModifyToo(state) {
      return (state.custom = true);
    },
    modifyPathStart(state, payload) {
      return (state.mapEnd = payload.end);
    },
    modifyPathStart(state, payload) {
      return (state.mapStart = payload.start);
    },
    modifyPathEnd(state, payload) {
      return (state.mapEnd = payload.end);
    }
  },
  actions: {},
  modules: {}
});
