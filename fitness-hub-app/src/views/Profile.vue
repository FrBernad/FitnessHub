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
          <v-list-item color="rgba(0, 0, 0, .4)">
            <v-list-item-content>
              <v-list-item-title class="title">Marcus Obrien</v-list-item-title>
              <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Profile"
}
</script>

<style>
.bg {
  background-color: rgb(52, 58, 64);
}
</style>


