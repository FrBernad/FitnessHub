export default {
  async updateProfile(context,payload){
    console.log(payload);
    let response = await fetch(`${context.rootGetters.baseUrl}/user/current`, {
      body: JSON.stringify(
        {
          username: payload.username,
          password:payload.password,
          fullName:payload.fullName,
          gender:payload.gender,
          birthdate:payload.birthdate,
          email:payload.email,
          phone:payload.phone,
          avatarUrl:'',
        }),
      method: 'PUT',
      headers: {
        'Authorization': `bearer ${context.rootGetters.token}`,
        'Content-Type': 'application/json'
      }
    });

    let responseData = await response.json();

    if (!response.ok) {
      console.log(responseData);
      throw new Error(responseData.message);
    }

    return responseData;
  },

}
