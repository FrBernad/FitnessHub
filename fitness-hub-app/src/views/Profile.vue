<template>
  <v-container fluid style="height: 100%" class="pa-0 bg">
    <v-row align="start" justify="center">
      <v-col cols="12" class="pa-0">
        <v-card color="rgb(233 236 239)">
          <v-img src="../assets/imgs/profileBG.jpg" class="elevation-3" aspect-ratio="5:2" height="400px"
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
                               :src="{profilePic}"
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
                        @click="openPicPicker"
                      >
                        <v-icon color="#202121">mdi-camera</v-icon>
                      </v-btn>
                      <input type="file" style="display: none" ref="picInput" @change="changePicture">
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

  export default {
    name: "Profile",
    components: {FavoriteProfile, PersonalData},
    computed: {
      username() {
        return this.$store.getters["user/username"].toUpperCase();
      },
      profilePic() {
        return this.$store.getters["user/avatarUrl"];
      }
    },
    methods: {
      openPicPicker() {
        this.$refs.picInput.click();
      },
      changePicture(event) {
        console.log(event.target.files);
        console.log(event.target.value);
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


