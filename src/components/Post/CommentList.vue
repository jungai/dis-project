<template>
  <div>
    <Comment v-for="(li, index) in list[0].comments" :key="index" :msg="li.msg"/>
  </div>
</template>

<script>
import Comment from '@/components/Post/Comment'

export default {
  components: {
    Comment
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>

</style>
