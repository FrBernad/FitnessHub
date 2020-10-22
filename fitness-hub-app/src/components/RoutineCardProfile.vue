<template>
  <v-list-item class="ma-2">
    <v-card :to="{
      path: '/home/routine/',
      query: { routineData: routineData, routineId: routineData.id}}"
            class=" iluminate px-4" width="100%">
      <v-row align="start" justify="space-between">
        <v-col cols="6" class="d-flex align-center justify-start pb-0">
          <h4>{{ routineData.name.toUpperCase()}}</h4>
        </v-col>
        <v-col cols="6" class="d-flex pb-0 justify-end align-center">
          <template v-for="num in 5">
            <v-icon v-if="num<=routineData.averageRating" color="yellow darken-3">mdi-star</v-icon>
            <v-icon v-else color="yellow darken-3">mdi-star-outline</v-icon>
          </template>
        </v-col>
        <v-col cols="9">
          <h5>by {{routineData.creator.username.toUpperCase()}}</h5>
        </v-col>
      </v-row>
    </v-card>
  </v-list-item>

</template>

<script>
  export default {
    name: "RoutineCardProfile",
    props: ["routineData"],
  }
</script>

<style scoped>

  .iluminate {
    transition: box-shadow .1s ease-in-out;
  }

  .iluminate:hover {
    box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, .5);
  }

</style>
