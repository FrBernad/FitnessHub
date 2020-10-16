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
        signInError: false
      }
    },

    methods: {
      closeOverlay() {
        this.$emit('closeRegisterOverlay');
      },

      async processData() {
        if (this.$v.$invalid) {
          this.$v.$touch();
          console.log("the form is missing something");
          return;
        }

        // await this.$router.replace('/verifyEmail');
      },

      resetForm() {
        this.$v.$reset();
        this.email = "";
        this.password = "";
        this.signInError = false;
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
