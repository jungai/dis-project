<template>
  <p> {{reviews }} </p>
</template>

<script>
export default {
  props: {
    reviews: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

</style>
