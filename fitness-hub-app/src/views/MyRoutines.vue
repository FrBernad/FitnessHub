<template>
  <v-container fluid style="height: 100%" class="pa-0 ma-0 d-flex-align-start bg">
    <v-row class="titleBg align-start align-self-start">
      <v-col cols="12" class="'pa-0">
        <v-row class="align-self-start align-start">
          <v-col cols="4" class="d-flex align-center justify-center ">
            <v-select hide-details dark hide-selected  height="52px" class="selectBG" dense label="SORT BY" color="#F8F9FA"  outlined></v-select>
          </v-col>
          <v-col col="2" class="d-flex align-center justify-center">
            <v-btn min-height="52px" outlined color="#F8F9FA" ><v-icon>mdi-filter-variant</v-icon>Filter</v-btn>
          </v-col>
          <v-col cols="6"  class="d-flex align-center justify-center ">
            <v-btn  to="/userHome/createRoutine" exact x-large min-height="45px" elevation="5" id="create" class="align">
              CREATE ROUTINE
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row class="cardsBG  ma-0 pa-0">
        <v-col cols="6" class="ma-0 pa-0">
          <RoutinesCard></RoutinesCard>
        </v-col>
      <v-col cols="6" class="ma-0 pa-0">
      <RoutinesCard></RoutinesCard>
    </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-pagination class="paginationBg" length="3" prev-icon="mdi-arrow-left-circle-outline" next-icon="mdi-arrow-right-circle-outline"></v-pagination>
      </v-col>
    </v-row>


  </v-container>
</template>

<script>
import RoutinesCard from "@/components/RoutinesCard";
export default {
  name: "MyRoutines.vue",
  components: {RoutinesCard}
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
