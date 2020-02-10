import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    path: "118.31.12.146",
    //定制页面
    // customAddress: "",
    // customAddressDetail: "",
    customUrl:"",
    //定制管理
    // clickStore:[],
    //登录姓名
    username: "",
    mapStart: "滁州市琅琊区南谯北路苏宁广场",
    mapEnd: "安徽省滁州市丰乐大道1528号",
    //公告类型
    noticeType: "普通公告"
  },
  mutations: {
    //定制信息携带
    // getCustomInfo(state,payload){
    //   return (state.clickStore = payload);
    // },
    //用户名
    viewUsername(state, payload) {
      return (state.username = payload);
    },
    resertUserName(state){
      return (state.username = "");
    },
    //修改路线
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
