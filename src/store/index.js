import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex)

const state = {
  loading: false,
  data: [],
  num: {
    awakeNum: 0,
    closeNum: 0,
    devNum: 0,
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
