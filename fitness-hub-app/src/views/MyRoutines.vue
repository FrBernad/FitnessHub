<template>
  <v-container fluid style="height: 100%" class="pa-0 bg">
    <v-row class="titleBg align-self-start pt-4 px-8" justify="space-around" align="center">
      <v-col cols="12" sm="8" md="6" class="d-flex align-center justify-center">
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

    <v-row class="cardsBG px-8 pt-4" justify="space-around">
      <v-col cols="12" md="6" lg="4" v-for="(entry,index) in currentEntries" :key="index">
        <RoutinesCard :routineData="entry"></RoutinesCard>
      </v-col>
    </v-row>
    <div class="text-center">
      <v-container>
        <v-row justify="center">
          <v-col cols="10" md="6">
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
    name: "MyRoutines.vue",
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
