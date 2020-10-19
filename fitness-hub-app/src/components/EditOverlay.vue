<template>
  <v-overlay :value="isOn" opacity="0.6">
    <v-container fluid fill-height>
      <v-row justify="center" align="center">
        <v-col cols="11" sm="8" md="5" lg="4">
          <v-card color="rgb(33, 37, 41)">
            <v-row align="center">
              <v-col cols="12" class="pb-0">
                <v-btn small icon class="ml-3">
                  <v-icon @click="closeOverlay" small color="#B9BABB">
                    mdi-alpha-x-circle-outline
                  </v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <v-card-title class="text-h4 font-weight-bold d-flex justify-center pt-0"
                          style="background-color:rgb(33, 37, 41)">
              <h1 class="text-h5 font-weight-bold ">TITLE: NEW EXERCISE</h1>
            </v-card-title>
            <v-row>
              <v-col cols="6" class="pa-0 pl-3">
                <v-card color="rgb(233, 236, 239)">
                  <v-card-title class="text-h4 font-weight-bold d-flex justify-center"
                                style="background-color: rgb(52, 58, 64)">
                    <h1 class="text-h6 font-weight-bold ">PICTURE</h1>
                  </v-card-title>
                  <v-container class="d-flex justify-center align-center">
                    <v-icon right color="rgb(52, 58, 64)">
                      mdi-plus-thick
                    </v-icon>
                  </v-container>
                </v-card>
              </v-col>
              <v-col cols="6" class="pa-0 pr-3">
                <v-card color="rgb(233, 236, 239)">
                  <v-card-title class="text-h4 font-weight-bold d-flex justify-center"
                                style="background-color: rgb(52, 58, 64)">
                    <h1 class="text-h6 font-weight-bold ">VIDEO</h1>
                  </v-card-title>
                  <v-container class="d-flex justify-center align-center">
                    <v-icon right color="rgb(52, 58, 64)">
                      mdi-plus-thick
                    </v-icon>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
            <v-card color="rgb(233, 236, 239)">
              <v-card-title class="text-h4 font-weight-bold d-flex justify-center"
                            style="background-color:rgb(52, 58, 64)">
                <h1 class="text-h6 font-weight-bold ">DESCRIPTION</h1>
              </v-card-title>
              <v-textarea
                class="pa-3"
                light
                no-resize
                filled
                pb-0
                color="rgb(33, 37, 41)"
                background-color="rgb(248, 249, 250)"
                placeholder="Insert description here."
                hide-details
              ></v-textarea>
              <v-form class="px-4 mt-0">
                <v-radio-group class="mt-0" light v-model="radios">
                  <v-row class="ma-0 pa-0" align="center">
                    <v-col cols="12" class="ma-0 pa-0">
                      <v-row class="ma-0 pa-0" align="center">
                        <v-col cols="6" class="ma-0 pa-0 d-flex align-center">
                          <v-radio value="time" label="TIME"></v-radio>
                        </v-col>
                        <v-col cols="6" class="ma-0 pa-0">
                          <v-radio value="reps" label="REPETITIONS"></v-radio>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12" class="ma-0 pa-0">
                      <v-row justify="center" align="center" v-if="radios==='time'">
                        <v-col cols="3" class="d-flex justify-center">
                          <v-text-field label="mins" hide-details></v-text-field>
                        </v-col>
                        <v-col cols="3" class="d-flex justify-center">
                          <v-text-field label="segs" hide-details></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row justify="center" align="center" v-else>
                        <v-col cols="3" class="d-flex justify-center">
                          <v-text-field label="reps" hide-details></v-text-field>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-radio-group>
              </v-form>
              <v-row align="center" justify="center">
                <v-col cols="4" class="d-flex justify-center ">
                  <v-btn @click="addOverlay=true" large width="80%" color="rgb(52, 58, 64)">
                    <v-row justify="space-around">
                      <span class="whiteCS--text">DONE</span>
                      <v-icon right color="rgb(248, 249, 250)">
                        mdi-plus-thick
                      </v-icon>
                    </v-row>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-overlay>
</template>

<script>
  export default {
    name: "EditOverlay",
    props: {
      isOn: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        radios: "time",
      }
    },
    methods: {
      closeOverlay() {
        this.$emit('closeEditOverlay');
      }
    }
  }
</script>

<style scoped>

</style>
