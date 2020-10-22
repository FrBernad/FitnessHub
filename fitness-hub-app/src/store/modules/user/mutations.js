export default {
  setUserData(state, payload) {
    state.username = payload.username;
    state.userID = payload.id ? payload.id : state.userID;
    state.email = payload.email;
    state.phone = payload.phone ? payload.phone:"";
    state.gender = payload.gender;
    state.birthdate = payload.birthdate ? `${new Date(payload.birthdate).toISOString().substr(0, 10)}` : "";
    state.avatarUrl = payload.avatarUrl ? payload.avatarUrl : "";
    state.fullName = payload.fullName ? payload.fullName : "";
  },

};
