<template>
  <v-card :color="background" width="350">
    <v-card-text class="px-0 pb-0">
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col
            class="font-weight-bold big-text text-center"
            :style="primaryColor"
          >
            Celeb
          </v-col>
        </v-row>
        <v-row class="scrollable-row">
          <v-col cols="2">
            <v-btn
              small
              text
              tile
              :color="primary"
              class="small-text"
              style="border-bottom: 1px solid"
              >ALL</v-btn
            >
          </v-col>
          <v-col cols="2">
            <v-btn small text tile :color="third" class="small-text"
              >ACTOR</v-btn
            >
          </v-col>
          <v-col cols="3">
            <v-btn small text tile :color="third" class="small-text"
              >COMEDIAN</v-btn
            >
          </v-col>
          <v-col cols="2">
            <v-btn small text tile :color="third" class="small-text"
              >ARTIST</v-btn
            >
          </v-col>
          <v-col cols="2">
            <v-btn small text tile :color="third" class="small-text"
              >SPORT</v-btn
            >
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="10">
            <v-text-field
              placeholder="Search"
              prepend-inner-icon="mdi-magnify"
              outlined
              clearable
              dense
              :color="secondary"
              :background-color="secondary"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-list color="transparent" width="100%">
            <celeb-row v-for="i in 5" :key="'celeb_row_' + i"/>
          </v-list>
        </v-row>
        <v-row style="position: absolute; bottom: 0; width: 100%">
          <v-sheet elevation="4" width="100%">
            <v-row>
              <v-col cols="3" class="text-center"><v-btn icon large color="grey darken-2"><v-icon>mdi-home</v-icon></v-btn></v-col>
              <v-col cols="3" class="text-center"><v-btn icon large :color="primary"><v-icon>mdi-magnify</v-icon></v-btn></v-col>
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
import colorHelper from "../../mixins/colorHelper";
import CelebRow from '../CelebRow.vue';
export default {
  components: { CelebRow },
  name: "celeb-mock",
  mixins: [colorHelper],
};
</script>
<style lang="scss">
  @import "@/assets/scss/common.scss";
</style>