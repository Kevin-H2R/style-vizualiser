<template>
  <v-container fluid>
    <v-row>
      <v-col cols="9" class="pa-5">
        <v-row>
          <home-mock class="mr-3" />
          <celeb-mock class="mx-3" />
        </v-row>
      </v-col>
      <v-col cols="3" class="pa-0" style="height: 100vh">
        <v-sheet height="100%" elevation="4" class="pa-8">
          <v-list>
            <v-list-item-group v-model="selectedPalet" color="primary" v-on:change="changed()">
              <v-list-item  v-for="(palet, index) in $store.getters.palets" 
                :key="'palet_' + index">
                <v-list-item-content>
                  <v-col cols="2"><v-sheet rounded height="25px" :color="palet['1']"></v-sheet></v-col>
                  <v-col cols="2"><v-sheet rounded height="25px" :color="palet['2']"></v-sheet></v-col>
                  <v-col cols="2"><v-sheet rounded height="25px" :color="palet['3']"></v-sheet></v-col>
                  <v-col cols="2"><v-sheet rounded height="25px" :color="palet['4']"></v-sheet></v-col>
                  <v-col cols="2"><v-sheet rounded height="25px" :color="palet['5']"></v-sheet></v-col>
                  <v-divider vertical></v-divider>
                  <v-col cols="2"><v-sheet rounded height="25px" :color="palet['background']"></v-sheet></v-col>
                </v-list-item-content>
              </v-list-item>    
            </v-list-item-group>
          </v-list>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import CelebMock from './mocks/CelebMock.vue'
import HomeMock from "./mocks/HomeMock.vue"

export default {
  name: 'main-view',
  components: { HomeMock, CelebMock },
  methods: {
    changed() {
      this.$store.commit('setSelectedPalet', this.selectedPalet)
    }
  },
  data() {
    return {
      selectedPalet: null
    }
  }
}
</script>