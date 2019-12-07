import axios from "axios";

export default {
  async login({ commit, state }, { pass }) {
    commit("setError", "");
    commit("setLoading", true);
    axios.post("/login", {
      pass
    });
  },
  setNum({ commit }, payload) {
    commit("setNum", { devNum: payload.devNum });
  },
  error2({ commit }) {
    commit("error2", "payload2");
  },
  wakeDevice(context, index) {
    this.axios
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
