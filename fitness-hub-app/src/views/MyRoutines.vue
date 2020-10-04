<template>
  <v-container fluid fill-height class="pa-0 ma-0 d-flex-align-start">
    <v-row class="bg align-start align-self-start">

      <v-col cols="12" class="elevation-15">
        <h4 class="font-weight-bold whiteCS--text text-center">MY ROUTINES</h4>
      </v-col>

      <v-col cols="12" class="'pa-0">
        <v-row class="align-self-start align-start">
          <v-col cols="4" class="d-flex align-center justify-center">
            <v-select label="Most popular" color="#F8F9FA" item-color="red" outlined></v-select>
          </v-col>
          <v-col col="2" fill-height class="d-flex align-center justify-center">
            <v-btn outlined color="#F8F9FA" ><v-icon>mdi-filter-variant</v-icon>Filter</v-btn>
          </v-col>
          <v-col cols="6" class="d-flex align-center justify-center">
            <v-btn x-large min-height="45px" elevation="5" id="create" class="align">
              CREATE ROUTINE
            </v-btn>

          </v-col>
        </v-row>

      </v-col>

    </v-row>


  </v-container>
</template>

<script>
export default {
  name: "MyRoutines.vue"
}
</script>

<style scoped>
.bg {
  background-color: #212529;
}


#create {
  background-color: rgba(248, 249, 250, 0.25);
  color: #F8F9FA;
  border: thin solid #F8F9FA;
}
</style>
