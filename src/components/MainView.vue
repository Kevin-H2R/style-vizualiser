<template>
  <v-container fluid>
    <v-row>
      <v-col cols="9" class="pa-5">
        <v-row>
          <home-mock />
        </v-row>
      </v-col>
      <v-col cols="3" class="pa-0" style="height: 100vh">
        <v-sheet height="100%" elevation="4" class="pa-8">
          <v-row v-for="(palet, index) in $store.getters.palets" :key="'palet_' + index"
          style="border-bottom: 1px solid grey">
            <v-col cols="2"><v-sheet rounded height="25px" :color="palet['1']"></v-sheet></v-col>
            <v-col cols="2"><v-sheet rounded height="25px" :color="palet['2']"></v-sheet></v-col>
            <v-col cols="2"><v-sheet rounded height="25px" :color="palet['3']"></v-sheet></v-col>
            <v-col cols="2"><v-sheet rounded height="25px" :color="palet['4']"></v-sheet></v-col>
            <v-col cols="2"><v-sheet rounded height="25px" :color="palet['5']"></v-sheet></v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import HomeMock from "./mocks/HomeMock.vue"

export default {
  name: 'main-view',
  components: { HomeMock }
}
</script>