<template>
  <v-footer app color="rgb(33, 37, 41)" elevation="4" padless tile absolute>
    <v-row align="center" justify="center" class="justify-md-start">
      <v-col v-if="$vuetify.breakpoint.mdAndUp" md="4" class="d-flex align-center justify-center offset-md-4">
        <p class="text-center text-caption mb-0">Copyright © 2020 FitnessHub inc.<br>All rights reserved.</p>
      </v-col>
      <v-col cols="7" sm="5" md="3" class="d-flex justify-space-around align-center">
        <v-btn href="https://www.facebook.com/" target="_blank" icon color="rgb(173, 181, 189)">
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn href="https://www.twitter.com/" target="_blank" icon color="rgb(173, 181, 189)">
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
        <v-btn href="https://www.instagram.com/" target="_blank" icon color="rgb(173, 181, 189)">
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>
  p {
    color: #ADB5BD;
  }
</style>
