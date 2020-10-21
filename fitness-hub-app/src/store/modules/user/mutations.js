export default {
  setUserData(state, payload) {
    state.username = payload.username;
    state.userID = payload.id ? payload.id : state.userID;
    state.email = payload.email ? payload.email: `user${state.userID}@email.com`;
    state.phone = payload.phone ? payload.phone:"";
    state.gender = payload.gender;
    state.birthdate = payload.birthdate ? payload.birthdate : "";
    state.avatarUrl = payload.avatarUrl;
  },

};
