<template>
    <b-list-group
      class="wrap-items"
      :class="[ isOverflow ? isOverflowClass : notOverFlowClass ]">
        <b-list-group-item
          v-for="val in movieTitle"
          :key="val.id">
          <router-link class="text-secondary text-decoration-none" :to="{ path: `/movie-review/${val.id}` }">
          {{ val.title }}
          </router-link>
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
    isOverflow: false,
    isOverflowClass: 'is-overflow',
    notOverFlowClass: 'no-overflow',
    movieTitle: []
  }),
  watch: {
    rawData (val) {
      this.movieTitle = val.map(v => ({ title: v.name, id: v.id }))
      // eslint-disable-next-line no-unneeded-ternary
      this.isOverflow = val.length > 4 ? true : false
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
  // overflow: none;

  &.is-overflow {
    overflow: scroll;
  }
  &.no-overflow {
    overflow: none;
  }
}
</style>
