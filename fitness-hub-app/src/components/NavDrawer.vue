<template>
  <v-navigation-drawer app v-model="drawer" absolute temporary color="rgb(33, 37, 41)">
    <v-list nav dense>
      <v-list-item-group dark active-class="whiteCS--text text--accent-4">
        <router-link to="/home">
          <v-img src="../assets/imgs/brand.png" class="mt-2 my-4" contain max-width="220" max-height="50">
          </v-img>
        </router-link>
        <v-list-item to="/home/profile" exact>
          <v-list-item-icon>
            <v-icon class="px-1">mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{username}}</v-list-item-title>
        </v-list-item>
        <v-list-item to="/home" exact>
          <v-list-item-title>HOME</v-list-item-title>
        </v-list-item>
        <v-list-item to="/home/communityWorkouts" exact>
          <v-list-item-title>COMMUNITY WORKOUTS</v-list-item-title>
        </v-list-item>
        <v-list-item to="/home/myRoutines" exact>
          <v-list-item-title>MY ROUTINES</v-list-item-title>
        </v-list-item>
        <v-list-item @click="logout">
          <v-list-item-icon>
            <v-icon class="px-1">mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-title>LOGOUT</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import {sync} from 'vuex-pathify'

  export default {
    name: "NavDrawer",
    computed: {
      drawer: sync('app/drawer'),
      ...sync('user', ['username']),
    },
    methods: {
      async logout() {
        try {
          await this.$store.dispatch('logout');
        } catch (e) {
          console.log(e);
        }
      }
    }
  }
</script>
