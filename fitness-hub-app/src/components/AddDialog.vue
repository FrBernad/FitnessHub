<template>
  <v-card>
    <v-card-title class="px-8">
      <span class="headline textColor">{{ exercise.name }}</span>
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
              :error-messages="nameError"
              @blur="$v.exercise.name.$touch()"
              clearable
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" class="d-flex align-center justify-center">
            <h1 class="text-h6 font-weight-bold textColor ">PICTURE</h1>
          </v-col>

          <v-col cols="6" class="d-flex align-center justify-center">
            <h1 class="text-h6 font-weight-bold textColor ">VIDEO</h1>
          </v-col>

          <v-col cols="6" class="d-flex align-center justify-center">
            <v-btn @click="addPhoto=!addPhoto">
              <v-icon>mdi-plus-thick</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="6" class="d-flex align-center justify-center">
            <v-btn @click="addVideo=!addVideo">
              <v-icon>mdi-plus-thick</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="6" class="d-flex align-center justify-center">
              <v-text-field v-model="exercise.photo" label="Insert URL" v-if="addPhoto"></v-text-field>
          </v-col>
          <v-col cols="6" class="d-flex align-center justify-center">
            <v-text-field v-model="exercise.video" label="Insert URL" v-if="addVideo"></v-text-field>
          </v-col>

        </v-row>
        <v-row>
          <v-col cols="12">
            <v-textarea
              class="pa-0"
              light
              no-resize
              filled
              height="150px"
              pb-0
              v-model="exercise.detail"
              color="rgb(33, 37, 41)"
              background-color="rgb(248, 249, 250)"
              label="Description"
              :error-messages="detailError"
              @blur="$v.exercise.detail.$touch()"
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-radio-group row class="mt-0" light v-model="radios">
              <v-col cols="3" class="ma-0 pa-0 d-flex align-center justify-start">
                <v-radio color="#212529" value="time" @click="cleanReps" label="TIME"></v-radio>
              </v-col>
              <v-col cols="5" class="ma-0 pa-0 d-flex align-center justify-center">
                <v-radio color="#212529" value="reps" @click="cleanTime" label="REPETITIONS"></v-radio>
              </v-col>
              <v-col cols="2" class="ma-0 pa-0 d-flex justify-end" v-if="radios==='time'">
                <v-text-field color="#212529" label="SECS" :error-messages="timeError"
                              @blur="$v.exercise.duration.$touch()" v-model="exercise.duration">{{ exercise.duration }}
                </v-text-field>
              </v-col>
              <v-col cols="2" class="ma-0 pa-0 d-flex justify-end" v-else>
                <v-text-field color="#212529" label="REPS" :error-messages="repsError"
                              @blur="$v.exercise.repetitions.$touch()" v-model="exercise.repetitions">
                  {{ exercise.repetitions }}
                </v-text-field>
              </v-col>
            </v-radio-group>
          </v-col>
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
        @click="addExercise">
        ADD
      </v-btn>
    </v-card-actions>
  </v-card>
</template>


<script>
import {maxLength, minLength, required, minValue, helpers} from 'vuelidate/lib/validators'

const validateIf = (prop, validator) =>
  helpers.withParams({type: 'validatedIf', prop}, function (value, parentVm) {
    return helpers.ref(prop, this, parentVm) ? validator(value) : true
  })

export default {
  name: "AddDialog",
  props: {
    addTo: {
      type: String
    }
  },
  data() {
    return {
      title: 'Exercise name',
      radios: "time",
      exercise: {name: '', detail: '', type: 'exercise', duration: 0, repetitions: 0,photo: '',video:''},
      addPhoto: false,
      addVideo:false,
    }
  },
  methods: {
    addExercise() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        console.log("the form is missing something");
        return;
      }
      const copy = {
        name: this.exercise.name, detail: this.exercise.detail, type: this.exercise.type,
        duration: this.exercise.duration, repetitions: this.exercise.repetitions, photo: this.exercise.photo, video: this.exercise.video
      }
      this.$store.commit(`routines/addTo${this.addTo}`, copy);
      this.exerciseClose()

    },
    exerciseClose() {
      this.resetForm();
      this.$emit('exerciseAddClose');
    },

    resetForm() {
      this.$v.$reset();
      this.exercise.name = "";
      this.exercise.detail = "";
      this.exercise.type = "";
      this.exercise.duration = 0;
      this.exercise.repetitions = 0;
      this.exercise.photo = '';
      this.exercise.video = '';
      this.addVideo = false;
      this.addPhoto = false;
    },

    cleanReps() {
      this.exercise.repetitions = 0;
    },
    cleanTime() {
      this.exercise.duration = 0;
    },
  },
  validations: {
    exercise: {
      name: {required, minLength: minLength(3), maxLength: maxLength(100)},
      detail: {required, minLength: minLength(5), maxLength: maxLength(200)},
      duration: {
        minValue: validateIf(function () {
          return this.radios === "time"
        }, minValue(1))
      },
      repetitions: {
        minValue: validateIf(function () {
          return this.radios !== "time"
        }, minValue(1))
      },
    }
  },
  computed: {
    detailError() {
      const errors = [];
      if (!this.$v.exercise.detail.$dirty) {
        return errors;
      }
      !this.$v.exercise.detail.minLength && errors.push(`Detail must be at least 5 characters long`);
      !this.$v.exercise.detail.maxLength && errors.push(`Detail can't have more than 200 characters`);
      !this.$v.exercise.detail.required && errors.push('Detail is required');

      return errors;
    },
    nameError() {
      const errors = [];
      if (!this.$v.exercise.name.$dirty) {
        return errors;
      }
      !this.$v.exercise.name.minLength && errors.push('Name must be at least 3 characters long');
      !this.$v.exercise.name.maxLength && errors.push("Name can't have more than 100 characters");
      !this.$v.exercise.name.required && errors.push('Name is required');

      return errors;
    },
    timeError() {
      const errors = [];
      if (!this.$v.exercise.duration.$dirty) {
        return errors;
      }
      !this.$v.exercise.duration.minValue && errors.push('Value must be greater than 0');

      return errors;
    },
    repsError() {
      const errors = [];
      if (!this.$v.exercise.repetitions.$dirty) {
        return errors;
      }
      !this.$v.exercise.repetitions.minValue && errors.push('Value must be greater than 0');
      return errors;
    },
  }
}
</script>

<style scoped>
.textColor {
  color: #212529;
}
</style>
