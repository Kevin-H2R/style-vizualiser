<template>
  <v-container fluid>
    <v-row>
      <v-col cols="9" class="pa-5">
        <v-row>
          <home-mock class="mr-3" />
          <celeb-mock class="mx-3" />
        </v-row>
      </v-col>
      <v-col
        cols="3"
        class="pa-0"
        style="position: fixed; right: 0; bottom: 0; top: 0"
      >
        <v-sheet height="100%" elevation="4" class="pa-8">
          <v-list>
            <v-list-item-group
              v-model="selectedPalet"
              color="primary"
              v-on:change="changed()"
            >
              <v-list-item
                v-for="(palet, index) in $store.getters.palets"
                :key="'palet_' + index"
              >
                <v-list-item-content>
                  <v-list-item-subtitle>{{
                    palet["name"]
                  }}</v-list-item-subtitle>
                  <v-col cols="2" class="pl-0"
                    ><v-sheet
                      rounded
                      height="25px"
                      :color="palet['1']"
                    ></v-sheet
                  ></v-col>
                  <v-col cols="2"
                    ><v-sheet
                      rounded
                      height="25px"
                      :color="palet['2']"
                    ></v-sheet
                  ></v-col>
                  <v-col cols="2"
                    ><v-sheet
                      rounded
                      height="25px"
                      :color="palet['3']"
                    ></v-sheet
                  ></v-col>
                  <v-col cols="2"
                    ><v-sheet
                      rounded
                      height="25px"
                      :color="palet['4']"
                    ></v-sheet
                  ></v-col>
                  <v-col cols="2"
                    ><v-sheet
                      rounded
                      height="25px"
                      :color="palet['5']"
                    ></v-sheet
                  ></v-col>
                  <v-divider vertical></v-divider>
                  <v-col cols="2"
                    ><v-sheet
                      rounded
                      height="25px"
                      :color="palet['background']"
                    ></v-sheet
                  ></v-col>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <v-divider class="my-5"></v-divider>
          <v-card>
            <v-card-text>
              <v-row>
                <v-col>{{ $store.getters.selectedElement }}</v-col>
                <v-col>
                  <v-dialog v-model="dialog" width="500">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn tile
                        :color="$store.getters.selectedElementColor"
                        v-bind="attrs"
                        v-on="on"
                      >
                        {{ $store.getters.styles[$store.getters.selectedElement] }}
                      </v-btn>
                    </template>

                    <v-card>
                      <v-card-title class="text-h5 grey lighten-2">
                        Privacy Policy
                      </v-card-title>
                      <v-card-text>
                        <v-color-picker
                          v-model="color"
                          dot-size="25"
                          swatches-max-height="200"
                        ></v-color-picker>
                      </v-card-text>
                      <v-divider></v-divider>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" text @click="setColorForSelectedElement()">
                          I accept
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import CelebMock from "./mocks/CelebMock.vue";
import HomeMock from "./mocks/HomeMock.vue";

export default {
  name: "main-view",
  components: { HomeMock, CelebMock },
  methods: {
    changed() {
      this.$store.commit("setSelectedPalet", this.selectedPalet);
    },
    setColorForSelectedElement() {
      this.$store.commit("setColorForSelectedElement", this.color.hex);
      this.dialog = false
    }
  },
  data() {
    return {
      selectedPalet: null,
      dialog: false,
      color: this.$store.getters.selectedElementColor
    };
  },
};
</script>