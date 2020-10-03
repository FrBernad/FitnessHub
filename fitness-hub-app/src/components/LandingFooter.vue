<template>
  <v-footer app color="rgba(33, 37, 41, 0.75)" elevation="3" padless tile>
    <v-row align="center">
      <v-col cols="4" class="d-flex align-center justify-center offset-4">
        <p class="text-center text-caption mb-0">Copyright © 2020 FitnessHub inc.<br>All rights reserved.</p>
      </v-col>
      <v-col cols="3" class="d-flex justify-space-around align-center" style="justify-self: end">
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
    name: "LandingFooter"
  }
</script>

<style scoped>
  p {
    color: #ADB5BD;
  }
</style>
