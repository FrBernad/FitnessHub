<template>
  <v-card class="pa-3">
    <v-row class="pa-0 align-center justify-center">
      <v-col cols="12" class="py-0 d-flex align-center justify-end">
        <v-btn icon @click="exerciseClose">
          <v-icon>mdi-close-circle-outline</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-card-title class="text-h4 font-weight-bold d-flex pt-0 justify-center">{{info.name}}</v-card-title>
    <v-row class="align-center justify-center">
      <v-col cols="12" class="pb-0 text-center">
        <v-card-text class="text-h5 font-weight-bold d-flex align-center justify-center pa-0">
          DESCRIPTION
        </v-card-text>
        <v-card-text>
          {{info.detail}}
        </v-card-text>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card-text v-if="info.repetitions" class="text-h5 font-weight-bold text-center pa-0">
          REPS: {{info.repetitions}}
        </v-card-text>
        <v-card-text v-else class="text-h5 font-weight-bold text-center pa-0">
          SECS: {{info.duration}}
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
  export default {
    name: "ExerciseInformation",
    props: ["info", "cycleId", "routineId"],

    methods: {
      exerciseClose() {
        this.$emit('exerciseClose')
      }
    },

  }

</script>

<style scoped>

</style>
