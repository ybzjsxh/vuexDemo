import Vue from "vue";
import Vuex from "vuex";

import global from "./global";
import login from "./login";
import device from "./device";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    login,
    device,
    global
  },
  strict: debug
});
