<template>
  <v-card>
    <v-card-title class="px-8">
      <span class="headline textColor">{{exercise.name}}</span>
    </v-card-title>
    <v-card-text class="pb-0">
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="Exercise name"
              required
              color="textColor"
              v-model="exercise.name"
              clearable
            ></v-text-field>
          </v-col>
          <v-col cols="6" class="d-flex align-center justify-center">
            <h1 class="text-h6 font-weight-bold textColor ">PICTURE</h1>
          </v-col>

          <v-col cols="6" class="d-flex align-center justify-center">
            <h1 class="text-h6 font-weight-bold textColor ">VIDEO</h1>
          </v-col>

          <v-col cols="6" class="d-flex align-center justify-center">
            <v-btn><v-icon>mdi-plus-thick</v-icon></v-btn>
          </v-col>

          <v-col cols="6" class="d-flex align-center justify-center">
            <v-btn><v-icon >mdi-plus-thick</v-icon></v-btn>
          </v-col>

          <v-col cols="12">
            <v-textarea
              class="pa-0"
              light
              no-resize
              filled
              pb-0
              v-model="exercise.detail"
              color="rgb(33, 37, 41)"
              background-color="rgb(248, 249, 250)"
              label="Description"
              hide-details
            ></v-textarea>
          </v-col>
          <v-form class="px-4 mt-0">
            <v-radio-group class="mt-0" light v-model="radios">
              <v-row class="ma-0 pa-0" align="center">
                <v-col cols="12" class="ma-0 pa-0">
                  <v-row class="ma-0 pa-0" align="center">
                    <v-col cols="6" class="ma-0 pa-0 d-flex align-center">
                      <v-radio color="#212529" value="time" label="TIME"></v-radio>
                    </v-col>
                    <v-col cols="6" class="ma-0 pa-0">
                      <v-radio  color="#212529" value="reps" label="REPETITIONS"></v-radio>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" class="ma-0 pa-0">
                  <v-row justify="center" align="center" v-if="radios==='time'">
                    <v-col cols="3" class="d-flex justify-center">
                      <v-text-field color="#212529" label="MINS" hide-details></v-text-field>
                    </v-col>
                    <v-col cols="3" class="d-flex justify-center">
                      <v-text-field color="#212529" label="SECS" hide-details></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row justify="center" align="center" v-else>
                    <v-col cols="3" class="d-flex justify-center">
                      <v-text-field color="#212529" label="REPS" hide-details></v-text-field>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-radio-group>
          </v-form>

        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="#212529"
        text
        @click="exerciseClose"
      >
        Close
      </v-btn>
      <v-btn
        color="#212529"
        text
        @click="exerciseClose"
      >
        ADD
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
name: "AddDialog",
  methods:{
    exerciseClose(){
      this.$emit('exerciseClose');
    }
  },
  data() {
    return {
      title:'Exercise name',
      radios: "time",
      exercise: {name:'',detail:'',type:'',duration:0,repetitions:0},
    }
  },
  props: {
    isOn: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style scoped>
.textColor{
  color: #212529;
}
</style>
