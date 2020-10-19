<template>
  <v-app>
    <AppBar></AppBar>
    <v-main>
      <v-fade-transition appear>
        <router-view></router-view>
      </v-fade-transition>
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
      rgba(33, 37, 41, 0.65),
      rgba(33, 37, 41, 0.65)
    ), url("../assets/imgs/landingPageBG.jpg") no-repeat center;
    background-size: cover;
  }
</style>
