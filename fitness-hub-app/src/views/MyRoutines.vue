<template>
  <v-container fluid style="height: 100%" class="pa-0 bg">
    <v-row class="routinesBG">
      <v-col cols="12" class=" d-flex justify-center align-center">
        <v-btn to="/home/createRoutine" exact
               x-large min-height="70px" min-width="35%" elevation="5" id="create"
               class="align-center justify-center"
        >CREATE ROUTINE
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="titleBg justify-center">
      <v-col cols="10" class="d-flex justify-center align-center">
        <h1 class=" font-weight-bold font-italic text-body-1 text-sm-h5 text-md-h4  whiteCS--text text-center">Create
          and edit your very own routines, add your distinctive touch and make training fun!</h1>
      </v-col>
    </v-row>
    <SearchBar></SearchBar>

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
  import SearchBar from "@/components/SearchBar";

  export default {
    name: "MyRoutines.vue",
    components: {SearchBar, RoutinesCard},
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
      sortBy: ['Rating', 'Duration', 'Favorites', 'Creation date', 'Sports', 'Level', 'Category']
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
            time: 8 + Math.floor((Math.random() * 20) + 1)
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


  .routinesBG {

    background-image: url("../assets/imgs/myRoutines.jpg");
    height: 400px;
    background-position: center;
    background-position-y: 25%;
    margin: 0 auto;
    background-size: cover;
  }

</style>
