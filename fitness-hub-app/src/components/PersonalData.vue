<template>
  <v-card class="pa-2 ma-8" color="rgb(248 249 250)" elevation="3" height="462">
    <v-row align="center" justify="space-between">
      <v-col cols="10" class="pt-0">
        <v-card-title>
          Personal data
        </v-card-title>
      </v-col>
      <v-col cols="2" class="d-flex justify-center">
        <v-btn v-if="!editData" icon @click="editData = true; ">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-select
      class="ma-4" style="width: 80%"
      ref="country"
      v-model="gender"
      :items="genders"
      :readonly="!editData"
      label="Gender"
      placeholder="Select gender..."
    ></v-select>
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      :disabled="!editData"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          placeholder="Birthday"
          label="Birthday date"
          :value="birthdate"
          readonly
          v-bind="attrs"
          v-on="on"
          class="ma-4" style="width: 80%"
        ></v-text-field>
      </template>
      <v-date-picker v-if="editData"
                     v-model="birthdate"
                     :max="maxDate()"
                     min="1950-01-01"
                     width="500px"
      ></v-date-picker>
    </v-menu>
    <v-text-field
      placeholder="Enter your phone here"
      label="Phone"
      class="my-6 ml-4" style="width: 80%;"
      v-model="phone"
      :readonly="!editData"
      :error-messages="phoneError"
      @blur="$v.phone.$touch()"
      no-resize
      dense
    ></v-text-field>
    <v-text-field
      placeholder="Enter your fullname here"
      label="FullName"
      class="mt-6 mb-2 ml-4" style="width: 80%;"
      v-model="fullName"
      :readonly="!editData"
      :error-messages="fullNameError"
      @blur="$v.fullName.$touch()"
      no-resize
      dense
    ></v-text-field>
    <v-row class="align-center justify-center">
      <v-col cols="10" class="d-flex pt-0 justify-space-around">
        <v-btn @click="restoreData" min-height="52px" v-if="editData" outlined color="#212529"
               width="42%">
          <v-icon class="mr-2" left>mdi-cancel</v-icon>
          CANCEL
        </v-btn>
        <v-btn @click="updateProfile" min-height="52px" v-if="editData" outlined color="#212529"
               width="42%">
          <v-icon class="mr-2">mdi-content-save-outline</v-icon>
          SAVE
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
  import {sync} from "vuex-pathify";
  import {maxLength, minLength} from 'vuelidate/lib/validators';

  export default {
    name: "PersonalData",

    data: () => ({
      date: null,
      menu: false,
      genders: ['male', 'female', 'other'],
      show: false,
      editData: false,
    }),
    methods: {
      async updateProfile() {
        if (this.$v.$invalid) {
          this.$v.$touch();
          console.log("the form is missing something");
          return;
        }
        let profile = {
          ...this.$store.getters["user/userData"],
          password: "pass"
        };
        profile.birthdate = new Date(profile.birthdate).getTime();
        try {
          await this.$store.dispatch('user/updateProfile', profile);
        } catch (e) {
          console.log(e);
          try {
            await this.$store.dispatch('user/restoreValues');
          } catch (e) {
            console.log(e);
          }
        }
        this.editData = false;
      },

      async restoreData() {
        try {
          await this.$store.dispatch('user/restoreValues');
        } catch (e) {
          console.log(e);
        }
        this.editData = false
      },
      maxDate() {
        const date = new Date();
        date.setFullYear(date.getFullYear() - 13);
        return date.toISOString().substr(0, 10);
      }
    },
    computed: {
      ...sync("user/*"),
      phoneError() {
        const errors = [];
        if (!this.$v.phone.$dirty) {
          return errors;
        }
        !this.$v.phone.minLength && errors.push(`Number must have at least 8 digits`);
        !this.$v.phone.maxLength && errors.push(`Number must have at most 15 digits`);
        return errors;
      },
      fullNameError() {
        const errors = [];
        if (!this.$v.fullName.$dirty) {
          return errors;
        }
        !this.$v.fullName.minLength && errors.push(`Fullname must be al least 2 charactes long`);
        !this.$v.fullName.maxLength && errors.push(`Fullname must have at most 15 characters`);
        return errors;
      }

    },
    validations: {
      phone: {
        minLength: minLength(8), maxLength: maxLength(15)
      },
      fullName: {
        minLength: minLength(2), maxLength: maxLength(15)
      },
    }

  }

</script>

<style scoped>

</style>
