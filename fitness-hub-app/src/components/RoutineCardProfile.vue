<template>
  <v-list-item class="pb-3" >
  <v-card to="/home/routine" class=" iluminate pa-2 cardType">
    <v-row align="start" justify="space-around">
      <v-col cols="6" class="d-flex align-center justify-start" lg="6">
        <h4>{{ routineData.name}}</h4>
      </v-col>
      <v-col cols="4" md="4" class="d-flex justify-md-center justify-sm-end justify-start align-center">
        <template v-for="num in 5">
          <v-icon v-if="routineData.rating>=num">mdi-star</v-icon>
          <v-icon v-else>mdi-star-outline</v-icon>
        </template>
      </v-col>
      <v-col cols="2" class="d-flex justify-md-center justify-end justify-sm-start align-center">
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
  </v-list-item>

</template>

<script>
export default {
  name: "RoutineCardProfile",
  props: ["routineData"],
}
</script>

<style scoped>
.cardType {
  background-color: #F8F9FA;
  border-style: solid;
  border-color: #343A40;
}
.iluminate {
  transition: box-shadow .1s ease-in-out;
}

.iluminate:hover {
  box-shadow: 0px 10px 10px 0px;
}
</style>
