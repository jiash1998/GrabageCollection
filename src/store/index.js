import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    path: "118.31.12.146",
    custom: true
  },
  mutations: {
    customModify(state) {
      return (state.custom = false);
    }
  },
  actions: {},
  modules: {}
});
