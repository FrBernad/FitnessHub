import Vue from 'vue'
import Vuex from 'vuex'

import pathify from "vuex-pathify";

import app from './modules/app/index.js';
import user from '../../../../../../ING. SOFT/Listy/ListyProject/listy-app/src/store/modules/user/index.js';
import api from './modules/api/index.js';

Vue.use(Vuex)

const store = {
  modules: {
    app, user, api
  }
}

export default new Vuex.Store({
  plugins: [pathify.plugin],
  ...store
})
