<template>
  <v-card class="ma-5 rounded-corner">
    <v-row align="start" justify="center">
      <v-col cols="12" class="px-10 pt-5" >
      <v-img class="rounded-corner" src="../assets/imgs/routineCard.jpg" height="150px"></v-img>
      </v-col>
      <v-col cols="6" class="pl-10">
        <h4>MUSCLE & STRENGHT</h4>
      </v-col>
      <v-col cols="4" class="d-flex justify-center align-center">
        <v-icon>mdi-star-outline</v-icon>
        <v-icon>mdi-star-outline</v-icon>
        <v-icon>mdi-star-outline</v-icon>
        <v-icon>mdi-star-outline</v-icon>
        <v-icon>mdi-star-outline</v-icon>
      </v-col>
      <v-col cols="2" class="d-flex justify-start align-center">
        <v-icon>mdi-heart-outline</v-icon>
      </v-col>
      <v-col cols="9" class="pl-10 pt-0">
        <h5>by JOE</h5>
      </v-col>
      <v-col cols="3"class="d-flex justify-end align-center pr-10" >
        <h5>15 min</h5>
      </v-col>
    </v-row>


  </v-card>
</template>

<script>
export default {
name: "RoutinesCard"
}
</script>

<style scoped>

.rounded-corner{
  border-radius: 5%;
}
</style>
