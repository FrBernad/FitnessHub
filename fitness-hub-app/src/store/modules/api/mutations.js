  export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.didAutoLogout = false;
  },
  setAutoLogout(state) {
    state.didAutoLogout = true;
  }
};
