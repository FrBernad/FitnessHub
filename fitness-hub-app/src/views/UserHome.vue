<template>

  <v-container fluid fill-height class="pa-0">
    <v-row justify="center" align="center" class="fill-height">
        <v-col cols="4" class="fill-height pa-0">
          <v-card rounded="0" height="100%" class="workoutsBG iluminate d-flex align-center justify-center">
            <v-card-title class="font-weight-bold text-h3 white--text">WORKOUTS</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="4" class="fill-height pa-0">
          <v-card rounded="0" height="100%" class="createRoutineBG iluminate d-flex align-center justify-center">
            <v-card-title class="font-weight-bold text-h3 white--text">CREATE ROUTINE</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="4" class="fill-height pa-0">
          <v-card rounded="0" height="100%" class="myRoutineBG iluminate d-flex align-center justify-center">
            <v-card-title class="font-weight-bold text-h3 white--text">MY ROUTINES</v-card-title>

          </v-card>


        </v-col>
    </v-row>

  </v-container>
</template>

<script>
  export default {
    name: "UserHome"
  }
</script>

<style scoped>
  .createRoutineBG{
      height: 100%;
      background: url("../assets/imgs/createRoutinesImg.jpg") no-repeat center;
      background-size: cover;
      opacity: 1;
  }

  .workoutsBG{
    height: 100%;
    background: url("../assets/imgs/WorkoutsHome.png") no-repeat center;
    background-size: cover;
    opacity: 1;
  }

  .myRoutineBG{
    height: 100%;
    background: url("../assets/imgs/myRoutinesHome.jpg") no-repeat center;
    background-size: cover;
    opacity: 1;
  }
  .iluminate{
    transition: opacity .3s ease-in-out ;
  }
  .iluminate:hover{
    opacity: 0.8;
  }

</style>
