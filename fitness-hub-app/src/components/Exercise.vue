<template>

<v-dialog v-model="dialog" width="500px">

<template v-slot:activator="{ on, attrs }">
  <v-list-item class="elevation-1 listItem" v-bind="attrs" v-on="on">
    <v-list-item-content class="justify-center">
        <v-row>
          <v-col cols="8" class="d-flex align-center justify-start"><h3>Exercise 1</h3></v-col>
          <v-col cols="4" class="d-flex align-center justify-end"><h3>15</h3></v-col>
        </v-row>
    </v-list-item-content>
  </v-list-item>
</template>

  <v-card>
    <v-card-title>PRIVACY</v-card-title>
  </v-card>

</v-dialog>

</template>

<script>
export default {
name: "Exercise",
  data () {
    return {
      dialog: false,
    }
  },
}
</script>

<style scoped>
  .listItem{
    border-style: solid;
    border-color:rgba(33,37,41,1);
  }

</style>
