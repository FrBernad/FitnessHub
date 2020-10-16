<template>

  <v-card class="pa-3">
   <v-row class="pa-0 align-center justify-center">
      <v-col cols="4" class="py-0 d-flex align-center justify-end">
        <v-select
          :items="itemsPuntuation"
          chips
          label="Puntuation"
          multiple
         ></v-select>
      </v-col>
      <v-col cols="4" class="py-0 d-flex align-center justify-end">
        <v-select
          :items="itemsCategory"
          chips
          label="Category"
          multiple
        ></v-select>

      </v-col>
      <v-col cols="4" class="py-0 d-flex align-center justify-end">
        <v-select
          :items="itemsDificulty"
          chips
          label="Dificulty"
          multiple
        ></v-select>
      </v-col>
    </v-row>

    <v-row class="align-center justify-center">
      <v-col cols="12" class="d-flex align-center justify-end">
        <v-btn color="#212529" text @click="filterClose">CLOSE</v-btn>
        <v-btn color="#212529" text @click="filterClose">FILTER</v-btn>
      </v-col>
    </v-row>

</v-card>

</template>

<script>
export default {
name: "FilterDialog",
  methods:{
    filterClose(){
      this.$emit('filterClose')
    }
  },
  data: () => ({
    itemsPuntuation: ['1 star', '2 stars', '3 stars', '4 stars', '5 stars'],
    itemsCategory: ['Football', 'Basketball', 'Tennis', 'Rugby'],
    itemsDificulty: ['Beginner', 'Intermediate', 'Advance'],

  }),
}
</script>

<style scoped>

</style>
