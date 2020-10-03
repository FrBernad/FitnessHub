<template>
  <v-app>
    <HomeAppBar></HomeAppBar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
  import Footer from '../components/Footer'
  import HomeAppBar from '../components/HomeAppBar'

  export default {
    name: 'LayoutDefault',
    components: {
      Footer,
      HomeAppBar
    },
  }
</script>
