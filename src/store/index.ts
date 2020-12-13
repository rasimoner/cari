import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentPage: "/",
  },
  getters: {
    getCurrentPage: (state) => {
      return state.currentPage;
    },
  },
  mutations: {
    changeCurrentPage(state, payload) {
      if (payload != state.currentPage) {
        state.currentPage = payload;
      }
    },
  },
  actions: {
    changeCurrentPage({ commit }, payload) {
      commit("changeCurrentPage", payload);
    },
  },
  modules: {},
});
