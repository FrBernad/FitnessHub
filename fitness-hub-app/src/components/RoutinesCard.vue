<template>
  <v-card class="pa-5 cardType">
    <v-row align="start" justify="space-around">
      <v-col cols="12 d-flex justify-center align-center pt-0">
        <v-img class="rounded-corner "
               src="../assets/imgs/routineCard.jpg"
               max-height="200">
        </v-img>
      </v-col>
      <v-col cols="12" class="d-flex align-center" lg="6">
        <h4>{{ routineData.title }}</h4>
      </v-col>
      <v-col cols="4" class="d-flex justify-center align-center">
        <template v-for="num in 5">
          <v-icon v-if="routineData.rating>=num">mdi-star</v-icon>
          <v-icon v-else>mdi-star-outline</v-icon>
        </template>
      </v-col>
      <v-col cols="2" class="d-flex justify-center align-center">
        <v-icon v-if="routineData.fav">mdi-heart</v-icon>
        <v-icon v-else>mdi-heart-outline</v-icon>
      </v-col>
      <v-col cols="9">
        <h5>by {{routineData.owner.toUpperCase()}}</h5>
      </v-col>
      <v-col cols="3">
        <h5 class="text-center">{{routineData.time}} min</h5>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
  export default {
    name: "RoutinesCard",
    props: ["routineData"],
  }

</script>

<style scoped>

  .cardType {
    background-color: #F8F9FA;
    border-radius: 5%;
  }
</style>
