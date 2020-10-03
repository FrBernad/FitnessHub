<template>
  <v-app>
    <AppBar></AppBar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
  import Footer from '../components/LandingFooter'
  import AppBar from '../components/LandingAppBar'

  export default {
    name: 'LayoutNoAppBar',
    components: {
      Footer,
      AppBar
    },
  }
</script>

<style>
  #app {
    height: 100%;
    background: linear-gradient(
      rgba(33, 37, 41, 0.4),
      rgba(33, 37, 41, 0.4)
    ), url("../assets/imgs/landingPageBG.jpg") no-repeat center;
    background-size: cover;
  }
</style>
