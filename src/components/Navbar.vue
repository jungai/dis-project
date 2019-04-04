<template>
  <div>
    <b-navbar class="p-1 border border-secondary">
      <b-navbar-brand href="#">
        <img src="@/assets/moviereview.png" alt="wait for real" class="logo">
        Review2Free
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-item
          class="d-md-none"
          @click="$emit('did-click', !itClick)">
          <span class="h2">
            <i class="far fa-user-circle"></i>
          </span>
        </b-nav-item>
        <b-nav-item
        class="d-none d-md-block">
          <b-button  @click="$emit('did-click', true)" variant="link" class="mx-2">
              Sign in
          </b-button>
          <b-button  @click="$emit('did-click2', true)" variant="primary"  class="mx-2" >
              Sign up
          </b-button>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  props: {
    itClick: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.logo {
  height: 38px;
}
</style>
