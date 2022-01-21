<template>
  <v-container fluid>
    <v-row>
      <v-col cols="9" class="pa-5">
        <v-row>
          <home-mock class="mr-3" />
          <celeb-mock class="mx-3" />
        </v-row>
        <v-divider class="my-16"/>
        <v-row justify="center" class="mb-5">
          <div class="text-h2">Logo</div>
        </v-row>
        <v-row>
          <v-col class="flex-shrink-1 flex-grow-0"><v-img src="@/assets/images/1.jpg" width="150"></v-img></v-col>
          <v-col class="flex-shrink-1 flex-grow-0"><v-img src="@/assets/images/2.jpg" width="150"></v-img></v-col>
          <v-col class="flex-shrink-1 flex-grow-0"><v-img src="@/assets/images/3.jpg" width="150"></v-img></v-col>
          <v-col class="flex-shrink-1 flex-grow-0"><v-img src="@/assets/images/4.jpg" width="150"></v-img></v-col>
          <v-col class="flex-shrink-1 flex-grow-0"><v-img src="@/assets/images/5.jpg" width="150"></v-img></v-col>
          <v-col class="flex-shrink-1 flex-grow-0"><v-img src="@/assets/images/6.jpg" width="150"></v-img></v-col>
          <v-col class="flex-shrink-1 flex-grow-0"><v-img src="@/assets/images/7.jpg" width="150"></v-img></v-col>
          <v-col class="flex-shrink-1 flex-grow-0"><v-img src="@/assets/images/8.jpg" width="150"></v-img></v-col>
          <v-col class="flex-shrink-1 flex-grow-0"><v-img src="@/assets/images/9.jpg" width="150"></v-img></v-col>
          <v-col class="flex-shrink-1 flex-grow-0"><v-img src="@/assets/images/10.jpg" width="150"></v-img></v-col>
          <v-col class="flex-shrink-1 flex-grow-0"><v-img src="@/assets/images/11.jpg" width="150"></v-img></v-col>
          <v-col class="flex-shrink-1 flex-grow-0"><v-img src="@/assets/images/12.jpg" width="150"></v-img></v-col>
          <v-col class="flex-shrink-1 flex-grow-0"><v-img src="@/assets/images/13.jpg" width="150"></v-img></v-col>
        </v-row>
      </v-col>
      <v-col cols="3" class="pa-0" style="position: absolute; right: 0; bottom: 0; top: 0">
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