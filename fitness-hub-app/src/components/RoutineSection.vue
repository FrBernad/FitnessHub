<template>
  <v-container fluid fill-height>
    <AddOverlay :is-on="addOverlay" @closeAddOverlay="addOverlay=false"></AddOverlay>
    <v-row align="center" justify="center">
      <v-col cols="12" lg="11">
        <v-card color="rgb(52, 58, 64)" class="pa-1">
          <v-card-title class="whiteCS--text d-flex align-center justify-center">
            <h1 class="text-lg-h4 text-md-h5 text-h6 font-weight-bold ">{{title}}</h1>
          </v-card-title>

          <v-card color="rgb(73, 80, 87)" class="mx-2 mb-2 py-1">

            <v-virtual-scroll height="250px" :items="exercises" bench="0" item-height="50px">

              <template v-slot="{ item }">
                <v-list-item :key="item" >
                  <v-list-item-content>
                    <v-card color="rgb(248, 249, 250)">
                      <EditOverlay :is-on="editOverlay" @closeEditOverlay="editOverlay=false"></EditOverlay>
                      <v-row>
                        <v-col class="py-0 d-flex align-center" cols="10">
                          <span class="pa-2 text-subtitle-2">{{item}}</span>
                        </v-col>
                        <v-col class="py-0 d-flex align-center" cols="2" v-if="canEdit">
                          <v-btn icon small color="black" @click="editOverlay=true">
                            <v-icon small>mdi-pencil</v-icon>
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-list-item-content>
                </v-list-item>
              </template>

            </v-virtual-scroll>

            <v-row align="center" justify="space-around" class="py-2">
              <v-col cols="5">
                <v-btn large width="80%" color="rgb(52, 58, 64)" @click="canEdit=!canEdit">
                  <v-row justify="space-around">
                    <span class="whiteCS--text">Edit</span>
                    <v-icon right color="rgb(248, 249, 250)">
                      mdi-pencil
                    </v-icon>
                  </v-row>
                </v-btn>
              </v-col>
              <v-col cols="5" class="d-flex align-center justify-end">
                <v-btn @click="addOverlay=true" large width="80%" color="rgb(52, 58, 64)">
                  <v-row justify="space-around">
                    <span class="whiteCS--text">Add</span>
                    <v-icon right color="rgb(248, 249, 250)">
                      mdi-plus-thick
                    </v-icon>
                  </v-row>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import AddOverlay from "./AddOverlay";
  import EditOverlay from "./EditOverlay";

  export default {
    name: "RoutineSection",
    components: {AddOverlay, EditOverlay},
    props: {
      title: {
        type: String
      }
    },
    data() {
      return {
        addOverlay: false,
        editOverlay: false,
        canEdit: false,
        exercises: ["Bench Press", "Inchworms", "Burpies","Bench Press", "Inchworms", "Burpies","Bench Press", "Inchworms", "Burpies"]
      }
    },
  }
</script>

