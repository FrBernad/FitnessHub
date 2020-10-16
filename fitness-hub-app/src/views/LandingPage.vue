<template>
  <v-container fill-height fluid class="bg">
    <LoginOverlay :l-on="loginOverlay" @closeLoginOverlay="loginOverlay=false"></LoginOverlay>
    <RegisterOverlay :r-on="registerOverlay" @closeRegisterOverlay="registerOverlay=false"></RegisterOverlay>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <v-container fluid>
          <h1 class="text-center text-h5 text-sm-h3 text-md-h1 font-weight-bold whiteCS--text shadow">Train yourself and<br>others.</h1>
          <p class="text-center ma-0 text-subtitle-1 text-sm-h5 text-md-h4 font-weight-medium whiteCS--text shadow px-5 pt-5">High-quality workout routines
            <br> anywhere, anytime.</p>
        </v-container>
      </v-col>
      <v-col cols="7" md="5" lg="4">
        <v-container fluid>
          <v-row align="center" justify="space-around">
            <v-col cols="12" sm="6" class="d-flex justify-center">
              <v-btn @click="registerOverlay=true"
                     x-large min-width="96%"
                     min-height="45px"
                     elevation="5"
                     id="register"
              >
                + Register
              </v-btn>
            </v-col>
            <v-col cols="12" sm="6" class="d-flex justify-center">
              <v-btn @click="loginOverlay=true"
                     x-large min-width="96%"
                     min-height="45px"
                     outlined
                     color="#F8F9FA" elevation="5"
              >
                Login
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import LoginOverlay from "../components/LoginOverlay";
  import RegisterOverlay from "../components/RegisterOverlay";

  export default {
    name: 'LandingPage',
    components: {
      LoginOverlay,
      RegisterOverlay
    },
    data() {
      return {
        loginOverlay: false,
        registerOverlay: false
      }
    },
  }
</script>

<style scoped>
  .shadow {
    text-shadow: 2px 2px 4px #1C1C1C;
  }

  #register {
    background-color: rgba(248, 249, 250, 0.25);
    color: #F8F9FA;
    border: thin solid #F8F9FA;
  }

  .bg {
    background: transparent;
  }
</style>
