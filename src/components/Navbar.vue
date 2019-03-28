<template>
  <div>
    <b-navbar class="p-1 border border-secondary">
      <b-navbar-brand href="#">
        <img src="@/assets/mike.png" alt="wait for real" class="logo">
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-item
          @click="$emit('did-click', !itClick)">
          <span class="h2">
            <i class="far fa-user-circle"></i>
          </span>
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
