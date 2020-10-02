<template>
  <v-app>
    <AppBar></AppBar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  import Footer from '../components/Footer'
  import AppBar from '../components/AppBar'

  export default {
    name: 'LayoutDefault',
    components: {
      Footer,
      AppBar
    },
  }
</script>
