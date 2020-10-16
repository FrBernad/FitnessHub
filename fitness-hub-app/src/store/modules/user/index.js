import {make} from 'vuex-pathify'

import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';
import state from './state.js';

export default {
  namespaced: true,
  state,
  mutations:{
     ...make.mutations(state),
    ...mutations
  },
  actions:{
    ...make.actions(state),
    // actions
  },
  getters:{
    ...make.getters(state),
    // getters
  },
};
