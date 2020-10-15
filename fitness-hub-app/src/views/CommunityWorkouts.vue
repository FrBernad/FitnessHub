<template>
  <v-container fluid style="height: 100%" class="pa-0 bg">
    <v-row class="communityWorkoutsBG" >
      <v-col cols="12" class=" d-flex justify-center align-center">
      </v-col>
    </v-row>



    <v-row class="bgText justify-center">
      <v-col cols="10" class="d-flex justify-center align-center">
        <h1 class="font-weight-bold font-italic text-body-1 text-sm-h5 text-md-h4  whiteCS--text text-center">Fueled by our own community, this workouts
          will give what
          you need to get to the next level</h1>
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
    name: "Workouts.vue",
    components: {RoutinesCard,SearchBar},
    created() {
      this.seedEntries();
    },
    data: () => ({
      entries: [],
      currentEntries: [],
      page: 1,
      totalPages: 0,
      itemsPerPage: 6,
      pages: 0
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
  .communityWorkoutsBG{
    background-image: url("../assets/imgs/communityWorkouts.jpg");
    background-position: center;
    background-position-y: 25%;
    margin: 0 auto;
    height: 30%;
    width: auto;
    background-size: cover;

  }


</style>
