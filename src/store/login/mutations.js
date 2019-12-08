import * as types from "./mutation_types";
import gstate from '../global/state'

export default {
  [types.SET_TOKEN](state, payload) {
    gstate.token = payload.token;
    localStorage.setItem("token", payload.token);
  }
};
