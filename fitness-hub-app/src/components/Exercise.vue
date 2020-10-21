<template>
  <v-list-item class="listItem ma-0">
    <v-list-item-content class="justify-center">
      <v-row>
        <v-col cols="3" class="d-flex align-center justify-center pr-0 text-center">
          <h4 v-if="info.repetitions" class="text-center">{{info.repetitions}} REPS</h4>
          <h4 v-else class="text-center">{{info.duration}} MINS</h4>
        </v-col>
        <v-col cols="6" class="d-flex px-0 align-center justify-center">
          <h3>{{info.name}}</h3></v-col>
        <v-dialog v-model="dialog" persistent width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-col cols="3" class="d-flex align-center justify-center pl-0">
              <v-btn v-bind="attrs" v-on="on" icon large>
                <v-icon>mdi-information</v-icon>
              </v-btn>
            </v-col>
          </template>
          <ExerciseInformation @exerciseClose="dialog=false" :info="info"></ExerciseInformation>
        </v-dialog>
      </v-row>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
  import ExerciseInformation from "@/components/ExerciseInformation";

  export default {
    name: "Exercise",
    components: {ExerciseInformation},
    props:["info"],
    data() {
      return {
        title: '',
        dialog: false,
      }
    },
  }
</script>

<style scoped>
  .listItem {
    border: solid rgba(33, 37, 41, 1) 2px;
  }

</style>
