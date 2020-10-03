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
  import Footer from '../components/Footer'
  import AppBar from '../components/AppBar'

  export default {
    name: 'LayoutNoAppBar',
    components: {
      Footer,
      AppBar
    },
  }
</script>

