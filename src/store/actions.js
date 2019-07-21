export default {
  setNum (context, num) {
    context.commit('setNum', num)
  },
  error2 (context) {
    context.commit('error2', 'payload2')
  }
}


