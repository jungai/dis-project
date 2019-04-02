<template>
  <div>
    <Navbar
      :itClick="clickSignIn"
      @did-click="clickSignIn = $event"/>
      <!-- @view should be here -->
    <transition
      name="fade">
        <ModalLogin
          v-if="clickSignIn"/>
    </transition>
    <MovieCards/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import ModalLogin from '@/components/ModalLogin'
import MovieCards from '@/components/MovieCards'
export default {
  components: {
    Navbar,
    ModalLogin,
    MovieCards,
  },
  data: () => ({
    clickSignIn: false
  })
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/fade.scss';
@include fade();
</style>
