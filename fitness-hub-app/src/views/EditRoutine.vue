<template>
  <v-container fluid class="bg pa-0 fill-height" style="height: 100%">
    <v-row class="justify-space-around align-center">
      <v-col cols="10" md="4">
        <RoutineSection title="WARM UP" section="Warmup"></RoutineSection>
      </v-col>
      <v-col cols="10" md="4">
        <RoutineSection title="MAIN EXERCISES" section="Exercise"></RoutineSection>
      </v-col>
      <v-col cols="10" md="4">
        <RoutineSection title="COOL DOWN" section="Cooldown"></RoutineSection>
      </v-col>
    </v-row>

    <v-row class="align-self-end justify-space-around bgColor">
      <v-col cols="12" class="d-flex align-self-end justify-center">
        <v-row>
          <v-col cols="4">
            <v-btn @click="modifyRoutine" x-large min-height="45px" elevation="5">
              APPLY CHANGES
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-btn @click="deleteRoutine" x-large min-height="45px" elevation="5">
              DELETE
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-btn @click="restore" x-large min-height="45px" elevation="5">
              CANCEL
            </v-btn>
          </v-col>
        </v-row>

      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import RoutineSection from "../components/RoutineSection";
import RoutineDetails from "@/components/RoutineDetails";

export default {
  name: "EditRoutine",
  props: ["routineData", "routineId"],
  components: {RoutineSection, RoutineDetails},
  data() {
    return {
      sections: ["WARMP UP", "MAIN EXERCISE", "COOLDOWN"],
      title: 'Routine name',
      dialog: false,
    }
  },
  created() {
      this.initialize();
  },

  methods: {

    async initialize(){
      this.restore();
      try {
        const cyclesData = await this.$store.dispatch("getRoutineCycles", {
          routineId: this.routineId,
        });
        for (const cycle of cyclesData.results) {
          let exercises = await this.$store.dispatch("getCycleExercises", {
            routineId: this.routineId,
            cycleId: cycle.id,
          });
          for (const ex of exercises.results) {
            this.$store.commit(`routines/addTo${cycle.type.charAt(0).toUpperCase() + cycle.type.slice(1)}`, ex);
          }
        }
      } catch (e) {
        console.log(e);
      }
    },

    restore(){
      this.$store.commit('routines/resetExercises');
    },

    async deleteRoutine(){
      await this.deleteExercises();
      await this.deleteCycle();
      try {
        await this.$store.dispatch("removeRoutine", {routineId: this.routineId});
      } catch (e) {
        console.log(e);
      }
      this.restore();
      await this.$router.replace('/home/myRoutines');
    },
    async deleteExercises(){
      try {
        const cyclesData = await this.$store.dispatch("getRoutineCycles", {
          routineId: this.routineId,
        });
        for (const cycle of cyclesData.results) {
          let exercises = await this.$store.dispatch("getCycleExercises", {
            routineId: this.routineId,
            cycleId: cycle.id,
          });
          for (const ex of exercises.results) {
            await this.$store.dispatch('removeExerciseFromCycle', {
              routineId: this.routineId,
              cycleId: cycle.id,
              exerciseId: ex.id,
            });
          }
        }

      } catch (e) {
        console.log(e);
      }

    },

    async deleteCycle(){
      try {

        const cyclesData = await this.$store.dispatch("getRoutineCycles", {
          routineId: this.routineId,
        });
        for (const cycle of cyclesData.results) {

            await this.$store.dispatch('removeCycle', {
            routineId: this.routineId,
            cycleId: cycle.id,
          });
        }

      } catch (e) {
        console.log(e);
      }
    },

    async modifyRoutine(){
      try {
        await this.deleteExercises();
        const cyclesData = await this.$store.dispatch("getRoutineCycles", {
          routineId: this.routineId,
        });
        for (const cycle of cyclesData.results) {
          let exercises = this.$store.getters[`routines/${cycle.type.charAt(0).toUpperCase() + cycle.type.slice(1)}`];
          console.log(exercises);
          for (const ex of exercises) {
             await this.$store.dispatch('addToCycleExercise', {routineId: this.routineId, cycleId: cycle.id, exercise: ex });
          }
        }

      } catch (e) {
        console.log(e);
      }
      this.restore();
      await this.$router.replace('/home/myRoutines');


    },

    }

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
