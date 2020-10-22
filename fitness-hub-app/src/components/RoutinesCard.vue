<template>
  <v-card :to="{
      path: '/home/communityWorkouts/routine',
      query: { routineData: routineData, routineId: routineData.id}
     }"
          class=" iluminate pa-5 cardType">
    <v-row align="start" justify="space-between">
      <v-col cols="12 d-flex justify-center align-center pt-0">
        <v-img class="rounded-corner "
               :src="categoryImg"
               max-height="200">
        </v-img>
      </v-col>
      <v-col cols="7" class="d-flex align-center justify-start" lg="6">
        <h4>{{ routineData.name.toUpperCase() }}</h4>
      </v-col>
      <v-col cols="5" class="d-flex justify-end align-center">
        <template v-for="num in 5">
          <v-icon v-if="num <= routineData.averageRating" color="yellow darken-3">mdi-star</v-icon>
          <v-icon v-else color="yellow darken-3">mdi-star-outline</v-icon>
        </template>
      </v-col>
      <v-col cols="6" class="d-flex align-center justify-start">
        <h5>by {{routineData.creator.username.toUpperCase()}}</h5>
      </v-col>
      <v-col cols="6" class="d-flex justify-end align-center">
        <h5 class="text-center">{{routineData.difficulty.toUpperCase()}}</h5>
      </v-col>
    </v-row>
  </v-card>

</template>

<script>
  export default {
    name: "RoutinesCard",
    props: ["routineData"],
    computed: {
      categoryImg() {
        return require(`../assets/imgs/${this.routineData.category.id}.jpg`);
      }
    }
  }

</script>

<style scoped>
  .cardType {
    background-color: #F8F9FA;
    border-radius: 5%;
  }

  .iluminate {
    transition: box-shadow .1s ease-in-out;
  }

  .iluminate:hover {
    box-shadow: 0px 20px 30px 0px;
  }
</style>
