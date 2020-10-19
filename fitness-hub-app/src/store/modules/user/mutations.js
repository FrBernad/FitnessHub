export default {
  setUserData(state, payload) {
    state.username = payload.username;
    state.userID = payload.id;
    state.email = payload.email;
  },
};
