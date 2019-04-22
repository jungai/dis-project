<template>
    <b-card no-body class="text-center p-2 ss">
      <button @click="logout" type="button" class="btn btn-warning text-white">Logout</button>
    </b-card>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('LoginOut', false)
      // window.location.reload()
    }
  }
}
</script>

<style lang="scss" scoped>
.ss {
  height: 236px;
  background-color: white;
  width: 100%;
  max-width: 220px;

  @media only screen and (max-width: 992px) {
    max-width: 100%;
  }
}
</style>
