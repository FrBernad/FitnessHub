<template>
  <v-card>
    <v-card-title class="px-8">
      <span class="headline">{{title}}</span>
    </v-card-title>
    <v-card-text class="pb-0">
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="Routine name"
              required
              v-model="title"
              clearable
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea
              class="pa-0"
              light
              no-resize
              filled
              pb-0
              color="rgb(33, 37, 41)"
              background-color="rgb(248, 249, 250)"
              placeholder="Description"
              hide-details
            ></v-textarea>
          </v-col>
          <v-col
            cols="12"
            sm="6"
          >
            <v-select
              :items="['Categoria1', 'Categoria2', 'Categoria3', 'Categoria4']"
              label="Category"
              required
            ></v-select>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="#212529"
        text
        @click="routineClose"
      >
        Close
      </v-btn>
      <v-btn
        color="#212529"
        text
        @click="routineClose"
      >
        Create
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
name: "RoutineDetails",
  data() {
    return {
      title:'Routine name',
    }
  },
  methods:{
    routineClose(){
      this.$emit('routineClose')
    }
  }
}
</script>

<style scoped>

</style>
