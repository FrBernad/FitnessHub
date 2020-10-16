<template>
  <v-card class="px-0 ma-8" color="rgb(248 249 250)" elevation="3">
    <v-row align="center" justify="space-between">
      <v-col cols="9" class="pt-0">
        <v-card-title>Favorite routines</v-card-title>
      </v-col>
    </v-row>
    <v-list color="#F8F9FA">
      <v-virtual-scroll height="372.5px" :items="routines" bench="0" item-height="120px">
        <template v-slot="{ item }">
            <RoutineCardProfile :routine-data="item"></RoutineCardProfile>
        </template>
      </v-virtual-scroll>
    </v-list>

  </v-card>
</template>

<script>
import RoutineCardProfile from "@/components/RoutineCardProfile";
export default {
name: "FavoriteProfile",
  components: {RoutineCardProfile},
  data(){
    return{
      routines:[{name:'Routine 1',owner:'Rampo',time:15,fav:true,rating:4},{name:'Routine 2',owner:'Frano',time:15,fav:true,rating:4},{name:'Routine 2',owner:'Frano',time:15,fav:true,rating:4},{name:'Routine 2',owner:'Frano',time:15,fav:true,rating:4},{name:'Routine 2',owner:'Frano',time:15,fav:true,rating:4}],
    }
  }
}

</script>

<style scoped>

</style>
