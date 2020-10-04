<template>
  <v-container fluid fill-height class="pa-0 bg">
    <v-row justify="center" class="align-self-start fill-height">
      <v-col justify="center" cols="8">
        <v-card class="fill-height" color="rgb(233, 236, 239)" dark>
          <v-img height="25%" src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"></v-img>
          <v-col style="position:relative">
            <v-avatar size="180" style="position:absolute; top: -100px" class="ml-6 elevation-5">
              <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
            </v-avatar>
          </v-col>
          <v-col justify="center" align="left" offset-md="3">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="black--text">Marcus Obrien</v-list-item-title>
                <v-list-item-title class="black--text">Age: 20</v-list-item-title>
                <v-list-item-title class="black--text">Country: Argentina</v-list-item-title>

              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col justify="center" align="left">
            <v-container fluid>
              <v-textarea
                label="Bio"
                outlined
                rows="4"
                row-height="15"
                no-resize
                counter
                :rules="rules"
                :value="value"
              ></v-textarea>
            </v-container>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Profile",
  data: () => ({
    rules: [v => v.length <= 100 || 'Max 100 characters'],
    value:'Eras assimilant in tolosa! Core, mystery, and vision. All children like shreded chocolates in orange juice and garlic. Dimension is not one in chaos, the kingdom, or private places, but everywhere..' ,
  }),
}
</script>

<style>
.bg {
  background-color: rgb(52, 58, 64);
}
</style>


