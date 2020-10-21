<template>
  <v-card class="pa-3">
    <v-row class="pa-0 align-center justify-center">
      <v-col cols="12" class="py-0 d-flex align-center justify-end">
        <v-btn icon @click="exerciseClose">
          <v-icon>mdi-close-circle-outline</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-card-title class="text-h4 font-weight-bold d-flex pt-0 justify-center">{{info.name}}</v-card-title>
    <v-row class="align-center justify-center">
      <v-col cols="6">
        <v-card-text class="text-h5  d-flex align-center justify-center font-weight-bold pa-0 ">PICTURE</v-card-text>
      </v-col>
      <v-col cols="6">
        <v-card-text class="text-h5  d-flex align-center justify-center font-weight-bold pa-0">VIDEO</v-card-text>
      </v-col>
    </v-row>
    <v-row class="align-center justify-center">
      <v-col cols="6" class="d-flex align-center justify-center">
        <v-img :src="imgUrl" contain max-height="200"></v-img>
      </v-col>
      <v-col cols="6" class="d-flex align-center justify-center">
        <v-btn :href="videoUrl" target="_blank" x-large icon color="rgb(173, 181, 189)">
          <v-icon x-large>mdi-play-circle</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="align-center justify-center">
      <v-col cols="12" class="pb-0 text-center">
        <v-card-text class="text-h5 font-weight-bold d-flex align-center justify-center pa-0">
          DESCRIPTION
        </v-card-text>
        <v-card-text>
          {{info.detail}}
        </v-card-text>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card-text v-if="info.repetitions" class="text-h5 font-weight-bold text-center pa-0">
          REPS: {{info.repetitions}}
        </v-card-text>
        <v-card-text v-else class="text-h5 font-weight-bold text-center pa-0">
          TIME: {{info.duration}}
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
  export default {
    name: "ExerciseInformation",
    props: ["info","cycleId","routineId"],
    data(){
      return {
        videoUrl: '',
        imgUrl: '',

      }
    },


    async created(){
      try{
        this.videoUrl = (await this.$store.dispatch('getVideo',{cycleId: this.cycleId,routineId: this.routineId,exerciseId: this.info.id})).results[0].url;
        this.imgUrl = (await this.$store.dispatch('getImage',{cycleId: this.cycleId,routineId: this.routineId,exerciseId: this.info.id})).results[0].url;

      }catch(e){
        console.log(e);
      }
    },

    methods: {
      exerciseClose() {
        this.$emit('exerciseClose')
      }
    },

  }

</script>

<style scoped>

</style>
