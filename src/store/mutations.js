export default {
  setError(state, payload) {
    state.error = payload.error;
  },
  setLoading(state, payload) {
    state.loading = payload.loading;
  },
  setNum(state, payload) {
    state.devNum = payload.devNum;
  },
  setCloseNum(state, payload) {
    state.closeNum += 1;
  },
  setAwakeNum(state, payload) {
    state.awakeNum += 1;
  },
  setDevNum(state, payload) {
    state.devNum += 1;
  }
};
