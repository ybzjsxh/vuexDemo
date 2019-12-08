import * as types from './mutation_types';

export default {
  [types.SET_NUM](state, payload) {
    state.awakeNum = payload.awakeNum || 0;
    state.closeNum = payload.closeNum || 0;
    state.devNum = payload.devNum || 0;
  },
  [types.SET_CLOSENUM](state, payload) {
    state.closeNum += 1;
  },
  [types.SET_AWAKENUM](state, payload) {
    state.awakeNum += 1;
  },
  [types.SET_DEVNUM](state, payload) {
    state.devNum += 1;
  }
}
