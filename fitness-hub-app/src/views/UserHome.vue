<template>
  <v-container fluid fill-height class="bg">
  </v-container>

</template>

<script>
  export default {
    name: "UserHome"
  }
</script>

<style scoped>
  .bg{
    height: 100%;
    background: linear-gradient(
      rgba(33, 37, 41, 0.4),
      rgba(33, 37, 41, 0.4)
    ), url("../assets/imgs/Home.jpg") no-repeat center;
    background-size: cover;
  }
</style>
