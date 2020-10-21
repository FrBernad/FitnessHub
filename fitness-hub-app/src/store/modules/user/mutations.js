export default {
  setUserData(state, payload) {
    state.username = payload.username;
    state.userID = payload.id;
    state.email = payload.email;
    state.phone = payload.phone;
    state.gender = payload.gender;
    state.birthdate = payload.birthdate;
    state.avatarUrl = payload.avatarUrl;
  },

};
