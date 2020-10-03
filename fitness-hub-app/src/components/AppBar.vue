<template>
  <v-app-bar app>
    <v-img src="../assets/imgs/brand.png" contain max-width="250" max-height="75">
    </v-img>
    <v-spacer/>
    <v-list>
      <v-list-item-group>
        <v-list-item selectable>
          <v-list-item-title >About Us</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-app-bar>
</template>

<script>
  export default {
    name: "AppBar"
  }
</script>

<style scoped>

</style>
