export default{
  setNum (state, payload) {
    return state.num.devNum = payload.devNum;
  },
  awakeDevice (state, num) {
    return state.num.awakeNum += 1
  }
}
