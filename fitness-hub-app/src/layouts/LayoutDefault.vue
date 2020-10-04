<template>
  <v-app>
    <AppBar></AppBar>
    <NavDrawer></NavDrawer>
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
  import Footer from '../components/Footer'
  import AppBar from '../components/AppBar'
  import NavDrawer from '../components/NavDrawer'

  export default {
    name: 'LayoutDefault',
    components: {
      Footer,
      AppBar,
      NavDrawer
    },
  }
</script>
