<template>
    <b-list-group
      class="wrap-items"
      :class="[ isOverflow ? isOverflowClass : notOverFlowClass ]">
        <b-list-group-item
          v-for="item in items"
          :key="item"
          @click="$emit('did-click', item)">
          {{item}}
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
  mounted () {
    this.items = this.rawData
    // eslint-disable-next-line no-unneeded-ternary
    this.isOverflow = this.rawData.length > 4 ? true : false
  },
  data: () => ({
    selected: null,
    isOverflow: false,
    isOverflowClass: 'is-overflow',
    notOverFlowClass: 'no-overflow',
    items: []
  })
}
</script>

<style lang="scss" scoped>
.wrap-items {
  height: 200px;
  position: absolute;
  width: 100%;
  cursor: pointer;

  &.is-overflow {
    overflow: scroll;
  }
  &.no-overflow {
    overflow: none;
  }
}
</style>
