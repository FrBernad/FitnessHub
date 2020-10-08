<template>
  <v-container fluid style="height: 100%" class="pa-0 bg">
    <v-row>
      <v-col cols="12" class="pa-0 d-flex justify-center align-center">
        <v-img src="../assets/imgs/CommunityWorkouts.jpg"></v-img>
      </v-col>
    </v-row>
    <v-row class="bgText justify-center">
      <v-col cols="12" md="10" lg="7" class="d-flex justify-center align-center">
        <h1 class="font-weight-bold font-italic  whiteCS--text text-center">Fueled by our own community, this workouts
          will give what
          you need to get to the next level</h1>
      </v-col>
    </v-row>
    <v-row class="bgText justify-center">

      <v-col cols="12" sm="6" class="" pa-auto>
        <v-text-field outlined background-color="#212529" dense dark hide-details height="52px"
                      append-icon="mdi-magnify" solo label="Search workouts, plans and more"
                      clearable
        ></v-text-field>
      </v-col>

      <v-col cols="8" sm="4" class="d-flex align-center justify-center ">
        <v-select
          dark
          hide-details
          :items="sortBy"
          height="52px"
          color="#F8F9FA"
          label="SORT BY"
          menu-props="auto"
          dense
          outlined
        ></v-select>
      </v-col>
      <v-col cols="4" sm="2" class="d-flex align-center justify-space-around">
        <v-btn min-height="52px" outlined color="#F8F9FA">
          <v-icon class="mr-2">mdi-filter-variant</v-icon>
          <span>Filter</span>
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="cardsBG px-8 pt-4" justify="space-around">
      <v-col cols="12" md="6" lg="4" v-for="(entry,index) in currentEntries" :key="index">
        <RoutinesCard :routineData="entry"></RoutinesCard>
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
                total-visible="5"
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
  import RoutinesCard from "../components/RoutinesCard";

  export default {
    name: "Workouts.vue",
    components: {RoutinesCard},
    created() {
      this.seedEntries();
    },
    data: () => ({
      entries: [],
      currentEntries: [],
      page: 1,
      totalPages: 0,
      itemsPerPage: 6,
      pages: 0,
      sortBy: ['Rating', 'Duration', 'Favorites', 'Creation date','Sports','Level','Category']
    }),
    methods: {
      seedEntries() {
        for (let i = 0; i < 42; i++) {
          this.entries[i] = {
            id: 1,
            title: "Routine Name",
            owner: "John",
            rating: Math.floor((Math.random() * 5) + 1),
            fav: Math.floor((Math.random() * 10) + 1) >= 5,
            time: 8+Math.floor((Math.random() * 20) + 1)
          }
        }
        this.totalPages = this.entries.length;
        this.pages = Math.ceil((this.totalPages / this.itemsPerPage));
        this.currentEntries = this.entries.slice(this.page - 1, (this.page - 1) * this.itemsPerPage + this.itemsPerPage);
      },
      changePage() {
        this.currentEntries = this.entries.slice((this.page - 1) * this.itemsPerPage, (this.page - 1) * this.itemsPerPage + this.itemsPerPage);
      }
    },
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
