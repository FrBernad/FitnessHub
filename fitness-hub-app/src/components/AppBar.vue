<template>
  <v-app-bar app color="rgb(33, 37, 41)" elevation="4">
    <v-app-bar-nav-icon
      class="hidden-md-and-up whiteCS--text"
      @click="drawer=!drawer">
    </v-app-bar-nav-icon>
    <template v-if="$vuetify.breakpoint.smAndUp">
      <router-link to="/home">
        <v-img src="../assets/imgs/brand.png" contain max-width="220" max-height="50">
        </v-img>
      </router-link>
      <template v-if="$vuetify.breakpoint.mdAndUp">
        <v-tabs fixed-tabs color="rgb(248, 249, 250)" dark>
          <v-tab to="/home" exact>HOME</v-tab>
          <v-tab to="/home/communityWorkouts" exact>COMMUNITY WORKOUTS</v-tab>
          <v-tab to="/home/myRoutines" exact>MY ROUTINES</v-tab>
          <v-tab to="/home/profile" exact>
            <v-icon class="px-1">mdi-account</v-icon>
            Faus
          </v-tab>
        </v-tabs>
      </template>
    </template>
  </v-app-bar>
</template>

<script>
  import {sync} from 'vuex-pathify'

  export default {
    name: "AppBar",
    computed: {
      ...sync('app', ['drawer'])
    },
  }
</script>
