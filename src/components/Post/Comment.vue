<template>
  <b-card
    title="Card Title"
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      {{ msg }}
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

</style>
