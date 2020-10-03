<template>
  <v-container fluid fill-height>
    <AddOverlay :is-on="addOverlay" @closeAddOverlay="addOverlay=false"></AddOverlay>
    <v-row align="center" justify="center">
      <v-col cols="10">
        <v-card color="rgb(52, 58, 64)" class="pa-1">
          <v-card-title class="whiteCS--text d-flex align-center justify-center">
            <h1 class="text-h4 font-weight-bold ">{{title}}</h1>
          </v-card-title>
          <v-card color="rgb(73, 80, 87)" class="mx-2 mb-2 py-1">
            <v-card color="rgb(248, 249, 250)" class="ma-3" v-for="exercise in exercises" :key="exercise">
              <v-card-title class="pa-2">{{exercise}}</v-card-title>
            </v-card>
            <v-row align="center" justify="space-around" class="pb-2">
              <v-col cols="5">
                <v-btn large width="80%" color="rgb(52, 58, 64)">
                  <v-row justify="space-around">
                    <span class="whiteCS--text">Edit</span>
                    <v-icon right color="rgb(248, 249, 250)">
                      mdi-pencil
                    </v-icon>
                  </v-row>
                </v-btn>
              </v-col>
              <v-col cols="5" class="d-flex align-center justify-end">
                <v-btn @click="addOverlay=true" large width="80%" color="rgb(52, 58, 64)">
                  <v-row justify="space-around">
                    <span class="whiteCS--text">Add</span>
                    <v-icon right color="rgb(248, 249, 250)">
                      mdi-plus-thick
                    </v-icon>
                  </v-row>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import AddOverlay from "./AddOverlay";

  export default {
    name: "RoutineSection",
    components: {AddOverlay},
    props: {
      title: {
        type: String
      }
    },
    data() {
      return {
        exercises: ["JUMPING JACK", "INCHWORMS", "ARMCIRCLES"],
        addOverlay: false
      }
    }
  }
</script>

