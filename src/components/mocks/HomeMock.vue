<template>
  <v-card>
    <v-card-text class="px-0 pb-0">
      <v-container fluid>
        <v-row>
          <v-col cols="3" class="text-decoration-underline font-weight-bold"
            :style="getColorFor('ajoa-button')" @click="setColorFor('ajoa-button')">AJOA</v-col>
          <v-col cols="6" class="font-weight-bold">CelebShop</v-col>
          <v-col cols="3">Login</v-col>
        </v-row>

        <v-row>
          <v-col class="pb-0 font-weight-bold">New Celebrities</v-col>
          <v-col class="pb-0 small-text text-end">View more</v-col>
        </v-row>
        <v-row class="scrollable-row">
          <v-col cols="5" class="pb-0"><v-sheet height="200" color="grey"></v-sheet></v-col>
          <v-col cols="5" class="pb-0"><v-sheet height="200" color="grey"></v-sheet></v-col>
          <v-col cols="5" class="pb-0"><v-sheet height="200" color="grey"></v-sheet></v-col>
        </v-row>
        <v-row class="scrollable-row">
          <v-col cols="5" class="pt-0">
            <div class="smaller-text font-weight-light">Broadcaster</div>
            <div class="small-text">Broadcaster Ryu</div>
          </v-col>
          <v-col cols="5" class="pt-0">
            <div class="smaller-text font-weight-light">Broadcaster</div>
            <div class="small-text">Broadcaster Ryu</div>
          </v-col>
          <v-col cols="5" class="pt-0">
            <div class="smaller-text font-weight-light">Broadcaster</div>
            <div class="small-text">Broadcaster Ryu</div>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="pb-0 font-weight-bold">Hot Celebrities</v-col>
          <v-col class="pb-0 small-text text-end">View more</v-col>
        </v-row>
        <v-row class="scrollable-row" style="height: 150px;">
          <v-col cols="5" class="pb-0"><v-sheet height="200" color="grey"></v-sheet></v-col>
          <v-col cols="5" class="pb-0"><v-sheet height="200" color="grey"></v-sheet></v-col>
          <v-col cols="5" class="pb-0"><v-sheet height="200" color="grey"></v-sheet></v-col>
        </v-row>

        <v-row>
          <v-sheet elevation="4" width="100%">
            <v-row>
            <v-col cols="3" class="text-center"><v-btn icon large><v-icon>mdi-home</v-icon></v-btn></v-col>
            <v-col cols="3" class="text-center"><v-btn icon large><v-icon>mdi-magnify</v-icon></v-btn></v-col>
            <v-col cols="3" class="text-center"><v-btn icon large><v-icon>mdi-bookmark</v-icon></v-btn></v-col>
            <v-col cols="3" class="text-center"><v-btn icon large><v-icon>mdi-account</v-icon></v-btn></v-col>
            </v-row>
          </v-sheet>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
    name: "home-mock",
    methods: {
      getColorFor(id) {
        const color = this.$store.getters.styles[id]
        if (color === null || color === undefined) return ''
        return "color: " + color
      },
      setColorFor(id) {
        console.log('CLICKED')
        this.$store.commit('setColorFor', {id: id, color: '#00FF00'})
      }
    }
}
</script>
<style lang="scss">
.scrollable-row{
  overflow: hidden;
  flex-wrap: nowrap !important;
}
.small-text {
  font-size: 0.8em;
}
.smaller-text {
  font-size: 0.6em;
}
</style>