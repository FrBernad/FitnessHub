<template>
  <v-container fluid class="bg pa-0" style="height: 100%">
    <v-row align="stretch" justify="space-around" class="fill-height">
      <v-col class="d-flex align-self-center" v-for="section in sections" :key="section" cols="12" md="4">
        <RoutineSection :title="section"></RoutineSection>
      </v-col>
      <v-col class="d-flex align-center justify-center align-self-end py-6 bgColor">
        <v-btn
          x-large
          min-height="45px"
          elevation="5"
          id="create"
        >
          CREATE ROUTINE
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Footer from "../components/LandingFooter";
  import RoutineSection from "../components/RoutineSection";

  export default {
    name: "CreateRoutine",
    components: {Footer, RoutineSection},
    data() {
      return {
        sections: ["WARMP UP", "MAIN EXERCISES", "COOLDOWN"]
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
