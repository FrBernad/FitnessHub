<template>
<<<<<<< HEAD
  <v-container fluid style="height: 100%" class="pa-0 bg">
    <v-row class="titleBg align-self-start pa-4" justify="space-around" align="start">
      <v-col cols="12" sm="8" md="6" class="d-flex align-center justify-center ">
        <v-select hide-details dark hide-selected
                  :items="items" height="52px"
                  dense label="SORT BY"
                  color="#F8F9FA" outlined
        >
        </v-select>
      </v-col>
      <v-col cols="6" sm="4" md="2" class="d-flex align-center justify-space-around">
        <v-btn min-height="52px" outlined color="#F8F9FA">
          <v-icon class="mr-2">mdi-filter-variant</v-icon>
          <span>Filter</span>
        </v-btn>
      </v-col>
      <v-col cols="6" sm="12" md="4" class="d-flex align-center justify-center">
        <v-btn to="/userHome/createRoutine" exact
               x-large min-height="45px" elevation="5" id="create"
               class="align"
        >
          CREATE ROUTINE
        </v-btn>
      </v-col>
    </v-row>
=======
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
>>>>>>> main

    <v-row class="cardsBG pa-4" justify="space-around">
      <v-col cols="12" sm="6" md="4">
        <RoutinesCard></RoutinesCard>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <RoutinesCard></RoutinesCard>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <RoutinesCard></RoutinesCard>
      </v-col>
<<<<<<< HEAD
    </v-row>
    <div class="text-center">
      <v-container>
        <v-row justify="center">
          <v-col cols="6">
            <v-container class="max-width">
              <v-pagination
                v-model="page"
                class="my-4"
                :length="pages"
                total-visible="7"
                @input="changePage"
              ></v-pagination>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </div>
=======
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

>>>>>>> main
  </v-container>
</template>

<script>
  import RoutinesCard from "@/components/RoutinesCard";

  export default {
    name: "MyRoutines.vue",
    components: {RoutinesCard},
    data: () => ({
      entries: [],
      currentEntries: [],
      page: 1,
      totalPages: entries.length,
      itemsPerPage: 6,
      pages: Math.ceil((this.totalPages / this.itemsPerPage))
    }),
    methods: {
      changePage() {

      }
    }
  }
</script>

<style scoped>
  .titleBg {
    background-color: #212529;
  }

  .bg {
    background-color: #E9ECEF;
  }

  #create {
    background-color: rgba(248, 249, 250, 0.25);
    color: #F8F9FA;
    border: thin solid #F8F9FA;
  }
</style>
