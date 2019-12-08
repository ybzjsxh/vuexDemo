import axios from "axios";

export default {
  setNum({ commit }, { devNum }) {
    commit("setNum", { devNum });
  },
  wakeDevice(context, index) {
    axios
      .get("/wakeDevice", {
        params: {
          index
        }
      })
      .then(() => {
        this.data = { loading: true, data: [...this.data] };
        setTimeout(() => {
          this.data = { loading: false };
        }, 500);
      })
      .catch(err => {
        this.$message.error("请求失败！");
        console.log(err.message);
      });
  }
};