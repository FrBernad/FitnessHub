export default {

  async signIn(context, payload) {
    let response = await fetch(`${context.getters.baseUrl}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: payload.username,
        password: payload.password,
      })
    })

    let responseData = await response.json();

    if (!response.ok) {
      console.log(responseData);
      throw new Error(responseData.message);
    }

    localStorage.setItem('token', responseData.token);

    const userAuth = {
      token: responseData.token,
    }

    context.commit('setUser', userAuth);
  },

  async logout(context, payload) {
    let response = await fetch(`${context.getters.baseUrl}/user/logout`, {
      method: 'POST',
    });

    let responseData = await response.json();

    if (!response.ok) {
      console.log(responseData);
      throw new Error(responseData.message);
    }

    localStorage.removeItem('token');

    const userAuth = {
      token: null,
    }

    context.commit('setUser', userAuth);
  },

  async tryLogin(context) {
    const token = localStorage.getItem('token');

    if (token) {
      context.commit('setUser', {
        token: token,
      });

      const url = `${context.getters.baseUrl}/user/current`

      const response = await fetch(url, {
        headers: {
          'Authorization': `bearer ${context.getters.token}`
        },
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error("Error getting user data in login");
      }

      let userData = {username: responseData.username};

      context.commit("user/setUserData", userData);
    }
  }
  ,


}
