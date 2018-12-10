import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import constants from "./constants";
import layout from "./layout";

import mutations from "./mutations";
export default new Vuex.Store({
  state: {
    constants,
    layout,
    me: {
      firstName: "Mohammed",
      lastName: "Hamdoune"
    }
  },
  mutations,
  actions: {
    toggleMenu: context => {
      context.commit("toggleMenu")
    }
  }
});
