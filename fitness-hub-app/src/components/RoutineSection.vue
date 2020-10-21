<template>
  <v-container fluid fill-height>
    <v-row class="align-center justify-center">
      <v-col cols="12" lg="11">
        <v-card color="rgb(52, 58, 64)" class="pa-1">
          <v-card-title class="whiteCS--text d-flex align-center justify-center">
            <h1 class="text-lg-h4 text-md-h5 text-h6 font-weight-bold ">{{title}}</h1>
          </v-card-title>

          <v-card color="rgb(73, 80, 87)" class="mx-2 mb-2 py-1">

            <v-virtual-scroll height="250px" :items="exercises" bench="0" item-height="50px">
              <template v-slot="{item,index}">
                <v-fade-transition appear>
                  <v-list-item :key="index">
                    <v-list-item-content>
                      <v-card color="rgb(248, 249, 250)" class="px-3">
                        <v-row>
                          <v-dialog v-model="canEditElem" persistent width="500px">
                            <EditDialog @exerciseEditClose="canEditElem=false" :exercise="item"></EditDialog>
                          </v-dialog>
                          <v-col class="py-0 d-flex align-center" cols="8">
                            <span class="pa-2 text-subtitle-2">{{item.name}}</span>
                          </v-col>
                          <v-fade-transition appear>
                            <v-col class="py-0 d-flex align-center justify-end" cols="2" v-if="canEdit">
                              <v-btn icon small color="black" @click="canEditElem=true">
                                <v-icon small>mdi-pencil</v-icon>
                              </v-btn>
                            </v-col>
                          </v-fade-transition>
                          <v-fade-transition>
                            <v-col class="py-0 d-flex align-center justify-end" cols="2" v-if="canEdit">
                              <v-btn icon small color="black" @click="removeExercise(index)">
                                <v-icon small>mdi-trash-can-outline</v-icon>
                              </v-btn>
                            </v-col>
                          </v-fade-transition>
                        </v-row>
                      </v-card>
                    </v-list-item-content>
                  </v-list-item>
                </v-fade-transition>
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
                <v-dialog v-model="canAdd" persistent width="500px">
                  <AddDialog @exerciseAddClose="canAdd=false" :add-to="section"></AddDialog>
                </v-dialog>
                <v-btn @click="canAdd=true" large width="80%" color="rgb(52, 58, 64)">
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
  import AddDialog from "../components/AddDialog";
  import EditDialog from "../components/EditDialog";

  export default {
    name: "RoutineSection",
    components: {AddDialog, EditDialog},
    props: {
      title: {
        type: String
      },
      section: {
        type: String
      }
    },
    data() {
      return {
        editOverlay: false,
        canEdit: false,
        canEditElem: false,
        canAdd: false,
      }
    },
    methods: {
      removeExercise(index) {
        this.$store.commit(`routines/deleteFrom${this.section}`, {index: index})
      }
    },
    computed: {
      exercises() {
        return this.$store.getters[`routines/${this.section}`]
      }
    }
  }
</script>

