import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex)

const state = {
  err1: false,
  err1: false,
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
