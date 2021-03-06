<template>
  <v-container fluid style="height: 100%" class="pa-0 bg">
    <v-row class="communityWorkoutsBG">
      <v-col cols="12" class=" d-flex justify-center align-center">
      </v-col>
    </v-row>

    <v-row class="bgText justify-center">
      <v-col cols="10" class="d-flex justify-center align-center">
        <h1 class="font-weight-bold font-italic text-body-1 text-sm-h5 text-md-h4  whiteCS--text text-center">Fueled by
          our own community, this workouts
          will give what
          you need to get to the next level</h1>
      </v-col>
    </v-row>

    <SearchBar @sort="sort($event)" @order="order($event)" @filter="filter($event)"></SearchBar>

    <v-row class="px-8 pt-4" :justify="this.currentEntries.length ? 'start': 'center'">
      <v-col v-if="!this.currentEntries.length" cols="10" sm="8">
        <v-card :height="$vuetify.breakpoint.smAndDown ? '40vh' : '400px'"
                class="d-flex justify-center align-center mt-5">
          <p class="ma-0 px-6 px-md-13 text-center text-body-1 text-sm-h6 text-md-h4 grey--text">
            No routines where found, check again later.</p>
        </v-card>
      </v-col>
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
  import SearchBar from "../components/SearchBar";

  export default {
    name: "Workouts.vue",

    components: {RoutinesCard, SearchBar},

    data: () => ({
      currentEntries: [],
      page: 1,
      totalPages: 0,
      itemsPerPage: 6,
      pages: 0,
      direction: 'desc',
      orderBy: "averageRating",
      filterBy: undefined,
    }),

    created() {
      this.seedEntries();
    },

    methods: {
      async seedEntries() {
        const data = {
          ...(!!this.filterBy && {difficulty: this.filterBy}),
          page: this.page - 1,
          size: this.itemsPerPage,
          orderBy: this.orderBy,
          direction: this.direction
        }
        try {
          const routines = await this.$store.dispatch('getRoutines', data);
          this.totalPages = routines.totalCount;
          this.pages = Math.ceil((this.totalPages / this.itemsPerPage));
          this.currentEntries = routines.results;
        } catch (e) {
          console.log(e);
        }
      },

      async changePage() {
        const data = {
          page: this.page - 1,
          size: this.itemsPerPage,
          orderBy: this.orderBy,
          direction: this.direction,
          ...(!!this.filterBy && {difficulty: this.filterBy}),
        };
        try {
          const routines = await this.$store.dispatch('getRoutines', data);
          this.totalPages = routines.totalCount;
          this.pages = Math.ceil((this.totalPages / this.itemsPerPage));
          this.currentEntries = routines.results;
        } catch (e) {
          console.log(e);
        }
      },

      async sort(criteria) {
        this.page = 1;
        this.orderBy = criteria;
        const data = {
          ...(!!this.filterBy && {difficulty: this.filterBy}),
          page: this.page - 1,
          size: this.itemsPerPage,
          orderBy: this.orderBy,
          direction: this.direction,
        };
        try {
          const routines = await this.$store.dispatch('getRoutines', data);
          this.totalPages = routines.totalCount;
          this.pages = Math.ceil((this.totalPages / this.itemsPerPage));
          this.currentEntries = routines.results;
        } catch (e) {
          console.log(e);
        }
      },

      async order(direction) {
        this.page = 1;
        this.direction = direction;
        const data = {
          ...(!!this.filterBy && {difficulty: this.filterBy}),
          page: this.page - 1,
          size: this.itemsPerPage,
          orderBy: this.orderBy,
          direction: direction
        };
        try {
          const routines = await this.$store.dispatch('getRoutines', data);
          this.totalPages = routines.totalCount;
          this.pages = Math.ceil((this.totalPages / this.itemsPerPage));
          this.currentEntries = routines.results;
        } catch (e) {
          console.log(e);
        }
      },

      async filter(filterBy) {
        this.page = 1;
        this.filterBy = filterBy;
        const data = {
          page: this.page - 1,
          size: this.itemsPerPage,
          orderBy: this.orderBy,
          direction: this.direction,
          ...(!!this.filterBy && {difficulty: this.filterBy}),
        };
        try {
          const routines = await this.$store.dispatch('getRoutines', data);
          this.totalPages = routines.totalCount;
          this.pages = Math.ceil((this.totalPages / this.itemsPerPage));
          this.currentEntries = routines.results;
        } catch (e) {
          console.log(e);
        }
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

  .communityWorkoutsBG {
    background-image: url("../assets/imgs/communityWorkouts.jpg");
    background-position: center;
    background-position-y: 25%;
    margin: 0 auto;
    height: 45vh;
    width: auto;
    background-size: cover;
  }

  @media only screen and (max-width: 700px) {
    .communityWorkoutsBG {
      height: 25vh;
    }
  }

   @media only screen and (max-width: 550px) {
    .communityWorkoutsBG {
      height: 20vh;
    }
  }

</style>
