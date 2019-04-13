<template>
    <b-list-group
      class="wrap-items"
      :class="[ 'is-overflow' ? isOverflow ]">
      <b-list-group-item
        v-for="val in rawData"
        :key="val">
        {{ val }}
      </b-list-group-item>
    </b-list-group>
</template>

<script>
export default {
  props: {
    rawData: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    isOverflow: false
  }),
  watch: {
    rawData (val) {
      // eslint-disable-next-line no-unneeded-ternary
      this.isOverflow = val.length > 4 ? true : false
      console.log('watch', this.isOverflow)
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap-items {
  height: 200px;
  position: absolute;
  width: 100%;
  cursor: pointer;
  overflow: scroll;

  &.is-overflow {
    overflow: scroll;
  }
  &.no-overflow {
    overflow: none;
  }
}
</style>
