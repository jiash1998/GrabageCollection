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
    //登录姓名
    username: "test",
    mapStart: "滁州市琅琊区南谯北路苏宁广场",
    mapEnd: "安徽省滁州市丰乐大道1528号",
    //公告类型
    noticeType: "普通公告"
  },
  mutations: {
    viewUsername(state, payload) {
      return (state.username = payload);
    },
    // SetCustomAddress(state, payload) {
    //   return (state.customAddress = payload);
    // },
    // SetCustomAddressDetail(state, payload) {
    //   return (state.customAddressDetail = payload);
    // },
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
