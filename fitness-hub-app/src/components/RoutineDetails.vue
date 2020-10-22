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
              :error-messages="nameError"
              @blur="$v.routine.name.$touch()"
              clearable
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="justify-center align-center">
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
              label="Description"
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row class="justify-center align-center">
          <v-col cols="6" sm="6">
            <v-select
              :items="categoryOptions"
              item-text="option"
              item-value="value"
              v-model="routine.category.id"
              label="Category"
              required
              color="#212529"
              :error-messages="categoryError"
              @blur="$v.routine.category.id.$touch()"
              @change="$v.routine.category.id.$touch()"
            ></v-select>
          </v-col>
          <v-col cols="6" sm="6">
            <v-select
              :items="['rookie','beginner','intermediate','advanced']"
              label="Difficulty"
              required
              v-model="routine.difficulty"
              color="#212529"
              :error-messages="difficultyError"
              @blur="$v.routine.difficulty.$touch()"
              @change="$v.routine.difficulty.$touch()"
            ></v-select>
          </v-col>
        </v-row>
        <v-row class="justify-center align-center">
          <v-col cols="4">
            <v-checkbox
              v-model="routine.isPublic"
              label="Public"
            ></v-checkbox>
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
  import {maxLength, minLength, required} from 'vuelidate/lib/validators'

  export default {
    name: "RoutineDetails",
    data() {
      return {
        categoryOptions: [
          {option: 'Full Body', value: 1},
          {option: 'Upper Body', value: 2},
          {option: 'Lower Body', value: 3},
          {option: 'Legs', value: 4},
          {option: 'Chest', value: 5},
          {option: 'Abs', value: 6},
          {option: 'Arms', value: 7}
        ],
        routine: {
          name: '',
          detail: '',
          category: {id: undefined},
          isPublic: true,
          difficulty: '',
          dateCreated: Date.now(),
          averageRating: 0.0
        },
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
          this.routine.name = this.routine.name.toUpperCase();
          let routine = await this.$store.dispatch('createRoutine', this.routine);

          let exercises = this.$store.getters['routines/getCycles'];

          let cycleWarmup = await this.$store.dispatch('createCycle', {
            routineId: routine.id,
            cycle: {
              name: "warmup",
              order: 1
            }
          });
          for (const x of exercises.Warmup) {
            let aux = await this.$store.dispatch('addToCycleExercise', {
              routineId: routine.id,
              cycleId: cycleWarmup.id,
              exercise: x
            })
          }

          let cycleExercise = await this.$store.dispatch('createCycle',
            {
              routineId: routine.id, cycle: {
                name: "exercise",
                order: 2
              }
            });

          for (const x of exercises.Exercise) {
            let aux = await this.$store.dispatch('addToCycleExercise', {
              routineId: routine.id,
              cycleId: cycleExercise.id,
              exercise: x
            })
          }

          let cycleCooldown = await this.$store.dispatch('createCycle', {
            routineId: routine.id, cycle: {
              name: "cooldown",
              order: 3
            }
          });
          for (const x of exercises.Cooldown) {
            let aux = await this.$store.dispatch('addToCycleExercise', {
              routineId: routine.id,
              cycleId: cycleCooldown.id,
              exercise: x
            })
          }
          this.$emit('routineClose');
          this.$store.commit('routines/resetExercises');
          await this.$router.replace('/home/myRoutines');
        } catch (e) {
          console.log(e);
        }

      }
      ,
      resetForm() {
        this.$v.$reset();
        this.routine.name = "";
        this.routine.detail = "";
        this.routine.category.id = undefined;
        this.routine.isPublic = true;
        this.routine.difficulty = '';
        this.routine.dateCreated = Date.now();
      }
      ,
    }
    ,
    validations: {
      routine: {
        name: {
          required, minLength
  :
  minLength(3), maxLength
  :
  maxLength(100)
  }
  ,
  detail: {
    required, minLength
  :
    minLength(5), maxLength
  :
    maxLength(200)
  }
  ,
  category: {
    id: {
      required
    }
  }
  ,
  difficulty: {
    required
  }
  }
  }
  ,
  computed: {
    detailError()
    {
      const errors = [];
      if (!this.$v.routine.detail.$dirty) {
        return errors;
      }
      !this.$v.routine.detail.minLength && errors.push(`Detail must be at least 5 characters long`);
      !this.$v.routine.detail.maxLength && errors.push(`Detail can't have more than 200 characters`);
      !this.$v.routine.detail.required && errors.push('Detail is required');

      return errors;
    }
  ,
    nameError()
    {
      const errors = [];
      if (!this.$v.routine.name.$dirty) {
        return errors;
      }
      !this.$v.routine.name.minLength && errors.push('Name must be at least 3 characters long');
      !this.$v.routine.name.maxLength && errors.push("Name can't have more than 100 characters");
      !this.$v.routine.name.required && errors.push('Name is required');

      return errors;
    }
  ,
    categoryError()
    {
      const errors = [];
      if (!this.$v.routine.category.id.$dirty) {
        return errors;
      }
      !this.$v.routine.category.id.required && errors.push('Category is required');

      return errors;
    }
  ,
    difficultyError()
    {
      const errors = [];
      if (!this.$v.routine.difficulty.$dirty) {
        return errors;
      }
      !this.$v.routine.difficulty.required && errors.push('Difficulty is required');

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
