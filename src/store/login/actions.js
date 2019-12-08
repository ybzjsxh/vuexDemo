import axios from "axios";
import * as types from "./mutation_types";
import { SET_LOADING } from "../global/mutation_types";

export default {
  async login({ commit, state }, { pass }) {
    commit(SET_LOADING, { loading: true });
    return new Promise((resolve, reject) => {
      axios
        .post("/login", { pass })
        .then(res => {
          if (!!res && res.data.code === 200) {
            commit(SET_LOADING, { loading: false });
            commit(types.SET_TOKEN, { token: "123456" });
            resolve(res);
          } else {
            commit(SET_LOADING, { loading: false });
            reject(res);
          }
        })
        .catch(err => console.log(err));
    });
  }
};
