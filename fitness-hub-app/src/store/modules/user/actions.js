export default {
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
