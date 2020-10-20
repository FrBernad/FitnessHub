<template>
  <v-card class="px-0 ma-8" color="rgb(248 249 250)" elevation="3" height="462">
    <v-row align="start">
      <v-col cols="9" class="py-0">
        <v-card-title class="pb-0">Favorite routines</v-card-title>
      </v-col>
      <v-col cols="12" class="pb-0 d-flex align-self-start align-center" style="height: 300px">
        <v-container class="pa-0">
          <v-row justify="center">
            <v-col v-if="!this.currentEntries.length" cols="10" sm="8">
              <v-card :height="$vuetify.breakpoint.xsOnly ? '20vh' : '270px'"
                      class="d-flex justify-center align-center mt-5">
                <p class="ma-0 px-6 text-center text-body-1 grey--text">
                  Its seems you haven't marked any routine as favourite yet.</p>
              </v-card>
            </v-col>
            <v-col v-else cols="12" class="px-0">
              <RoutineCardProfile v-for="(entry,index) in currentEntries" :key="index" :routine-data="entry"/>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="12" class="d-flex align-self-end">
        <v-container class="pb-0">
          <v-row justify="center">
            <v-col cols="10" md="6" class="py-0">
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
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
  import RoutineCardProfile from "@/components/RoutineCardProfile";

  export default {
    name: "FavoriteProfile",

    components: {RoutineCardProfile},
    data() {
      return {
        currentEntries: [],
        page: 1,
        totalPages: 0,
        itemsPerPage: 3,
        pages: 0
      }
    },

    created() {
      this.seedEntries();
    },

    methods: {
      async seedEntries() {
        const data = {
          page: this.page - 1,
          size: this.itemsPerPage,
          orderBy: `id`,
          direction: `desc`
        }
        try {
          const routines = await this.$store.dispatch('getFavouriteRoutines', data);
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
          orderBy: `id`,
          direction: `desc`
        };

        try {
          const routines = await this.$store.dispatch('getFavouriteRoutines', data);
          this.currentEntries = routines.results;

        } catch (e) {
          console.log(e);
        }
      }
    }
  }

</script>

<style scoped>

</style>
