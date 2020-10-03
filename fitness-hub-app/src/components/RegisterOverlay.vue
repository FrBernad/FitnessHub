<template>
  <v-overlay :value="rOn" opacity="0.6">
    <v-container fluid fill-height>
      <v-row justify="center" align="center">
        <v-col cols="11" sm="8" md="5" lg="4">
          <v-card class="pa-8 text-center" color="#212529">
            <v-form>
              <v-text-field
                label="Usuario"
                outlined
                append-icon="mdi-account"
              ></v-text-field>
              <v-text-field
                v-model="password"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.min]"
                :type="show ? 'text' : 'password'"
                name="input-10-1"
                label="Contraseña"
                hint="Minimo 8 caracteres"
                outlined
                counter
                @click:append="show = !show"
              ></v-text-field>
              <v-btn color="primary" :to="{name : 'CreateRoutine'}" large width="90%">Entrar</v-btn>
            </v-form>

            <div class="mt-3">
              <v-hover
                v-slot:default="{ hover }"
              >
                <a id="forgot" :class="{'text-decoration-underline':hover}" class="text-center">¿olvidaste tu usuario o
                  contraseña?</a>
              </v-hover>
            </div>

            <v-divider class="mt-4 mb-6"/>
            <v-btn color="success" large width="70%">Registrarse</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-overlay>
</template>

<script>
  export default {
    props: {
      rOn: {
        type: Boolean,
        default: false
      }
    },
    name: "RegisterOverlay",
    data() {
      return {
        show: false,
        password: 'Contraseña',
        rules: {
          min: v => v.length >= 8 || 'Minimo 8 caracteres',
        },
      }
    },
  }
</script>

<style scoped>
  #forgot {
    color: #1D50AE;
  }
</style>
