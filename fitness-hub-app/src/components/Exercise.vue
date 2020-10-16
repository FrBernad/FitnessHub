<template>

<v-dialog v-model="dialog"  persistent width="500px">

<template v-slot:activator="{ on, attrs }">
  <v-list-item  class="elevation-1 listItem">
    <v-list-item-content class="justify-center">
        <v-row>
          <v-col cols="2" class="d-flex align-center justify-start"><h3>15</h3></v-col>
          <v-col cols="8" class="d-flex align-center justify-center"><h3>Exercise 1</h3></v-col>
          <v-col cols="2" class="d-flex align-center justify-end"><v-btn v-bind="attrs" v-on="on" icon large><v-icon>mdi-information</v-icon></v-btn></v-col>
        </v-row>
    </v-list-item-content>
  </v-list-item>
</template>

  <v-card class="pa-3">
      <v-row class="pa-0 align-center justify-center">
        <v-col cols="12" class="py-0 d-flex align-center justify-end">
          <v-btn icon @click="dialog = false"><v-icon>mdi-close-circle-outline</v-icon></v-btn>
        </v-col>
      </v-row>
      <v-card-title class="text-h4 font-weight-bold d-flex justify-center">Exercise 1</v-card-title>
      <v-row class="align-center justify-center">
        <v-col cols="6"><v-card-text class="text-h5  d-flex align-center justify-center font-weight-bold pa-0 ">PICTURE</v-card-text></v-col>
        <v-col cols="6"><v-card-text class="text-h5  d-flex align-center justify-center font-weight-bold pa-0">VIDEO</v-card-text></v-col>
      </v-row>
      <v-row class="align-center justify-center">
        <v-col cols="6" class="d-flex align-center justify-center"><v-img src="../assets/imgs/routines.jpg" contain max-height="200"></v-img></v-col>
        <v-col cols="6" class="d-flex align-center justify-center"><v-img src="../assets/imgs/routines.jpg" contain max-height="200"></v-img></v-col>
      </v-row>
      <v-row class="align-center justify-center">
        <v-col cols="12" class="text-center">
          <v-card-text class="text-h5 font-weight-bold d-flex align-center justify-center pa-0">
            DESCRIPTION
          </v-card-text>
          <v-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</v-card-text>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
        <v-card-text class="text-h5 font-weight-bold d-flex align-center justify-center pa-0">REPS/TIME: 15</v-card-text>
        </v-col>
      </v-row>
  </v-card>

</v-dialog>

</template>

<script>
export default {
name: "Exercise",
  data () {
    return {
      title:'',
      dialog: false,
    }
  },
}
</script>

<style scoped>
  .listItem{
    border-style: solid;
    border-color:rgba(33,37,41,1);
  }

</style>
