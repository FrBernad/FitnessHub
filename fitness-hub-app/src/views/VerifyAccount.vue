<template>
  <v-container fluid fill-height>
    <v-dialog
      v-model="loading"
      width="500px"
    >
      <v-card color="#212529" width="500px" height="250px">
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

    <v-row align="center" justify="center">
      <v-col cols="10" sm="10" md="7" lg="6">
        <v-card dark color="#212529" class="pa-4">
          <v-container fluid>
            <v-row align="center" justify="center">
              <v-col cols="12">
                <h1 class="text-center text-h5 text-sm-h4 text-md-h3 font-weight-bold">You are almost there!</h1>
              </v-col>
              <v-col cols="12">
                <p class="text-center text-body-2 text-sm-h6 text-md-h5 font-weight-medium">
                  Check your email and insert the confirmation code below.
                </p>
              </v-col>
              <v-col cols="9" class="d-flex justify-center py-0">
                <v-form style="width: 40%">
                  <v-text-field placeholder="code"
                                outlined v-model="code"
                                :error-messages="codeErrors"
                                @blur="$v.code.$touch()"
                                dense
                  ></v-text-field>
                </v-form>
              </v-col>
              <v-col cols="6" class="d-flex align-center justify-center pt-0">
                <v-btn dark outlined large width="50%" @click="verifyUser">VERIFY</v-btn>
              </v-col>
              <v-col cols="12" class="pb-0">
                <v-divider class="mb-5"></v-divider>
                <p class="text-start text-subtitle-2 mb-0 text-sm-subtitle-1">Didn't recieve our email?</p>
                <v-row justify="center">
                  <v-col cols="8">
                    <v-text-field placeholder="email"
                                  outlined v-model="email"
                                  :error-messages="emailErrors"
                                  dense
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4" class="d-flex align-center justify-center pa-0 pb-7">
                    <v-btn dark outlined width="50%" @click="resendVerification">RESEND</v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
  import {required, maxLength, email} from "vuelidate/lib/validators"

  export default {
    name: "VerifyAccount",
    data() {
      return {
        code: "",
        email: "",
        loading: false,
        errorMessage: "",
        error: false
      }
    },
    async mounted() {
      const email = this.$route.query.userEmail;
      const code = this.$route.query.code;

      const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

      if (email && code) {
        try {
          this.loading = true;
          await sleep(1000);
          await this.$store.dispatch('verifyAccount', {
            email: email,
            code: code
          });
          this.errorMessage = "Your account is now verified, redirecting to home";
          await sleep(2000);
          this.loading = false;
          this.errorMessage = "";
          await this.$router.replace('/');
        } catch (e) {
          this.error = true
          this.errorMessage = "Something went wrong validating your account";
          await setTimeout(() => {
            this.errorMessage = "";
            this.loading = false;
            this.error = false;
          }, 2000);
        }
      }
    },
    methods: {
      async verifyUser() {
        if (this.$v.code.$invalid) {
          this.$v.code.$touch();
          console.log("invalid");
          return;
        }
        const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
        try {
          this.loading = true;
          await sleep(1000);
          const userData = this.$store.getters["user/userData"];
          await this.$store.dispatch('verifyAccount', {
            email: userData.email,
            code: this.code
          });
          this.errorMessage = "Your account is now verified, redirecting to login page";
          await sleep(2000);
          this.loading = false;
          this.errorMessage = "";
          await this.$router.replace('/');
        } catch (e) {
          this.error = true
          this.errorMessage = "Something went wrong, check your code";
          await setTimeout(() => {
            this.errorMessage = "";
            this.loading = false;
            this.error = false;
          }, 2000);
        }
      },
      async resendVerification() {
        this.$v.email.$touch();
        if (this.$v.email.$invalid) {
          this.$v.email.$touch();
          console.log("invalid");
          return;
        }
        const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
        try {
          this.loading = true;
          await sleep(1000);
          await this.$store.dispatch('resendVerification', {
            email: this.email
          });
          this.errorMessage = "Email resend succesfully";
          await sleep(2000);
          this.loading = false;
          this.errorMessage = "";
        } catch (e) {
          this.error = true
          this.errorMessage = "Error resending verification";
          await setTimeout(() => {
            this.errorMessage = "";
            this.loading = false;
            this.error = false;
          }, 2000);
          console.log(e);
        }
      }
    }
    ,
    validations: {
      code: {
        required, maxLength: maxLength(10)
      },
      email: {
        required, maxLength: maxLength(30), email
      }
    }
    ,
    computed: {
      codeErrors() {
        const errors = []
        if (!this.$v.code.$dirty) return errors
        !this.$v.code.maxLength && errors.push('At least 10 characters long.')
        !this.$v.code.required && errors.push('Insert code.')
        return errors
      }
      ,
      emailErrors() {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.maxLength && errors.push('Max 30 characters.')
        !this.$v.email.email && errors.push('Invalid email format.')
        !this.$v.email.required && errors.push('Insert an email.')
        return errors
      }

    }
  }
</script>

<style scoped>

</style>
