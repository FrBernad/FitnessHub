<template>
  <v-app-bar app color="rgb(33, 37, 41)" elevation="0">
    <v-app-bar-nav-icon
      class="hidden-md-and-up whiteCS--text"
      @click="activateDrawer">
    </v-app-bar-nav-icon>
    <template v-if="$vuetify.breakpoint.smAndUp">
      <router-link to="/userHome">
        <v-img src="../assets/imgs/brand.png" contain max-width="220" max-height="50">
        </v-img>
      </router-link>
      <template v-if="$vuetify.breakpoint.mdAndUp">
        <v-tabs fixed-tabs color="rgb(248, 249, 250)" dark>
          <v-tab to="/userHome" exact>HOME</v-tab>
          <v-tab>WORKOUTS</v-tab>
          <v-tab to="/userHome/createRoutine" exact>CREATE ROUTINE</v-tab>
          <v-tab>MY ROUTINES</v-tab>
          <v-tab to="/userHome/profile" exact>
            <v-icon class="px-1">mdi-account</v-icon>
            JOE
          </v-tab>
        </v-tabs>
      </template>
    </template>
  </v-app-bar>
</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    name: "AppBar",
    methods: {
      ...mapMutations([
        'activateDrawer'
      ])
    }
  }
</script>

<style scoped>

</style>

