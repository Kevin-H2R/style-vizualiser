export default {
  methods: {
    getColorStyleAtIndex(index) {
      const palet = this.$store.getters.selectedPalet
      if (palet === null) {
        return ''
      }
      return 'color: ' + palet[index]
    },
    getColorAtIndex(index) {
      const palet = this.$store.getters.selectedPalet
      if (palet === null) {
        return '#FFFFFF'
      }
      return palet[index]
    },
    getStyleForRefs(element) {
      const ref = Object.keys(element.$refs)[0]
      if (ref === undefined) {
        return null
      }
      const styles = this.$store.getters.styles[ref]
      if (styles === undefined || styles === undefined) {
        return null
      }
      return 'color: ' + styles
    },
    selectElement(element) {
      this.$store.commit('selectElement', element)
    }
  },
  computed: {
    primaryColor(e) {
      const elementStyle = this.getStyleForRefs(e)
      if (elementStyle !== null) {
        return elementStyle
      }
      return this.getColorStyleAtIndex(1)
    },
    secondaryColor() {
      return this.getColorStyleAtIndex(2)
    },
    thirdColor() {
      return this.getColorStyleAtIndex(3)
    },
    fourthColor() {
      return this.getColorStyleAtIndex(3)
    },
    fifthColor() {
      return this.getColorStyleAtIndex(3)
    },
    background() {
      return this.getColorAtIndex('background')
    },
    primary() {
      return this.getColorAtIndex('1')
    },
    secondary() {
      return this.getColorAtIndex('2')
    },
    third() {
      return this.getColorAtIndex('3')
    },
    fourth() {
      return this.getColorAtIndex('4')
    },
    fifth() {
      return this.getColorAtIndex('5')
    }
  }
}