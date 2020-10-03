<template>
    <v-app-bar app color="rgb(33, 37, 41)" elevation="0"  class="hidden-xs-and-down">
      <v-img src="../assets/imgs/brand.png" contain max-width="250" max-height="75">
      </v-img>
      <v-tabs fixed-tabs>
        <v-tab >HOME</v-tab>
        <v-tab>WORKOUTS</v-tab>
        <v-tab>CREATE ROUTINE</v-tab>
        <v-tab>MY ROUTINES</v-tab>
        <v-tab><v-icon>mdi-account</v-icon>JOE</v-tab>
      </v-tabs>
    </v-app-bar>
</template>

<script>
export default {
name: "HomeAppBar"
}
</script>

<style scoped>

</style>

