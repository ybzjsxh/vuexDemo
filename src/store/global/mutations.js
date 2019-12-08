import * as types from './mutation_types'

export default {
  [types.SET_ERROR](state, payload) {
    state.error = payload.error;
  },
  [types.SET_LOADING](state, payload) {
    state.loading = payload.loading;
  },
  [types.CLEAR_TOKEN](state, payload) {
    state.token = null;
    localStorage.removeItem("token");
  },
};
