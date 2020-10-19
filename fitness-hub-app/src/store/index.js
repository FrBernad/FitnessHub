import Vue from 'vue'
import Vuex from 'vuex'

import pathify from "vuex-pathify";

import app from './modules/app/index.js';
import user from './modules/user/index.js';
import api from './modules/api/index.js';
import routines from './modules/routines/index.js';

Vue.use(Vuex)

const store = {
  modules: {
    app, user, api, routines
  }
}

export default new Vuex.Store({
  plugins: [pathify.plugin],
  ...store
})
