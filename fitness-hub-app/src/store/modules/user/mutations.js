export default {
  setUserData(state, payload) {
    state.username = payload.username;
    state.userID = payload.userID;
  },
};
