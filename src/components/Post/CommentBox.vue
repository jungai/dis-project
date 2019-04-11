<template>
  <div>
    <h2>Comment</h2>
    <b-form-textarea
      v-model="text"
      placeholder="Enter something..."
      rows="3"
      max-rows="6"
    ></b-form-textarea>
    <b-button @click="post" variant="outline-primary">Button</b-button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    list: {
      type: Array,
      default: () => {}
    },
    isFetch: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    text: ''
  }),
  methods: {
    async post () {
      // console.log('before new msg', this.list[0])
      const cloneObj = {
        ...this.list[0],
        comments: [ ...this.list[0].comments, { msg: this.text } ] }
      console.log('clone', cloneObj)
      await axios.patch('http://localhost:3000/reviews/1', cloneObj)
      this.$emit('post', !this.isFetch)
      this.text = ''
    }
  }
}
</script>

<style>

</style>
