<template>
  <v-container fluid fill-height class="pa-0 ma-0 d-flex-align-start bg">
    <v-row class="titleBg align-start align-self-start">
          <v-col cols="12" sm="8" md="6" class="d-flex align-center justify-center ">
            <v-select hide-details dark hide-selected   :items="items" height="52px" class="selectBG" dense label="SORT BY" color="#F8F9FA"  outlined></v-select>
          </v-col>
          <v-col cols="6" sm="4" md="2" class="d-flex align-center justify-center">
            <v-btn min-height="52px" outlined color="#F8F9FA" ><v-icon>mdi-filter-variant</v-icon>Filter</v-btn>
          </v-col>
          <v-col cols="6" sm="12"  md="4" class="d-flex align-center justify-center ">
            <v-btn  to="/userHome/createRoutine" exact x-large min-height="45px" elevation="5" id="create" class="align">
              CREATE ROUTINE
            </v-btn>
          </v-col>
        </v-row>

    <v-row class="cardsBG  ma-0 pa-0">
        <v-col cols="12" sm="6" md="4">
          <RoutinesCard></RoutinesCard>
        </v-col>
      <v-col cols="12"  sm="6" md="4" >
      <RoutinesCard></RoutinesCard>
    </v-col>
      <v-col cols="12"  sm="6" md="4">
        <RoutinesCard></RoutinesCard>
      </v-col>
      <v-col cols="12"  sm="6" md="4">
        <RoutinesCard></RoutinesCard>
      </v-col>
      <v-col cols="12"  sm="6" md="4">
        <RoutinesCard></RoutinesCard>
      </v-col>
      <v-col cols="12"  sm="6" md="4">
        <RoutinesCard></RoutinesCard>
      </v-col>
      <v-col cols="12"  sm="6" md="4">
        <RoutinesCard></RoutinesCard>
      </v-col>

    </v-row>

  </v-container>
</template>

<script>
import RoutinesCard from "@/components/RoutinesCard";
export default {
  name: "MyRoutines.vue",
  components: {RoutinesCard},
  data: () => ({
  items: ['Rating', 'Duration', 'Favorites', 'Creation date','Sports','Level','Category'],
}),
}
</script>

<style scoped>
.titleBg {
  background-color: #212529;
}


.bg{
  background-color: #E9ECEF;
}

#create {
  background-color: rgba(248, 249, 250, 0.25);
  color: #F8F9FA;
  border: thin solid #F8F9FA;
}
.selectBG{
  color: #F8F9FA;
  border: thin solid #F8F9FA;
}
.paginationBg{
  background-color: #343A40;
}
</style>
