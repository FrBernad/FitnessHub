<template>
  <v-card>
    <v-card-title class="px-8">
      <span class="headline textColor">{{ routine.name }}</span>
    </v-card-title>
    <v-card-text class="pb-0">
      <v-container>
        <v-row class="justify-center align-center">
          <v-col cols="12">
            <v-text-field
              label="Routine name"
              color="#212529"
              required
              v-model="routine.name"
              clearable
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
              v-model="routine.detail"
              :error-messages="detailError"
              @blur="$v.routine.detail.$touch()"
              placeholder="Description"
            ></v-textarea>
          </v-col>
          <v-col cols="12" sm="6"
          >
            <v-select
              :items="[1]"
              label="Category"
              required
              v-model="routine.category"
              color="#212529"
            ></v-select>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="#212529"
        text
        @click="routineClose"
      >
        Close
      </v-btn>
      <v-btn
        color="#212529"
        text
        @click="createRoutine"
      >
        Create
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {maxLength, minLength,required} from 'vuelidate/lib/validators'

export default {
  name: "RoutineDetails",
  data() {
    return {
      routine: {name: 'Routine name', detail: 'test', category: {id:1},isPublic:true, difficulty:'rookie' },
    }
  },
  methods: {
    routineClose() {
      this.resetForm();
      this.$emit('routineClose');
    },
    async createRoutine() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        console.log("the form is missing something");
        return;
      }
      try {
        await this.$store.dispatch('createRoutine', this.routine);
        await this.$router.replace('/home/myRoutines');
      } catch(e) {
        console.log(e);
      }
    },
    resetForm() {
      this.$v.$reset();
      this.routine.name = "Routine name";
      this.routine.detail = "test";
      this.routine.category = 1;
      this.routine.isPublic = true;
      this.routine.difficulty = "rookie";
    }
  },
  validations: {
      routine: {
      detail: {required, minLength: minLength(5), maxLength: maxLength(20)}
    }
  },
  computed: {
    detailError() {
      const errors = [];
      if(!this.$v.routine.detail.$dirty) {
        return errors;
      }
      !this.$v.routine.detail.minLength && errors.push('Detail must be at least 5 characters long');
      !this.$v.routine.detail.maxLength && errors.push("Detail can't have more than 20 characters");
      !this.$v.routine.detail.required && errors.push('Detail is required');

      return errors;

    }
  }
}
</script>

<style scoped>
.textColor {
  color: #212529;
}
</style>
