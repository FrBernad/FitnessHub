<template>
  <v-card class="pa-2 ma-8" color="rgb(248 249 250)" elevation="3">
    <v-row align="center" justify="space-between">
      <v-col cols="9" class="pt-0">
        <v-card-title>
          Personal data
        </v-card-title>
      </v-col>
      <v-col cols="3" class="d-flex justify-center">
        <v-btn icon v-if="editData" @click="editData = !editData; ">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-card-text class="font-weight-bold">{{ email }}</v-card-text>
    <v-autocomplete
      class="ma-4" style="width: 80%"
      ref="country"
      v-model="gender"
      :items="genders"
      :readonly="editData"
      label="Gender"
      placeholder="Select gender..."
    ></v-autocomplete>
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      :disabled="editData"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="birthdate"
          placeholder="Birthday"
          label="Birthday date"
          readonly
          v-bind="attrs"
          v-on="on"
          class="ma-4" style="width: 80%"
        ></v-text-field>
      </template>
      <v-date-picker v-if="!editData"
                     ref="picker"
                     v-model="birthdate"
                     :max="new Date().toISOString().substr(0, 10)"
                     min="1950-01-01"
                     width="500px"
      ></v-date-picker>
    </v-menu>
    <v-text-field
      placeholder="Enter your phone here"
      label="Phone"
      class="ma-4" style="width: 80%;"
      v-model="phone"
      :readonly="editData"
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
        <v-btn @click="canEdit=true;editData=!editData" min-height="52px" v-if="!editData" outlined color="#212529"
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

export default {
  name: "PersonalData",

  data: () => ({
    date: null,
    menu: false,
    genders: ['male', 'female', 'other'],
    rules: [v => v.length <= 100 || 'Max 100 characters'],
    password: '',
    show: false,
    editData: true,
    canEdit: false,
  }),
  methods: {
    async updateProfile() {

      let profile = {
        ...this.$store.getters["user/userData"],
        password: this.password
      };
      try {
        let response = await this.$store.dispatch('user/updateProfile', profile);
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

    }
  },
  computed: {
    ...sync("user/*"),
  }

}

</script>

<style scoped>

</style>
