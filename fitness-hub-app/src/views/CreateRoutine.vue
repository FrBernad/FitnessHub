<template>

  <v-container fluid class="bg pa-0" style="height: 100%">
    <v-row align="center" justify="space-around" class="fill-height">
      <v-col cols="10" md="4">
        <RoutineSection title="WARM UP" section="Warmup"></RoutineSection>
      </v-col>
      <v-col cols="10" md="4">
        <RoutineSection title="MAIN EXERCISES" section="Exercise"></RoutineSection>
      </v-col>
      <v-col cols="10" md="4">
        <RoutineSection title="COOL DOWN" section="Cooldown"></RoutineSection>
      </v-col>
      <v-col class="d-flex align-center justify-center align-self-end py-6 bgColor" cols="12">
        <v-dialog v-model="dialog" persistent width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              x-large
              min-height="45px"
              elevation="5"
              id="create"
              v-bind="attrs"
              v-on="on"
            >
              CREATE ROUTINE
            </v-btn>
          </template>
          <RoutineDetails @routineClose="dialog=false"></RoutineDetails>
        </v-dialog>

      </v-col>
    </v-row>
  </v-container>


</template>

<script>
  import RoutineSection from "../components/RoutineSection";
  import RoutineDetails from "../components/RoutineDetails";

  export default {
    name: "CreateRoutine",
    components: {RoutineSection, RoutineDetails},
    data() {
      return {
        sections: ["WARMP UP", "MAIN EXERCISES", "COOLDOWN"],
        title: 'Routine name',
        dialog: false,
        warmUp: [],
        mainExercise: [],
        cooldown: [],
      }
    },
  }
</script>

<style scoped>
  .bg {
    height: 100%;
    background: linear-gradient(
      rgba(33, 37, 41, 0.65),
      rgba(33, 37, 41, 0.65)
    ), url("../assets/imgs/createRoutineBG.jpg") no-repeat center;
    background-size: cover;
  }

  .bgColor {
    background-color: rgb(52, 58, 64);
  }

  #create {
    background-color: rgba(248, 249, 250, 0.25);
    color: #F8F9FA;
    border: thin solid #F8F9FA;
  }
</style>
