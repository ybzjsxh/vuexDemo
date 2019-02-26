import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    count: 10
  },
  actions: {
    increAction(context) {
      return context.commit('increament')
    }
  },
  mutations: {
    increament(state) {
      return state.count+=1
    }
  },
})
