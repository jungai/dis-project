<template>
  <p> {{ review }} </p>
</template>

<script>
export default {
  props: {
    review: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

</style>
