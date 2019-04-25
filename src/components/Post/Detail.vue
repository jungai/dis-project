<template>
  <div v-html="review"></div>
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
