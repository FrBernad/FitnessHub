<template>
  <v-container fluid style="height: 100%" class="bg pa-0">
    <v-row class="align-center  textBG">
      <v-col cols="4" class="d-flex align-center justify-center offset-4 pb-0">
        <h1 class="whiteCS--text">MUSCLE & STRENGHT</h1>
      </v-col>
      <v-col cols="3" class="d-flex align-center justify-space-around offset-1 pr-8 pb-0">
        <v-btn icon color="#F8F9FA">
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon color="#F8F9FA">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn icon color="#F8F9FA">
          <v-icon>mdi-star</v-icon>
        </v-btn>
        <v-btn icon color="#F8F9FA">
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12" class="pt-0">
        <h2 class="text-center whiteCS--text">by JOE</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex align-center justify-center">
        <v-img src="../assets/imgs/routines.jpg" max-height="250" max-width="500" class="imgBorder" ></v-img>
      </v-col>
    </v-row>

    <v-row class="align-center  textBG">
      <v-col cols="12">
        <h2 class="whiteCS--text text-center">DESCRIPTION</h2>
      </v-col>
    </v-row>

    <v-row class="align-center">
      <v-col cols="12">
        <p class="text-center">Get your joints moving and your muscles burning with this strenght building routine. This routine will target your core, arms and legs. Short and straight to the point, you can do it with no equipment at all.
        </p>
      </v-col>
    </v-row>

    <v-row class="align-center  textBG">
      <v-col cols="12">
        <h2 class="whiteCS--text text-center">EXCERCISES</h2>
      </v-col>
    </v-row>
    <v-row class="align-center  textBG2">
      <v-col cols="12">
        <h2 class="whiteCS--text text-center">WARM UP</h2>
      </v-col>
    </v-row>

    <v-list class="pa-0" color="#F8F9FA">
      <Exercise></Exercise>
      <Exercise></Exercise>
    </v-list>

    <v-row class="align-center  textBG2">
      <v-col cols="12">
        <h2 class="whiteCS--text text-center">MAIN EXCERCISES</h2>
      </v-col>
    </v-row>

    <v-list  class="pa-0" color="#F8F9FA">
      <Exercise></Exercise>
      <Exercise></Exercise>
    </v-list>

    <v-row class="align-center  textBG2">
      <v-col cols="12">
        <h2 class="whiteCS--text text-center">COOL DOWN</h2>
      </v-col>
    </v-row>

    <v-list  class="pa-0" color="#F8F9FA">
      <Exercise></Exercise>
      <Exercise></Exercise>
    </v-list>





  </v-container>
</template>

<script>
import Exercise from "@/components/Exercise";
export default {
name: "Routine",
  components: {Exercise}
}
</script>

<style scoped>
.bg{
  background-color: #E9ECEF;
}
.textBG{
  background-color: #212529;
}

.textBG2{
  background-color: #343A40;
}

.imgBorder {
  border-radius: 5%;
}
</style>
