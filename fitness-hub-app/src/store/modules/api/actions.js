export default {

  async signUp(context, payload) {

    let response = await fetch(`${context.getters.baseUrl}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...payload,
        fullName: "",
        gender: "other",
        birthdate: 284007600000,
      })
    })

    let responseData = await response.json();
    let errorMessage = "";
    if (!response.ok) {
      switch (responseData.code) {
        case 2:
          errorMessage = "There is already a user registered under that email"
          break;
        default:
          errorMessage = responseData.description;
          break;
      }
      throw new Error(errorMessage);
    }
  },

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
    let errorMessage = "";
    if (!response.ok) {
      switch (responseData.code) {
        case 4:
          errorMessage = "Username or password incorrect"
          break;
        default:
          errorMessage = responseData.description;
          break;
      }
      throw new Error(errorMessage);
    }

    localStorage.setItem('token', responseData.token);

    const userAuth = {
      token: responseData.token,
    }

    context.commit('setUser', userAuth);

    let url = `${context.getters.baseUrl}/user/current`

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

    context.commit("user/setUserData", responseData);
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

      let url = `${context.getters.baseUrl}/user/current`
      let response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `bearer ${context.getters.token}`
        },
      });
      let responseData = await response.json();
      if (!response.ok) {
        throw new Error("Failed to autologin");
      }
      context.commit("user/setUserData", responseData);
    }
  },

  async verifyAccount(context, payload) {
    let response = await fetch(`${context.getters.baseUrl}/user/verify_email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: payload.email,
        code: payload.code,
      })
    })

    if (!response.ok) {
      throw new Error(response.statusText);
    }
  },

  async resendVerification(context, payload) {
    let response = await fetch(`${context.getters.baseUrl}/user/resend_verification`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: payload.email,
      })
    })

    if (!response.ok) {
      throw new Error(response.statusText);
    }
  },

  async getCurrentUserRoutines(context, payload) {
    let response = await fetch(`${context.getters.baseUrl}/user/current/routines/?` + new URLSearchParams({
      ...payload
    }), {
      headers: {
        'Authorization': `bearer ${context.getters.token}`,
      }
    });

    let responseData = await response.json();

    if (!response.ok) {
      console.log(responseData);
      throw new Error(responseData.message);
    }

    return responseData;
  },

  async getRoutines(context, payload) {
    let response = await fetch(`${context.getters.baseUrl}/routines?` + new URLSearchParams({
      ...payload
    }), {
      headers: {
        'Authorization': `bearer ${context.getters.token}`,
      }
    });

    let responseData = await response.json();

    if (!response.ok) {
      console.log(responseData);
      throw new Error(responseData.message);
    }

    return responseData;
  },

  async checkIfFav(context, payload) {
    let routinesData;
    try {
      routinesData = await context.dispatch("getFavouriteRoutines", {
        page: 0,
        size: 1000,
        orderBy: `id`,
        direction: `desc`
      });
    } catch (e) {
      throw new Error(e);
    }
    const routines = routinesData.results;
    for (const routine of routines) {
      if (routine.id === payload.routineId) {
        return true;
      }
    }
    return false;
  },

  async getFavouriteRoutines(context, payload) {
    let response = await fetch(
      `${context.getters.baseUrl}/user/current/routines/favourites?` + new URLSearchParams({
        ...payload
      }), {
        headers: {
          'Authorization': `bearer ${context.getters.token}`,
        }
      });

    let responseData = await response.json();

    if (!response.ok) {
      console.log(responseData);
      throw new Error(responseData.message);
    }

    return responseData;
  },

  async rateRoutine(context, payload) {
    let response = await fetch(
      `${context.getters.baseUrl}/routines/${payload.routineId}/ratings?`
      + new URLSearchParams({routineId: payload.routineId}),
      {
        body: JSON.stringify({
          score: parseInt(payload.score),
          review: ""
        }),
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `bearer ${context.getters.token}`,
        },
      });

    let responseData = await response.json();

    if (!response.ok) {
      console.log(responseData);
      throw new Error(responseData.message);
    }
    return responseData;
  },

  async getRoutineByID(context, payload) {
    let response = await fetch(`${context.getters.baseUrl}/routines/${payload.routineId}?` + new URLSearchParams({
      ...payload
    }), {
      headers: {
        'Authorization': `bearer ${context.getters.token}`,
      }
    });

    let responseData = await response.json();

    if (!response.ok) {
      console.log(responseData);
      throw new Error(responseData.message);
    }

    return responseData;
  },

  async addToFavourites(context, payload) {
    let response = await fetch(
      `${context.getters.baseUrl}/user/current/routines/${payload.routineId}/favourites?` + new URLSearchParams({
        ...payload
      }), {
        method: "POST",
        headers: {
          'Authorization': `bearer ${context.getters.token}`,
        }
      });

    if (!response.ok) {
      console.log(response);
      throw new Error(response.statusText);
    }
  },

  async removeFromFavourites(context, payload) {
    let response = await fetch(
      `${context.getters.baseUrl}/user/current/routines/${payload.routineId}/favourites?` + new URLSearchParams({
        ...payload
      }), {
        method: "DELETE",
        headers: {
          'Authorization': `bearer ${context.getters.token}`,
        }
      });

    if (!response.ok) {
      console.log(response);
      throw new Error(response.statusText);
    }
  },

  async getRoutineCycles(context, payload) {
    let response = await fetch(`${context.getters.baseUrl}/routines/${payload.routineId}/cycles/?` + new URLSearchParams({
      ...payload
    }), {
      headers: {
        'Authorization': `bearer ${context.getters.token}`,
      }
    });

    let responseData = await response.json();

    if (!response.ok) {
      console.log(responseData);
      throw new Error(responseData.message);
    }

    return responseData;
  },

  async getCycleExercises(context, payload) {
    let response = await fetch(
      `${context.getters.baseUrl}/routines/${payload.routineId}/cycles/${payload.cycleId}/exercises?` + new URLSearchParams({
        ...payload
      }), {
        headers: {
          'Authorization': `bearer ${context.getters.token}`,
        }
      });

    let responseData = await response.json();

    if (!response.ok) {
      console.log(responseData);
      throw new Error(responseData.message);
    }

    return responseData;
  },

  async createRoutine(context, payload) {

    let response = await fetch(`${context.getters.baseUrl}/routines`, {
      body: JSON.stringify(
        {
          ...payload
        }),
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

    return responseData;
  },

  async createCycle(context, payload) {
    let response = await fetch(`${context.getters.baseUrl}/routines/${payload.routineId}/cycles`, {
      body: JSON.stringify(
        {
          name: payload.cycle.name,
          detail: payload.cycle.name,
          type: payload.cycle.name,
          order: payload.cycle.order,
          repetitions: 1,
        }),
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

    return responseData;
  },

  async addToCycleExercise(context, payload) {
    let response = await fetch(`${context.getters.baseUrl}/routines/${payload.routineId}/cycles/${payload.cycleId}/exercises`, {
      body: JSON.stringify(
        {
          name: payload.exercise.name,
          detail: payload.exercise.detail,
          type: payload.exercise.type,
          duration: parseInt(payload.exercise.duration),
          repetitions: parseInt(payload.exercise.repetitions),
        }),
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

    return responseData;
  },

  async addExercisePhoto(context,payload){
    let response = await fetch(`${context.getters.baseUrl}/routines/${payload.routineId}/cycles/${payload.cycleId}/exercises/${payload.exerciseId}/images`,
      {
      body: JSON.stringify(
        {
          number: payload.number,
          url: payload.url,
        }),
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

    return responseData;
  },

  async getImage(context,payload){
    let response = await fetch(`${context.getters.baseUrl}/routines/${payload.routineId}/cycles/${payload.cycleId}/exercises/${payload.exerciseId}/images`,
      {
        headers: {
          'Authorization': `bearer ${context.getters.token}`,
        }
      });

    let responseData = await response.json();

    if (!response.ok) {
      console.log(responseData);
      throw new Error(responseData.message);
    }
    console.log(responseData);

    return responseData;
  },


  async getVideo(context,payload){
    let response = await fetch(`${context.getters.baseUrl}/routines/${payload.routineId}/cycles/${payload.cycleId}/exercises/${payload.exerciseId}/videos`,
      {
        headers: {
          'Authorization': `bearer ${context.getters.token}`,
        }
      });

    let responseData = await response.json();

    if (!response.ok) {
      console.log(responseData);
      throw new Error(responseData.message);
    }
    console.log(responseData);
    return responseData;
  },


  async addExerciseVideo(context,payload){
    let response = await fetch(`${context.getters.baseUrl}/routines/${payload.routineId}/cycles/${payload.cycleId}/exercises/${payload.exerciseId}/videos`,
      {
        body: JSON.stringify(
          {
            number: payload.number,
            url: payload.url,
          }),
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
    return responseData;
  },

  async removeExerciseFromCycle(context, payload) {
    let response = await fetch(`${context.getters.baseUrl}/routines/${payload.routineId}/cycles/${payload.cycleId}/exercises/${payload.exerciseId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `bearer ${context.getters.token}`,
      }
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

  },

  async removeCycle(context, payload) {
    let response = await fetch(`${context.getters.baseUrl}/routines/${payload.routineId}/cycles/${payload.cycleId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `bearer ${context.getters.token}`,
      }
    });


    if (!response.ok) {
      throw new Error(response.statusText);
    }

  },

  async removeRoutine(context, payload) {
    let response = await fetch(`${context.getters.baseUrl}/routines/${payload.routineId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `bearer ${context.getters.token}`,
      }
    });


    if (!response.ok) {
      throw new Error(response.statusText);
    }

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
