<template>
    <b-card
    class="d-md-none"
    >
    <b-button class="button-login"  block variant="link">Log in</b-button>
    <b-button class="button-login"  block variant="primary">Register</b-button>

  </b-card>
</template>

<script>

export default {
  data: () => ({
    username: '',
    password: ''
  })
}
</script>

<style>

</style>
