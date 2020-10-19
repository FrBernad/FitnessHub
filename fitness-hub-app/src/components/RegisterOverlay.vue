<template>
  <v-overlay :value="rOn" opacity="0.6">
    <v-container fluid fill-height>
      <v-row justify="center" align="center">
        <v-col cols="11" sm="8" md="5" lg="4">
          <v-card class="px-8 pb-8 pt-4 text-center" color="#212529">
            <v-row justify="start" align="center">
              <v-col cols="10">
                <h1 class="text-left">REGISTER</h1>
              </v-col>
              <v-col cols="2">
                <v-icon @click="closeOverlay" color="#B9BABB">
                  mdi-alpha-x-circle-outline
                </v-icon>
              </v-col>
            </v-row>
            <v-divider class="mb-8 mt-2"></v-divider>
            <v-form>
              <v-text-field
                class="my-2"
                @blur="$v.email.$touch()"
                :error-messages=emailErrors
                v-model="email"
                label="Email"
                outlined
                append-icon="mdi-email"
              ></v-text-field>
              <v-text-field
                class="my-2"
                @blur="$v.username.$touch()"
                :error-messages=usernameErrors
                v-model="username"
                hint="At least 5 characters long."
                label="Username"
                outlined
                append-icon="mdi-account"
              ></v-text-field>
              <v-text-field
                class="my-2"
                @blur="$v.password.$touch()"
                :error-messages=passwordErrors
                v-model="password"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show ? 'text' : 'password'"
                label="Password"
                hint="At least 8 characters long."
                outlined
                counter
                @click:append="show = !show"
              ></v-text-field>
              <v-btn color="primary" class="my-2" large width="80%" @click="processData">REGISTER</v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog
      v-model="loading"
      width="500px"
    >
      <v-card color="#E9ECEF" width="500px" height="250px">
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
              <v-col cols="8" v-if="errorMessage" class="mt-8">
                <h2 v-if="error" class="text-h5 text-center red--text">{{errorMessage}}</h2>
                <h2 v-else class="text-h5 text-center light-green--text">{{errorMessage}}</h2>
              </v-col>
            </v-fade-transition>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>

  </v-overlay>
</template>

<script>
  import {required, maxLength, minLength, email} from 'vuelidate/lib/validators'

  export default {
    name: "RegisterOverlay",
    props: {
      rOn: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        show: false,
        password: '',
        username: '',
        email: '',
        loading: false,
        errorMessage: "",
        error: false
      }
    },

    methods: {
      closeOverlay() {
        this.resetForm();
        this.$emit('closeRegisterOverlay');
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
          await this.$store.dispatch('signUp', {
            email: this.email,
            username: this.username,
            password: this.password
          })
          this.errorMessage = "Account created succesfully";
          await sleep(2000);
          this.loading = false;
          this.errorMessage = "";
          await this.$router.push('/verifyAccount');
        } catch (e) {
          this.error = true;
          this.errorMessage = e;
          await setTimeout(() => {
            this.errorMessage = "";
            this.loading = false;
            this.error = false;
            this.resetForm();
          }, 3500);
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
      },
      email: {
        required, email
      }
    },

    computed: {
      passwordErrors() {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.minLenght && errors.push('At least 8 characters long.')
        !this.$v.password.required && errors.push('Password is required.')
        return errors
      }
      ,
      usernameErrors() {
        const errors = []
        if (!this.$v.username.$dirty) return errors
        !this.$v.username.minLenght && errors.push('At least 5 characters long.')
        !this.$v.username.maxLength && errors.push('At least 5 characters long.')
        !this.$v.username.required && errors.push('Username is required.')
        return errors
      }
      ,
      emailErrors() {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Invalid email.')
        !this.$v.email.required && errors.push('Email is required.')
        return errors
      }
    }
  }
</script>

<style scoped>
  #forgot {
    color: #1D50AE;
  }
</style>
