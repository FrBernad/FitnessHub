<template>
  <v-container fluid style="height: 100%" class="bg pa-0">
    <v-row class="align-center justify-center textBG">
      <v-col cols="4" class="d-flex align-center justify-center offset-0 offset-sm-4 pb-0">
        <h1 class="whiteCS--text">{{name}}</h1>
      </v-col>
      <v-col cols="6" sm="4"
             class="d-flex align-center justify-space-around offset-sm-0 pb-4 pb-sm-0 order-3 order-sm-0">
        <v-btn icon :color="fav ? '#84419D' : '#F8F9FA'" @click="toogleFavourite">
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn :to="{ path: '/home/myRoutines/editRoutine/',query: { routineData: routineData, routineId: routineData.id}}"
               icon color="#F8F9FA" v-if="canEdit">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn @click="rate=true" icon color="#F8F9FA">
          <v-icon>mdi-star</v-icon>
          <v-dialog
            v-model="rate"
            width="400px"
            persistent
          >
            <v-card color="#E9ECEF" width="400px" height="250px">
              <v-container fill-height fluid>
                <v-row justify="center" align="center">
                  <v-col cols="10" class="d-flex justify-center align-center">
                    <v-rating
                      v-model="rating"
                      color="yellow darken-3"
                      background-color="grey darken-1"
                      empty-icon="$ratingFull"
                      hover
                      x-large
                    ></v-rating>
                  </v-col>
                  <v-col cols="9" class="d-flex mt-5 justify-space-around align-center">
                    <v-btn large @click="applyRating">APPLY</v-btn>
                    <v-btn large @click="rate=false">CANCEL</v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-dialog>
        </v-btn>
        <v-btn icon color="#F8F9FA">
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12" class="pt-0 pb-0 pb-sm-4">
        <h2 class="text-center whiteCS--text">by {{creator}}</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="d-flex align-center justify-center">
        <v-img src="../assets/imgs/routines.jpg" max-height="250" max-width="500" class="imgBorder"></v-img>
      </v-col>
    </v-row>

    <v-row class="align-center">
      <v-col cols="12" class="textBG">
        <h2 class="whiteCS--text text-center">DESCRIPTION</h2>
      </v-col>
      <v-col cols="12">
        <p class="text-center my-2">{{detail}}
        </p>
      </v-col>
    </v-row>

    <v-row class="align-center">
      <v-col cols="12" class="textBG">
        <h2 class="whiteCS--text text-center">EXCERCISES</h2>
      </v-col>
    </v-row>

    <v-row class="align-center textBG2">
      <v-col cols="12">
        <h2 class="whiteCS--text text-center">WARM UP</h2>
      </v-col>
      <v-col cols="12" class="py-0">
        <v-list class="pa-0" color="#F8F9FA">
          <Exercise v-for="(entry,index) in exercises.warmup" :key="index" :info="entry"></Exercise>
        </v-list>
      </v-col>
    </v-row>

    <v-row class="align-center  textBG2">
      <v-col cols="12">
        <h2 class="whiteCS--text text-center">MAIN EXCERCISES</h2>
      </v-col>
      <v-col cols="12" class="py-0">
        <v-list class="pa-0" color="#F8F9FA">
          <Exercise v-for="(entry,index) in exercises.exercise" :key="index" :info="entry"></Exercise>
        </v-list>
      </v-col>

    </v-row>

    <v-row class="align-center  textBG2">
      <v-col cols="12">
        <h2 class="whiteCS--text text-center">COOL DOWN</h2>
      </v-col>
      <v-col cols="12" class="py-0">
        <v-list class="pa-0">
          <Exercise v-for="(entry,index) in exercises.cooldown" :key="index" :info="entry"></Exercise>
        </v-list>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
  import Exercise from "@/components/Exercise";

  export default {
    name: "Routine",
    components: {Exercise},
    props: ["routineData", "routineId"],
    data() {
      return {
        exercises: {
          warmup: [],
          exercise: [],
          cooldown: [],
        },
        name: "",
        creator: "",
        creatorID: null,
        detail: "",
        id: null,
        fav: false,
        rate: false,
        rating: 0.0
      }
    },

    computed: {
      canEdit() {
        return this.creatorID === this.$store.get("user/userID");
      }
    },

    created() {
      this.seedRoutine();
      this.checkFav();
    },

    methods: {
      async seedRoutine() {

        if (typeof this.routineId !== "undefined") {
          if (!this.routineData.id) {
            const routine = await this.$store.dispatch("getRoutineByID", {
              routineId: this.routineId
            });
            this.name = routine.name;
            this.creator = routine.creator.username;
            this.creatorID = routine.creatorID;
            this.detail = routine.detail;
            this.id = routine.id;
          } else {
            this.name = this.routineData.name;
            this.creator = this.routineData.creator.username;
            this.creatorID = this.routineData.creator.id;
            this.detail = this.routineData.detail;
            this.id = this.routineData.id;
          }
          try {
            const cyclesData = await this.$store.dispatch("getRoutineCycles", {
              routineId: this.id
            });
            for (const cycle of cyclesData.results) {
              let exercises = await this.$store.dispatch("getCycleExercises", {
                routineId: this.id,
                cycleId: cycle.id,
              });
              this.exercises[cycle.type].push(...exercises.results);
            }
          } catch (e) {
            console.log(e);
          }
        }
      },

      async toogleFavourite() {
        if (this.fav) {
          try {
            await this.$store.dispatch("removeFromFavourites", {routineId: this.id});
            this.fav = false;
          } catch (e) {
            this.fav = true;
            console.log(e);
          }
        } else {
          try {
            await this.$store.dispatch("addToFavourites", {routineId: this.id});
            this.fav = true;
          } catch (e) {
            this.fav = false;
            console.log(e);
          }
        }
      },

      async checkFav() {
        try {
          this.fav = await this.$store.dispatch("checkIfFav", {routineId: this.id});
        } catch (e) {
          console.log(e);
          this.fav = false;
        }
      },

      async applyRating() {
        try {
          await this.$store.dispatch("rateRoutine", {
            routineId: this.id,
            score: this.rating
          });
        } catch (e) {
          console.log(e);
        }
        this.rate = false;
      },

    }
  }

</script>

<style scoped>
  .bg {
    background-color: #E9ECEF;
  }

  .textBG {
    background-color: #212529;
  }

  .textBG2 {
    background-color: #343A40;
  }

  .imgBorder {
    border-radius: 5%;
  }
</style>
