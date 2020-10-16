<template>
  <v-dialog v-model="dialog" persistent width="500px">
    <template v-slot:activator="{ on, attrs }">
      <v-container fluid class="bg pa-0" style="height: 100%">
        <v-row align="center" justify="space-around" class="fill-height">
          <v-col v-for="section in sections"
                 :key="section" cols="10" md="4">
            <RoutineSection :title="section"></RoutineSection>
          </v-col>
          <v-col class="d-flex align-center justify-center align-self-end py-6 bgColor" cols="12">
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
          </v-col>
        </v-row>
      </v-container>
    </template>


    <v-card>
      <v-card-title class="px-8">
        <span class="headline">{{title}}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col
              cols="12"
            >
              <v-text-field
                label="Routine name"
                required
                v-model="title"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                class="pa-0"
                light
                no-resize
                filled
                pb-0
                color="rgb(33, 37, 41)"
                background-color="rgb(248, 249, 250)"
                placeholder="Description"
                hide-details
              ></v-textarea>
            </v-col>
            <v-col
              cols="12"
              sm="6"
            >
              <v-select
                :items="['Categoria1', 'Categoria2', 'Categoria3', 'Categoria4']"
                label="Category"
                required
              ></v-select>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue darken-1"
          text
          @click="dialog = false"
        >
          Close
        </v-btn>
        <v-btn
          color="blue darken-1"
          text
          @click="dialog = false"
        >
          Create
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

</template>

    <script>
      import Footer from "../components/LandingFooter";
      import RoutineSection from "../components/RoutineSection";

      export default {
        name: "CreateRoutine",
        components: {Footer, RoutineSection},
        data() {
          return {
            sections: ["WARMP UP", "MAIN EXERCISES", "COOLDOWN"],
            title:'Routine name',
            dialog: false
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
