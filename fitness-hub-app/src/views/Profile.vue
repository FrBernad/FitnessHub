<template>
  <v-container fluid style="height: 100%" class="pa-0 bg">
    <v-row align="start" justify="center">
      <v-col cols="12" class="pa-0">
        <v-card color="rgb(233 236 239)">
          <v-img src="../assets/imgs/profileBG.jpg" class="elevation-3"
                 :height="this.$vuetify.breakpoint.smAndDown ? '300px' : '400px'"
          >
          </v-img>
          <v-row>
            <v-col cols="12" class="pa-0">
              <v-container fluid fill-height class="d-flex justify-center align-center pb-0">
                <v-row align="center" justify="center">
                  <v-col cols="6" class="d-flex align-center justify-center" style="position: relative">
                    <div style="position: absolute; bottom: 15px">
                      <v-avatar size="200px"
                                class="avBorder elevation-5">
                        <v-img alt="profile picture"
                               class="ma-0 pa-0"
                               :src="profilePic"
                               lazy-src="../assets/imgs/emptyUser.png"
                        />
                      </v-avatar>
                      <v-btn
                        class="mx-2"
                        fab
                        dark
                        small
                        color="#f8f9fa"
                        elevation="5"
                        style="position:absolute; bottom:0;right:10px"
                        @click="picDialog=true"
                      >
                        <v-icon color="#202121">mdi-camera</v-icon>
                      </v-btn>

                      <v-dialog v-model="picDialog" width="550">
                        <v-card class="pa-6">
                          <v-row align="center" justify="center">
                            <v-col cols="8">
                              <v-text-field
                                v-model="url"
                                label="URL"
                                placeholder="URL"
                                outlined
                                clearable
                                :error-messages="urlErrors"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="8" class="d-flex justify-space-around align-center">
                              <v-btn @click="cancelPicChange">CANCEL</v-btn>
                              <v-btn @click="changePic">CHANGE</v-btn>
                            </v-col>
                          </v-row>
                        </v-card>
                      </v-dialog>
                    </div>
                  </v-col>
                  <v-col cols="12" class="pa-0">
                    <h1 class="nameProfile text-center">{{username}}</h1>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
          <v-row align="start" justify="space-around">
            <v-col cols="12" md="6" class="pt-0 pl-md-9">
              <PersonalData></PersonalData>
            </v-col>
            <v-col cols="12" md="6" class="pt-0 pr-md-9">
              <FavoriteProfile></FavoriteProfile>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import PersonalData from "../components/PersonalData";
  import FavoriteProfile from "../components/FavoriteProfile";
  import {minLength, required} from 'vuelidate/lib/validators'

  export default {
    name: "Profile",
    components: {FavoriteProfile, PersonalData},
    data() {
      return {
        picDialog: false,
        password: "pass",
        show: false,
        url: "",
      }
    },

    validations: {
      url: {required, minLength: minLength(4)}
    },

    computed: {
      username() {
        return this.$store.getters["user/username"].toUpperCase();
      },
      profilePic() {
        return this.$store.getters["user/avatarUrl"];
      },
      urlErrors() {
        const errors = [];
        if (!this.$v.url.$dirty) {
          return errors;
        }
        !this.$v.url.minLength && errors.push(`URL must be at least 4 characters long`);
        !this.$v.url.required && errors.push('URL is required');
        return errors;
      },
    },

    methods: {
      cancelPicChange() {
        this.url = "";
        this.picDialog = false;
      },
      async changePic() {
        this.$v.url.$touch();
        if (this.$v.$invalid) {
          this.$v.$touch();
          console.log("the form is missing something");
          return;
        }
        try {
          const data = {
            ...this.$store.getters["user/userData"],
            password: this.password
          };
          data.avatarUrl = this.url;
          data.birthdate = Date.now();
          await this.$store.dispatch("user/updateProfile", data);
          this.picDialog = false;
        } catch (e) {
          console.log(e)
        }
      },
    }
  }
</script>

<style>
  .bg {
    background-color: rgb(52, 58, 64);
  }

  .avBorder {
    border: 4px solid white;
  }

  .nameProfile {
    color: #212529;
  }
</style>


