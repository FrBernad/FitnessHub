import Vue from 'vue'
import Vuex from 'vuex'

import pathify from "vuex-pathify";

import * as modules from './modules'

Vue.use(Vuex)

const store = {
  modules
}

export default new Vuex.Store({
  plugins: [pathify.plugin],
  ...store
})
