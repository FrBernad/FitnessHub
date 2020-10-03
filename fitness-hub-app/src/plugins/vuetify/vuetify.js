import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import customTheme from './customTheme'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {customTheme},
  },
})
