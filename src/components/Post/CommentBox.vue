<template>
  <div class="clearfix">
    <h2 class="text">💬 คอมเมนต์</h2>
    <b-form-textarea
      class="mb-2"
      v-model="text"
      placeholder="Enter something..."
      rows="3"
      max-rows="6"
    ></b-form-textarea>
    <b-button class="float-right" @click="post" variant="outline-primary text">แชร์</b-button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    list: {
      type: [Array, Object],
      default: () => ({})
    },
    isFetch: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      required: true
    }
  },
  data: () => ({
    text: ''
  }),
  methods: {
    async post () {
      const cloneObj = {
        ...this.list,
        comments: [ ...this.list.comments, { msg: this.text } ] }
      await axios.patch(`http://localhost:3000/reviews/${this.id}`, cloneObj)
      this.$emit('post', !this.isFetch)
      this.text = ''
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Kanit');

.text {
  font-family: 'Kanit', sans-serif;

}
</style>
