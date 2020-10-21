<template>
  <v-container fluid fill-height class="pa-0 bg">
    <v-row justify="center" align="center" class="fill-height">
      <v-col cols="4" class="fill-height pa-0">
        <v-card to="/home/communityWorkouts" rounded="0" height="100%"
                class="workoutsBG iluminate d-flex align-center justify-center">
          <v-card-title class="font-weight-bold text-center text-body-2 text-sm-h5 text-md-h4 whiteCS--text shadow">
            COMMUNITY<br>WORKOUTS
          </v-card-title>
        </v-card>
      </v-col>
      <v-col cols="4" class="fill-height pa-0">
        <v-card to="/home/myRoutines/createRoutine" rounded="0" height="100%"
                class="createRoutineBG iluminate d-flex align-center text-center justify-center">
          <v-card-title class="font-weight-bold text-body-1 text-sm-h5 text-md-h4 whiteCS--text shadow">
            CREATE <br v-if="$vuetify.breakpoint.smAndDown">ROUTINE
          </v-card-title>
        </v-card>
      </v-col>
      <v-col cols="4" class="fill-height pa-0">
        <v-card to="/home/myRoutines" rounded="0" height="100%"
                class="myRoutineBG iluminate d-flex align-center justify-center">
          <v-card-title class="font-weight-bold text-body-1 text-sm-h5 text-center text-md-h4 whiteCS--text shadow">
            MY <br v-if="$vuetify.breakpoint.smAndDown">ROUTINES
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style scoped>
  .shadow {
    text-shadow: 2px 2px 4px #1C1C1C;
  }

  .bg {
    background-color: rgb(171, 171, 171);
  }

  .createRoutineBG {
    height: 100%;
    background: url("../assets/imgs/createRoutines.jpg") no-repeat center;
    background-size: cover;
    opacity: 1;
  }

  .workoutsBG {
    height: 100%;
    background: url("../assets/imgs/WorkoutsHome.png") no-repeat center;
    background-size: cover;
    opacity: 1;
  }

  .myRoutineBG {
    height: 100%;
    background: url("../assets/imgs/myRoutinesHome.jpg") no-repeat center;
    background-size: cover;
    opacity: 1;
  }

  .iluminate {
    transition: opacity .3s ease-in-out;
  }

  .iluminate:hover {
    opacity: 0.7;
  }

</style>
