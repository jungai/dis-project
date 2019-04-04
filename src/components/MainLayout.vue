<template>
  <div>
    <Navbar
      :itClick="clickSignIn"
      @did-click="clickSignIn = $event"/>
    <FilterSearch/>
    <MovieCards/>
  </div>
</template>

<script>
import FilterSearch from '@/components/FilterSearch'
import Navbar from '@/components/Navbar'
import ModalLogin from '@/components/ModalLogin'
import MovieCards from '@/components/MovieCards'
export default {
  components: {
    Navbar,
    ModalLogin,
    MovieCards,
    FilterSearch
  },
  data: () => ({
    clickSignIn: false
  })
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/fade.scss';
@include fade();

.wrapp-all {
  position: relative;

  .a {
    position: relative;
  }

  .b {
    position: relative;
  }
}
</style>
