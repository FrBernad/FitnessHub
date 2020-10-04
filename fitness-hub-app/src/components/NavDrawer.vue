<template>
  <v-navigation-drawer app
                       v-model="drawer"
                       absolute
                       temporary
                       color="rgb(33, 37, 41)"
  >
    <v-list
      nav
      dense
    >
      <v-list-item-group
        dark
        active-class="whiteCS--text text--accent-4"
      >
        <router-link to="/userHome">
          <v-img src="../assets/imgs/brand.png" class="mt-2 my-4" contain max-width="220" max-height="50">
          </v-img>
        </router-link>
        <v-list-item to="/userHome" exact>
          <v-list-item-title>HOME</v-list-item-title>
        </v-list-item>
        <v-list-item to="/userHome/createRoutine" exact>
          <v-list-item-title>CREATE ROUTINE</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon class="px-1">mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>JOE</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: "NavDrawer",
    computed: {
      drawer: {
        get() {
          return this.$store.state.drawer;
        },
        set(value) {
          this.$store.commit("changeDrawer", value);
        }
      }
    },
  }
</script>

<style scoped>

</style>
