<template>
  <v-overlay :value="lOn" opacity="0.6">
    <v-container fluid fill-height>
      <v-row justify="center" align="center">
        <v-col cols="11" sm="8" md="5" lg="4">
          <v-card class="px-8 pb-8 pt-4 text-center" color="#212529">
            <v-row justify="start" align="center">
              <v-icon @click="closeOverlay" small color="#B9BABB">
                mdi-alpha-x-circle-outline
              </v-icon>
            </v-row>
            <v-form>
              <v-btn class="mx-2 my-3" left color="#1877F2" :to="{name : 'UserHome'}" large width="90%"
              >
                <v-row justify="start" align="center" class="pl-4">
                  <v-icon large left color="#0F9D58">
                    mdi-google
                  </v-icon>
                  <span class="pl-3">Sign in with Google</span>
                </v-row>
              </v-btn>
              <v-btn class="mx-2 my-3" left color="#5C5CF5" :to="{name : 'UserHome'}"
                     large width="90%"
              >
                <v-row justify="start" class="pl-4">
                  <v-icon left large color="white darken-2">
                    mdi-facebook
                  </v-icon>
                  <span class="pl-3">Sign in with Facebook</span>
                </v-row>
              </v-btn>
            </v-form>
            <v-divider class="mt-4 mb-6"/>
            <v-form>
              <v-text-field
                label="Username"
                outlined
                append-icon="mdi-account"
              ></v-text-field>
              <v-text-field
                v-model="password"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.min]"
                :type="show ? 'text' : 'password'"
                name="input-10-1"
                label="Password"
                hint="Minimo 8 caracteres"
                outlined
                counter
                @click:append="show = !show"
              ></v-text-field>
              <v-btn color="primary" :to="{name : 'UserHome'}" large width="80%">Sign in</v-btn>
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
  export default {
    name: "LoginOverlay",
    props: {
      lOn: {
        type: Boolean,
        // Object or array defaults must be returned from
        // a factory function
        default: false
      }
    },
    data() {
      return {
        show: false,
        password: '',
        rules: {
          min: v => v.length >= 8 || 'At leat 8 characters long'
        },
      }
    },
    methods: {
      closeOverlay() {
        this.$emit('closeLoginOverlay');
      }
    }
  }
</script>

<style scoped>
  #forgot {
    color: #1D50AE;
  }
</style>
