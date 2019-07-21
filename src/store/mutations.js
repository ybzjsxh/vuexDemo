export default{
  setNum (state, num) {
    return state.num.devNum = num;
  },
  error1 (state) {
    return state.err1 = true
  },
  error2 (state) {
    return state.err2 = true
  }
}
