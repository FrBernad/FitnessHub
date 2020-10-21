<template>
  <v-container fluid class="pa-0 elevation-15">
    <v-row class="bgText justify-space-around">

      <!--SORT-->
      <v-col cols="12" md="6" class="pl-sm-12 px-10 pr-md-0">
        <v-select
          dark
          hide-details
          :items="sortOptions"
          item-text="option"
          item-value="value"
          v-model="sortBy"
          height="52px"
          color="#F8F9FA"
          label="SORT BY"
          menu-props="auto"
          dense
          outlined
          @change="applySort"
        ></v-select>
      </v-col>

      <!--ORDER-->
      <v-col cols="7" sm="8" md="4" class="d-flex align-center pl-sm-12 pl-10 pl-md-4 pr-sm-0 justify-center">
        <v-select
          dark
          hide-details
          :items="orderOptions"
          item-text="option"
          item-value="value"
          v-model="orderBy"
          height="52px"
          color="#F8F9FA"
          label="ORDER BY"
          menu-props="auto"
          dense
          outlined
          @change="applyOrder"
        ></v-select>
      </v-col>

      <!--FILTER-->
      <v-col cols="5" sm="4" md="2" class="d-flex align-center justify-center pr-10">
        <v-dialog v-model="dialog" persistent width="300px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn min-height="52px" v-bind="attrs" v-on="on" outlined color="#F8F9FA" width="95%">
              <v-icon class="mr-2">mdi-filter-variant</v-icon>
              <span>Filter</span>
            </v-btn>
          </template>

          <v-card class="pa-3">
            <v-row class="pa-0 align-center justify-center">
              <v-col cols="10" class="py-0 d-flex align-center justify-end">
                <v-select
                  :items="filterOptions"
                  item-text="option"
                  item-value="value"
                  v-model="filterBy"
                  label="Dificulty"
                ></v-select>
              </v-col>
            </v-row>
            <v-row class="align-center justify-center">
              <v-col cols="10" class="d-flex align-center justify-space-around">
                <v-btn color="#212529" text @click="dialog=false">CLOSE</v-btn>
                <v-btn color="#212529" text @click="applyFilter">FILTER</v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-dialog>

      </v-col>

    </v-row>

  </v-container>
</template>

<script>
  export default {
    name: "SearchBar",

    data: () => ({
      sortOptions: [
        {option: 'Rating', value: 'averageRating'},
        {option: 'Creation date', value: 'dateCreated'},
        {option: 'Difficulty', value: 'difficulty'},
        {option: 'Name', value: 'name'},
        {option: 'Category', value: 'categoryId'}],
      sortBy: {
        option: "Rating", value: "averageRating"
      },

      orderOptions: [
        {option: 'Ascending', value: 'asc'},
        {option: 'Descending', value: 'desc'}],
      orderBy: {
        option: "Descending", value: "desc"
      },

      filterOptions: [
        {option: 'Advanced', value: 'advanced'},
        {option: 'Intermediate', value: 'intermediate'},
        {option: 'Beginner', value: 'beginner'},
        {option: 'Rookie', value: 'rookie'},
        {option: 'None', value: ""}
      ],
      filterBy: {
        option: "None", value: ""
      },
      dialog: false,
    }),

    methods: {
      applyFilter() {
        this.dialog = false;
        this.$emit("filter", this.filterBy.value!==undefined ? this.filterBy.value : this.filterBy);
      },
      applySort() {
        this.$emit("sort", this.sortBy);
      },
      applyOrder() {
        this.$emit("order", this.orderBy);
      }
    }
  }
</script>

<style scoped>
  .bgText {
    background-color: #212529;
  }
</style>
