export default {
  setNum (context, payload) {
    context.commit('setNum', { devNum: payload.devNum })
  },
  error2 (context) {
    context.commit('error2', 'payload2')
  },
  wakeDevice(context, index) {
    this.axios.get('/wakeDevice', {
      params: {
        index
      }
    })
    .then(() => {
      this.data = ({loading: true, data: [...this.data]});
      setTimeout(() => {
        this.data = ({loading: false});
      }, 500)
    })
    .catch(err => {
      this.$message.error('请求失败！')
      console.log(err.message);
    })
  },
}


