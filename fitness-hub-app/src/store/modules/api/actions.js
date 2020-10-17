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

    const url = `${context.getters.baseUrl}/user/current`

    response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${context.getters.token}`
      },
    });

    responseData = await response.json();

    if (!response.ok) {
      throw new Error("Failed to fetch data after login");
    }

    let userData = {
      username: responseData.username,
      userID: responseData.id,
    };

    context.commit("user/setUserData", userData);

    //await context.dispatch("seedDataBase");
  },


  async logout(context, payload) {
    let response = await fetch(`${context.getters.baseUrl}/user/logout`, {
      method: 'POST',
      headers: {
        'Authorization': `bearer ${context.getters.token}`
      }
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    localStorage.removeItem('token');

    const userAuth = {
      token: null,
    }

    context.commit('setUser', userAuth);
    context.commit('setAutoLogout');
  },

  async tryLogin(context, payload) {
    const token = localStorage.getItem('token');

    if (token) {
      context.commit('setUser', {
        token: token,
      });

      const url = `${context.getters.baseUrl}/user/current`

      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `bearer ${token}`
        },
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error("Could not auto login");
      }

      let userData = {username: responseData.username};

      context.commit("user/setUserData", userData);
    }
  },

  async getRoutines(context, payload) {
    console.log(payload);

    let response = await fetch(`${context.getters.baseUrl}/routines`, {
      headers: {
        'Authorization': `bearer ${context.getters.token}`,
        'difficulty': `${payload.difficulty}`,
        'page': `${payload.page}`,
        'size': `${payload.size}`,
        'orderBy': `${payload.orderBy}`,
        'direction': `${payload.direction}`
      },
    });

    let responseData = await response.json();

    if (!response.ok) {
      console.log(responseData);
      throw new Error(responseData.message);
    }

    return responseData;
  },

  async createRoutine(context,payload){
    console.log(payload);
    let response = await fetch(`${context.getters.baseUrl}/routines`, {
      body: JSON.stringify({...payload}),
      method: 'POST',
      headers: {
        'Authorization': `bearer ${context.getters.token}`,
        'Content-Type': 'application/json'
      }
    });

    let responseData = await response.json();

    if (!response.ok) {
      console.log(responseData);
      throw new Error(responseData.message);
    }

    console.log(responseData);

  },

  async seedDataBase(context) {
    let routines = [
      {
        name: "Get ripped",
        detail: "Get ripped with this awesome routine",
        isPublic: true,
        difficulty: "beginner",
        category: {
          id: 1
        }
      },
      {
        name: "Bulking season",
        detail: "Bulk up and fill your muscles",
        isPublic: true,
        difficulty: "advanced",
        category: {
          id: 1
        }
      },
      {
        name: "Abs for days",
        detail: "Get your 6 pack ready for summer",
        isPublic: true,
        difficulty: "beginner",
        category: {
          id: 1
        }
      },
      {
        name: "Gain it",
        detail: "Gain muscle and strenght with this routine",
        isPublic: true,
        difficulty: "advanced",
        category: {
          id: 2
        }
      },
      {
        name: "Explosive action",
        detail: "Burn your legs with this non stop routine",
        isPublic: true,
        difficulty: "beginner",
        category: {
          id: 2
        }
      },
      {
        name: "abbs",
        detail: "Full abbs Challenge",
        isPublic: true,
        difficulty: "beginner",
        category: {
          id: 1
        }
      },

      {
        name: "Squat",
        detail: "A squat is a strength exercise in which the trainee lowers their hips from a standing position and then stands back up",
        isPublic: true,
        difficulty: "beginner",
        category: {
          id: 2
        }
      },
      {
        name: "Leg press",
        detail: "The leg press is a compound weight training exercise in which the individual pushes a weight or resistance away from them using their legs.",
        isPublic: true,
        difficulty: "beginner",
        category: {
          id: 2
        }
      },
      {
        name: "Lunge",
        detail: "A lunge can refer to any position of the human body where one leg is positioned forward with knee bent and foot flat on the ground while the other leg is positioned behind.",
        isPublic: true,
        difficulty: "beginner",
        category: {
          id: 1
        }
      },
      {
        name: "Standing calf raise",
        detail: "Calf raises are a method of exercising the gastrocnemius, tibialis posterior and soleus muscles of the lower leg. The movement performed is plantar flexion, a.k.a. ankle extension",
        isPublic: true,
        difficulty: "beginner",
        category: {
          id: 2
        }
      },
      {
        name: "Abs-Abs-Abs",
        detail: "You want a sixpack, you need this routine",
        isPublic: true,
        difficulty: "intermediate",
        category: {
          id: 1
        }
      },
      {
        name: "Intense UpperBody Workout",
        detail: "Work all your UpperBody like never before",
        isPublic: true,
        difficulty: "advanced",
        category: {
          id: 2
        }
      },
      {
        name: "Chest Day",
        detail: "Intense routine focused on increasing muscle mass and chest strenght",
        isPublic: true,
        difficulty: "advanced",
        category: {
          id: 2
        }
      },
      {
        name: "Legs Day",
        detail: "Grow your legs like never before",
        isPublic: true,
        difficulty: "advanced",
        category: {
          id: 1
        }
      },
      {
        name: "Quick Warm Up",
        detail: "Warmp up yor entire body easly",
        isPublic: true,
        difficulty: "intermediate",
        category: {
          id: 1
        }
      },
      {
        name: "Quick Warm Up",
        detail: "Warmp up yor entire body easly",
        isPublic: true,
        difficulty: "intermediate",
        category: {
          id: 1
        }
      }
    ]

    for (let routine of routines) {
      let response = await fetch(`${context.getters.baseUrl}/routines`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `bearer ${context.getters.token}`
        },
        body: JSON.stringify({
          ...routine
        })
      });
      const responseData = await response.json();
      if (!response.ok) {
        console.log(responseData);
        throw new Error(response.statusText);
      }
    }
  },
}
