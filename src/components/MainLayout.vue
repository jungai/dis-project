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
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import ModalLogin from '@/components/ModalLogin'

export default {
  components: {
    Navbar,
    ModalLogin
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
