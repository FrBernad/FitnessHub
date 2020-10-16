<template>

<v-dialog v-model="dialog" width="500px">

<template v-slot:activator="{ on, attrs }">
  <v-list-item class="elevation-1 listItem" v-bind="attrs" v-on="on">
    <v-list-item-content class="justify-center">
        <v-row>
          <v-col cols="8" class="d-flex align-center justify-start"><h3>Exercise 1</h3></v-col>
          <v-col cols="4" class="d-flex align-center justify-end"><h3>15</h3></v-col>
        </v-row>
    </v-list-item-content>
  </v-list-item>
</template>

  <v-card>
    <v-card-title class="text-h4 font-weight-bold d-flex justify-center text-decoration-underline">Exercise 1</v-card-title>
    <v-container>
      <v-row>
        <v-col cols="6" ><v-card-text class="text-h5 font-weight-bold d-flex align-center justify-center pa-0 ">PICTURE</v-card-text></v-col>
        <v-col cols="6" ><v-card-text class="text-h5 font-weight-bold d-flex align-center justify-center pa-0">VIDEO</v-card-text></v-col>
      </v-row>
      <v-row>
        <v-col cols="6"><v-img src="../assets/imgs/routines.jpg" max-height="100" max-width="100"></v-img></v-col>
        <v-col cols="6"><v-img src="../assets/imgs/routines.jpg" max-height="100" max-width="100"></v-img></v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="text-center">
          <v-card-text class="text-h5 font-weight-bold d-flex align-center justify-center pa-0">
            DESCRIPTION
          </v-card-text>
          <v-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</v-card-text>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
        <v-card-text class="text-h5 font-weight-bold d-flex align-center justify-center pa-0">REPS/TIME: 15</v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </v-card>

</v-dialog>

</template>

<script>
export default {
name: "Exercise",
  data () {
    return {
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
