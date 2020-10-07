<template>
  <v-card class="pa-5 rounded-corner">
<<<<<<< HEAD
    <v-row align="start" justify="space-around">
      <v-col cols="12 d-flex justify-center align-center">
        <v-img class="rounded-corner "
               src="../assets/imgs/routineCard.jpg"
               max-height="200">
        </v-img>
=======
    <v-row align="start" justify="center">
      <v-col cols="12" class="d-flex justify-center align-center" >
      <v-img class="rounded-corner " src="../assets/imgs/routineCard.jpg" max-width="250" max-height="200"></v-img>
>>>>>>> main
      </v-col>
      <v-col cols="12" class="d-flex justify-center align-center" lg="6">
        <h4>MUSCLE & STRENGHT</h4>
      </v-col>
<<<<<<< HEAD
      <v-col cols="4" class="d-flex justify-center align-center">
        <v-icon v-for="num in 5">mdi-star-outline</v-icon>
      </v-col>
      <v-col cols="2" class="d-flex justify-center align-center">
=======
      <v-col cols="8" lg="4" class="d-flex justify-center align-center">
        <v-icon>mdi-star-outline</v-icon>
        <v-icon>mdi-star-outline</v-icon>
        <v-icon>mdi-star-outline</v-icon>
        <v-icon>mdi-star-outline</v-icon>
        <v-icon>mdi-star-outline</v-icon>
      </v-col>
      <v-col cols="4" lg="2" class="d-flex justify-start align-center">
>>>>>>> main
        <v-icon>mdi-heart-outline</v-icon>
      </v-col>
      <v-col cols="9">
        <h5>by JOE</h5>
      </v-col>
      <v-col cols="3">
        <h5 class="text-center">15 min</h5>
      </v-col>
    </v-row>


  </v-card>
</template>

<script>
  export default {
    name: "RoutinesCard",
    data: () => ({
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),
  }

</script>

<style scoped>

  .rounded-corner {
    border-radius: 5%;
  }
</style>
