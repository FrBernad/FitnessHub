import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer:false
  },
  getters:{
    drawer: state => {
      return state.drawer;
    }
  },
  mutations: {
    activateDrawer: state => {
      state.drawer=true;
    },
    changeDrawer: (state,payload) => {
      state.drawer=payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
