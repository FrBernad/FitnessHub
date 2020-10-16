<template>



  <v-list-item  class="elevation-1 listItem">
    <v-list-item-content class="justify-center">
        <v-row>
          <v-col cols="2" class="d-flex align-center justify-start"><h3>15</h3></v-col>
          <v-col cols="8" class="d-flex align-center justify-center"><h3>Exercise 1</h3></v-col>

          <v-dialog v-model="dialog"  persistent width="500px">
            <template v-slot:activator="{ on, attrs }">
            <v-col cols="2" class="d-flex align-center justify-end"><v-btn v-bind="attrs" v-on="on" icon large><v-icon>mdi-information</v-icon></v-btn></v-col>
            </template>
            <ExerciseInformation @exerciseClose="dialog=false"></ExerciseInformation>

          </v-dialog>
        </v-row>
    </v-list-item-content>
  </v-list-item>




</template>

<script>
import ExerciseInformation from "@/components/ExerciseInformation";

export default {
name: "Exercise",
  components:{ExerciseInformation},
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
