export default {
  getNum: state => type => {
    return state[type];
  }
};
