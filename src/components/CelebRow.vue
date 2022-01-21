<template>
  <v-list-item>
    <v-list-item-avatar :color="primary">
      <v-skeleton-loader type="avatar" />
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-subtitle :style="secondaryColor" class="smaller-text"
        >Broadcaster</v-list-item-subtitle
      >
      <v-list-item-title :style="secondaryColor" class="small-text"
        >Broadcaster</v-list-item-title
      >
    </v-list-item-content>
    <v-list-item-icon>
      <v-btn :color="primary">
        <v-icon :color="secondary">mdi-bookmark</v-icon>
      </v-btn>
    </v-list-item-icon>
  </v-list-item>
</template>
<script>
import colorHelper from '@/mixins/colorHelper'
export default {
  name: "celeb-row",
  mixins: [colorHelper]
};
</script>
<style lang="scss">
@import "@/assets/scss/common.scss";
</style>