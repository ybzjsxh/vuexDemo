export default {
  getNum: state => type => {
    return state.num[type]
  }
}
