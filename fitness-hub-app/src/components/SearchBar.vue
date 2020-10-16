<template>
<v-container fluid class="pa-0 elevation-15" >
  <v-row class="bgText justify-space-around">
    <v-col cols="12" md="6" class="pl-sm-12 px-10 pr-md-0">
      <v-text-field outlined background-color="#212529" dense dark hide-details height="52px"
                    append-icon="mdi-magnify" solo label="Search workouts, plans and more"
                    clearable
      ></v-text-field>
    </v-col>
    <v-col cols="7" sm="8" md="4" class="d-flex align-center pl-sm-12 pl-10 pl-md-4 pr-sm-0 justify-center">
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
    <v-col cols="5" sm="4" md="2" class="d-flex align-center justify-center pr-10">
      <v-btn to="/userHome/Routine" min-height="52px" outlined color="#F8F9FA" width="95%">
        <v-icon class="mr-2">mdi-filter-variant</v-icon>
        <span>Filter</span>
      </v-btn>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
export default {
name: "SearchBar",
  data: () => ({
    sortBy: ['Rating', 'Duration', 'Favorites', 'Creation date','Sports','Level','Category']
  })
}
</script>

<style scoped>
.bgText {
  background-color: #212529;
}
</style>
