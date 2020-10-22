export default {
  async updateProfile(context, payload) {
    let response = await fetch(`${context.rootGetters.baseUrl}/user/current`, {
      body: JSON.stringify(
        {
          ...payload,
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
    context.commit("setUserData",responseData);
  },

  async restoreValues(context) {
    const url = `${context.rootGetters.baseUrl}/user/current`

    const response = await fetch(url, {
      headers: {
        'Authorization': `bearer ${context.rootGetters.token}`
      },
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error("Could not auto login");
    }
    context.commit("setUserData", responseData);
  }


}
