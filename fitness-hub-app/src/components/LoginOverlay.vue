<template>
  <v-overlay :value="lOn" opacity="0.6">
    <v-container fluid fill-height>
      <v-row justify="center" align="center">
        <v-col cols="11" sm="8" md="5" lg="4">
          <v-card class="px-8 pb-8 pt-4 text-center" color="#212529">
            <v-row justify="start" align="center">
              <v-col cols="10">
                <h1 class="text-left">LOGIN</h1>
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
                name="input-10-1"
                label="Password"
                hint="Al least 8 characters long."
                outlined
                counter
                @click:append="show = !show"
              ></v-text-field>
              <v-btn color="primary" large width="80%" @click="processData">Sign in</v-btn>
            </v-form>
            <div class="mt-3">
              <v-hover
                v-slot:default="{ hover }"
              >
                <a id="forgot"
                   :class="{'text-decoration-underline':hover}"
                   class="text-center">
                  Forgot your username or password?
                </a>
              </v-hover>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
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
        signInError: false
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
        try {
          await this.$store.dispatch('signIn', {
            username: this.username,
            password: this.password
          })

          await this.$router.replace('/home');
        } catch (e) {
          console.log(e);
          this.signInError = true;
          setTimeout(this.resetForm, 4000);
        }
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
        !this.$v.username.maxLength && errors.push('At least 5 characters long.')
        !this.$v.username.required && errors.push('Username is required.')
        return errors
      }
      ,
    }
  }
</script>

<style scoped>
  #forgot {
    color: #1D50AE;
  }
</style>
