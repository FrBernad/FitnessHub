<template>
  <v-card class="pa-2 ma-8" color="rgb(248 249 250)" elevation="3" height="450">
    <v-row align="center" justify="space-between">
      <v-col cols="10" class="pt-0">
        <v-card-title>
          Personal data
        </v-card-title>
      </v-col>
      <v-col cols="2" class="d-flex justify-center">
        <v-btn icon @click="editData = !editData; ">
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
      class="ma-4" style="width: 80%;"
      v-model="phone"
      :readonly="!editData"
      :error-messages="phoneError"
      @blur="$v.phone.$touch()"
      no-resize
      dense
    ></v-text-field>
    <v-row class="align-center justify-end">
      <v-col cols="8">
        <v-dialog v-model="canEdit" persistent width="500px">
          <v-card class="pa-5">
            <v-card-title class="pa-0">Insert password</v-card-title>
            <v-text-field label="Password" @click:append="show = !show" v-model="password"
                          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="show ? 'text' : 'password'"></v-text-field>
            <v-row class="align-center justify-space-around">
              <v-col cols="6" class="d-flex align-center justify-space-around offset-6">
                <v-btn @click="restoreData">CANCEL</v-btn>
                <v-btn @click="updateProfile">APPLY</v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-dialog>
        <v-btn @click="canEdit=true;editData=!editData" min-height="52px" v-if="editData" outlined color="#212529"
               width="30%">
          <v-icon class="mr-2">mdi-content-save-outline</v-icon>
          <span>SAVE</span>
        </v-btn>
      </v-col>
    </v-row>

  </v-card>
</template>

<script>
import {sync} from "vuex-pathify";
import {maxLength, minLength} from 'vuelidate/lib/validators';
import $v from "@/store/modules/user/state";

export default {
  name: "PersonalData",

  data: () => ({
    date: null,
    menu: false,
    genders: ['male', 'female', 'other'],
    rules: [v => v.length <= 100 || 'Max 100 characters'],
    password: '',
    show: false,
    editData: false,
    canEdit: false,
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
        password: this.password
      };
      try {
        await this.$store.dispatch('user/updateProfile', profile);
      }catch (e){
        console.log(e);
        try{
          await this.$store.dispatch('user/restoreValues');
        }catch(e){
          console.log(e);
        }
      }
      this.canEdit=false;
      this.password = '';
    },
    async restoreData(){
      try{
        await this.$store.dispatch('user/restoreValues');
      }catch(e){
        console.log(e);
      }
      this.canEdit=false;
      this.password = '';

    },
    maxDate() {
        const date = new Date();
        date.setFullYear(date.getFullYear() - 13);
        return date.toISOString().substr(0, 10);
    }
  },
  computed: {
    ...sync("user/*"),
    phoneError(){

      const errors = [];
      if (!this.$v.phone.$dirty) {
        return errors;
      }
      !this.$v.phone.minLength && errors.push(`Number must have at least 8 digits`);
      !this.$v.phone.maxLength && errors.push(`Number must have at most 15 digits`);
      return errors;
    }

  },
  validations:{
    phone:{
      minLength: minLength(8), maxLength: maxLength(15)
    },
  }



}

</script>

<style scoped>

</style>
