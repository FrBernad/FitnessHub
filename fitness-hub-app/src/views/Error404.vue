<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col cols="11" md="8">
        <v-card light color="F8F9FA" class="pa-5" elevation="5">
          <v-img src="../assets/imgs/LongBrandBlack.png"
                 :max-height="this.$vuetify.breakpoint.smAndDown ? '120':'180'" contain/>
          <h1 class="text-center text-h5 text-md-h3 font-weight-bold mb-5">Ooops... Error 404</h1>
          <h2 class="text-center text-h6 text-md-h4 font-weight-medium my-5">The requested url, was not found on this server.</h2>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Error404',
  }
</script>

