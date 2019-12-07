import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';

const state = {
  loading: false,
  err1: false,
  err2: false,
  data: [],
  awakeNum: 0,
  closeNum: 0,
  devNum: 0,
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: debug
})
