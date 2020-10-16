export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.didAutoLogout = false;
    state.userID = payload.userID
  },
  setAutoLogout(state) {
    state.didAutoLogout = true;
  }
};
