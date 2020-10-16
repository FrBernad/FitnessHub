let timer;

export default {
  async signUp(context, payload) {
    await context.dispatch('auth', {
      ...payload,
      mode: "signUp"
    });

    const userData = {
      username: payload.username,
    };
    await context.dispatch('user/addUserToDB', userData);
  },

  async signIn(context, payload) {
    await context.dispatch('auth', {
      ...payload,
      mode: "signIn"
    });
  },

  async auth(context, payload) {
    let url;

    if (payload.mode === "signIn")
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCJpNwyGsEvaSuId3AqI9j4zoVC8zwPKls";
    else if (payload.mode === "signUp")
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCJpNwyGsEvaSuId3AqI9j4zoVC8zwPKls`
    else
      throw new Error("invalid mode");

    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    })

    let responseData = await response.json();

    if (!response.ok) {
      console.log(responseData);
      throw new Error(responseData.message);
    }

    const expiresIn = +responseData.expiresIn * 1000;
    const expirationDate = new Date().getTime() + expiresIn;

    localStorage.setItem('token', responseData.idToken);
    localStorage.setItem('userId', responseData.localId);
    localStorage.setItem('tokenExpiration', expirationDate);

    timer = setTimeout(function () {
      context.dispatch('autoLogout');
    }, expiresIn);

    const userAuth = {
      token: responseData.idToken,
      userId: responseData.localId,
    }

    context.commit('setUser', userAuth);

    url = `https://listy-itba-app.firebaseio.com/users/${userAuth.userId}.json?auth=` +
      userAuth.token;

    response = await fetch(url);

    responseData = await response.json();

    if (!response.ok) {
      throw new Error("Error getting user data in login");
    }

    let userData = {username: ""};
    for (const key in responseData) {
      userData.username = responseData[key].username
    }

    context.commit("user/setUserData", userData);
  },

  async tryLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const tokenExpiration = localStorage.getItem('tokenExpiration');

    const expiresIn = +tokenExpiration - new Date().getTime();

    if (expiresIn < 1000 * 60)
      return;

    timer = setTimeout(function () {
      context.dispatch('autoLogout');
    }, expiresIn);

    if (token && userId) {
      context.commit('setUser', {
        token: token,
        userId: userId,
      });

      const url = `https://listy-itba-app.firebaseio.com/users/${userId}.json?auth=` +
        token;

      const response = await fetch(url);

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error("Error getting user data in login");
      }
      let userData = {username: ""};
      for (const key in responseData) {
        userData.username = responseData[key].username
      }
      context.commit("user/setUserData", userData);
    }
  }
  ,

  autoLogout(context) {
    console.log("loggin out");
    context.dispatch('logout');
    context.commit('setAutoLogout');
  }
  ,

  logout(context) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenExpiration');

    clearTimeout(timer);

    context.commit('setUser', {
      token: null,
      userId: null,
    })
  },

  async addUserToDB(context, payload) {
    const userId = context.rootGetters.userId
    const token = context.rootGetters.token

    const response = await fetch(`https://listy-itba-app.firebaseio.com/users/${userId}.json?auth=` +
      token,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
      });

    if (!response.ok) {
      throw new Error("Error loading user data to db");
    }

    const user = {
      username: payload.username
    };

    context.commit("setUserData", user);
  },
}
