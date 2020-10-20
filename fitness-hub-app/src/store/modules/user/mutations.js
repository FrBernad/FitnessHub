export default {
  setUserData(state, payload) {
    state.username = payload.username;
    state.userID = payload.id;
    state.email = payload.email;

  },
  setExtraData(state,payload){
    state.phone = payload.phone;
    state.gender = payload.gender;
    state.birthdate = payload.birthdate;
  }
};
