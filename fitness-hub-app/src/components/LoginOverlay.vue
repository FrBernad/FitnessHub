<template>
  <v-overlay :value="lOn" opacity="0.6">
    <v-container fluid fill-height>
      <v-row justify="center" align="center">
        <v-col cols="11" sm="8" md="5" lg="4">
          <v-card light class="px-8 pb-8 pt-4 text-center" color="#F8F9FA">
            <v-row justify="start" align="center">
              <v-col cols="10">
                <h1 class="text-left">LOGIN</h1>
              </v-col>
              <v-col cols="2">
                <v-btn icon>
                  <v-icon @click="closeOverlay" color="#B9BABB">
                    mdi-close-circle-outline
                  </v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <v-divider class="mb-8 mt-2"></v-divider>
            <v-form>
              <v-text-field
                @blur="$v.username.$touch()"
                :error-messages=usernameErrors
                v-model="username"
                label="Username"
                outlined
                hint="At least 5 characters long."
                append-icon="mdi-account"
              ></v-text-field>
              <v-text-field
                @blur="$v.password.$touch()"
                :error-messages=passwordErrors
                v-model="password"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show ? 'text' : 'password'"
                label="Password"
                hint="Al least 8 characters long."
                outlined
                counter
                @click:append="show = !show"
              ></v-text-field>
              <v-btn light outlined class="mt-3" large width="80%" @click="processData">Sign in</v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog
      v-model="loading"
      width="500px"
    >
      <v-card light color="#F8F9FA" width="500px" height="250px">
        <v-container fill-height fluid>
          <v-row align="center" justify="center">
            <v-fade-transition>
              <v-col v-if="!errorMessage" cols="5" class="d-flex align-center justify-center">
                <v-progress-circular
                  :size="70"
                  :width="7"
                  color="purple"
                  indeterminate
                ></v-progress-circular>
              </v-col>
            </v-fade-transition>
            <v-fade-transition>
              <template v-if="!verf">
                <v-col cols="8" v-if="errorMessage" class="mt-8">
                  <h2 v-if="error" class="text-h5 text-center red--text">{{errorMessage}}</h2>
                  <h2 v-else class="text-h5 text-center light-green--text">{{errorMessage}}</h2>
                </v-col>
              </template>
            </v-fade-transition>
            <template v-if="verf">
              <v-col cols="8" class="mt-8">
                <h2 class="text-h5 text-center red--text">Your account is not verified</h2>
              </v-col>
              <v-col cols="9" md="6" class="mt-8 d-flex justify-space-between">
                <v-btn light @click="verf=false;loading=false;errorMessage=''" width="40%" outlined>CANCEL</v-btn>
                <v-btn light to="verifyAccount" width="40%" outlined>VERIFY</v-btn>
              </v-col>
            </template>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>

  </v-overlay>
</template>

<script>
  import {required, maxLength, minLength} from 'vuelidate/lib/validators'

  export default {
    name: "LoginOverlay",
    props: {
      lOn: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        show: false,
        password: '',
        username: '',
        loading: false,
        errorMessage: "",
        error: false,
        verf: false
      }
    },

    methods: {
      closeOverlay() {
        this.resetForm();
        this.$emit('closeLoginOverlay');
      },
      async processData() {
        if (this.$v.$invalid) {
          this.$v.$touch();
          console.log("the form is missing something");
          return;
        }
        const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
        try {
          this.loading = true;
          await sleep(1000);
          await this.$store.dispatch('signIn', {
            username: this.username,
            password: this.password
          })
          await sleep(1000);
          this.loading = false;
          await this.$router.replace('/home');
        } catch (e) {
          if (e.message === "verif") {
            this.verf = true;
            this.errorMessage = e;
          } else {
            this.error = true;
            this.errorMessage = e;
            await setTimeout(() => {
              this.errorMessage = "";
              this.loading = false;
              this.error = false;
              this.resetForm();
            }, 4000);
          }
        }
      },
      resetForm() {
        this.$v.$reset();
        this.email = "";
        this.password = "";
      }
    },

    validations: {
      username: {
        required, minLenght: minLength(5), maxLength: maxLength(15)
      },
      password: {
        required, minLenght: minLength(8)
      }
    },

    computed: {
      passwordErrors() {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.minLenght && errors.push('At least 8 characters long.')
        !this.$v.password.required && errors.push('Password is required.')
        return errors
      },
      usernameErrors() {
        const errors = []
        if (!this.$v.username.$dirty) return errors
        !this.$v.username.minLenght && errors.push('At least 5 characters long.')
        !this.$v.username.maxLength && errors.push("Maximum 15 characters long.")
        !this.$v.username.required && errors.push('Username is required.')
        return errors
      }
      ,
    }
  }
</script>

<style scoped>

</style>
