<template>
  <div>
    <Title :text="data.title"/>
    <Detail :reviews="data.review"/>
  </div>
</template>

<script>
import Title from '@/components/Post/Title'
import Detail from '@/components/Post/Detail'
import axios from 'axios'

export default {
  components: {
    Title,
    Detail
  },
  async created () {
    try {
      const { data } = await axios.get('http://localhost:3000/reviews')
      console.log(data[0])
      this.data = data[0]
    } catch (error) {
    }
  },
  data: () => ({
    data: []
  })
}
</script>

<style>

</style>
