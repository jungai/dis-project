<template>
  <div class="wrap">
    <FilterSearch class="mb-4"/>
    <b-row>
      <b-col md="8" lg="8">
        <MovieCards/>
      </b-col>
      <b-col md="4" lg="4">
        <Popular
          header="🍿 ยอดนิยม"
          />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Popular from '@/components/Popular/index'
import FilterSearch from '@/components/FilterSearch'
import MovieCards from '@/components/MovieCards'

export default {
  components: {
    MovieCards,
    FilterSearch,
    Popular
  },
  data: () => ({
    clickSignIn: false,
    clickSignIn2: false,
    showDismissibleAlert: true
  })
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/fade.scss';
@include fade();

.wrap {
  overflow-x: hidden
}
</style>
