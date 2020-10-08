<template>
  <v-container fluid style="height: 100%" class="pa-0 ma-0 bg">
    <v-row>
      <v-col cols="12" class="pa-0 d-flex justify-center align-center">
        <v-img src="../assets/imgs/CommunityWorkouts.jpg"></v-img>
      </v-col>
    </v-row>
    <v-row class="bgText justify-center">
      <v-col cols="12" md="10" lg="7" class="d-flex justify-center align-center">
        <h1 class="font-weight-bold font-italic  whiteCS--text text-center">Fueled by our own community, this workouts will give what
          you need to get to the next level</h1>
      </v-col>
    </v-row>
    <v-row class="bgText justify-center">

    <v-col cols="12" sm="6" class="" pa-auto>
        <v-text-field outlined background-color="#212529" dense dark hide-details height="52px" append-icon="mdi-magnify" solo label="Search workouts, plans and more"
                      clearable
        ></v-text-field>
      </v-col>

      <v-col cols="8"  sm="4" class="d-flex align-center justify-center ">
        <v-select hide-details dark hide-selected
                  :items="items" height="52px"
                  dense label="SORT BY"
                  background-color="#212529" color="#F8F9FA"  outlined solo>
        </v-select>
      </v-col>
      <v-col cols="4"  sm="2" class="d-flex align-center justify-space-around">
        <v-btn min-height="52px" outlined color="#F8F9FA">
          <v-icon class="mr-2">mdi-filter-variant</v-icon>
          <span>Filter</span>
        </v-btn>
      </v-col>
     </v-row>

    <v-row class="bg pa-4" justify="space-around">
      <v-col cols="12" sm="6" md="4">
        <RoutinesCard></RoutinesCard>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <RoutinesCard></RoutinesCard>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <RoutinesCard></RoutinesCard>
      </v-col>
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


  </v-container>
</template>

<script>
import RoutinesCard from "@/components/RoutinesCard";

export default {
  name: "Workouts.vue",
  components:{RoutinesCard},
  data: () => ({
    entries: [],
    currentEntries: [],
    page: 1,
    totalPages: entries.length,
    itemsPerPage: 6,
    pages: Math.ceil((this.totalPages / this.itemsPerPage))
  }),
  computed:{
    items() {
      let item = ['Rating', 'Duration', 'Favorites', 'Creation date','Sports','Level','Category'];
      return item;
    }
  },

  methods: {
    changePage() {

    }
  }
}
</script>


<style scoped>
.bgText {
  background-color: #212529;
}



.bg {
  background-color: #E9ECEF;
}
</style>
