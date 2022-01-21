<template>
  <v-card :color="background" width="350">
    <v-card-text class="px-0 pb-0">
      <v-container fluid>
        <v-row align="center">
          <v-col cols="3" class="font-weight-bold big-text"
            :style="primaryColor" style="border-bottom: 2px solid">AJOA
            </v-col>
          <v-col cols="6" class="font-weight-bold" :style="secondaryColor">CelebShop</v-col>
          <v-col cols="3"  :style="secondaryColor">Login</v-col>
        </v-row>

        <v-row>
          <v-col class="pb-0 font-weight-bold" :style="thirdColor">New Celebrities</v-col>
          <v-col class="pb-0 small-text text-end" :style="thirdColor">View more</v-col>
        </v-row>
        <v-row class="scrollable-row">
          <v-col cols="5" class="pb-0"><v-sheet height="200" :color="secondary" rounded></v-sheet></v-col>
          <v-col cols="5" class="pb-0"><v-sheet height="200" :color="secondary" rounded></v-sheet></v-col>
          <v-col cols="5" class="pb-0"><v-sheet height="200" :color="secondary" rounded></v-sheet></v-col>
        </v-row>
        <v-row class="scrollable-row">
          <v-col cols="5" class="pt-0">
            <div class="smaller-text font-weight-light" :style="secondaryColor">Broadcaster</div>
            <div class="small-text" :style="secondaryColor">Broadcaster Ryu</div>
          </v-col>
          <v-col cols="5" class="pt-0">
            <div class="smaller-text font-weight-light" :style="secondaryColor">Broadcaster</div>
            <div class="small-text" :style="secondaryColor">Broadcaster Ryu</div>
          </v-col>
          <v-col cols="5" class="pt-0">
            <div class="smaller-text font-weight-light" :style="secondaryColor">Broadcaster</div>
            <div class="small-text" :style="secondaryColor">Broadcaster Ryu</div>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="pb-0 font-weight-bold" :style="thirdColor">Hot Celebrities</v-col>
          <v-col class="pb-0 small-text text-end" :style="thirdColor">View more</v-col>
        </v-row>
        <v-row class="scrollable-row" style="height: 150px;">
          <v-col cols="5" class="pb-0"><v-sheet height="200" :color="secondary" rounded></v-sheet></v-col>
          <v-col cols="5" class="pb-0"><v-sheet height="200" :color="secondary" rounded></v-sheet></v-col>
          <v-col cols="5" class="pb-0"><v-sheet height="200" :color="secondary" rounded></v-sheet></v-col>
        </v-row>

        <v-row style="position: absolute; bottom: 0; width: 100%">
          <v-sheet elevation="4" width="100%">
            <v-row>
              <v-col cols="3" class="text-center"><v-btn icon large :color="primary"><v-icon>mdi-home</v-icon></v-btn></v-col>
              <v-col cols="3" class="text-center"><v-btn icon large color="grey darken-2"><v-icon>mdi-magnify</v-icon></v-btn></v-col>
              <v-col cols="3" class="text-center"><v-btn icon large color="grey darken-2"><v-icon>mdi-bookmark</v-icon></v-btn></v-col>
              <v-col cols="3" class="text-center"><v-btn icon large color="grey darken-2"><v-icon>mdi-account</v-icon></v-btn></v-col>
            </v-row>
          </v-sheet>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
import colorHelper from "../../mixins/colorHelper"
export default {
    name: "home-mock",
    mixins: [colorHelper],
}
</script>
<style lang="scss">
@import '@/assets/scss/common.scss';
</style>