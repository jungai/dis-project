<template>
  <div>
    <Comment v-for="(li, index) in list.comments" :numberList="index + 1" :key="index" :msg="li.msg" :name="li.name"/>
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
      type: [Array, Object],
      default: () => ({})
    }
  }
}
</script>

<style>

</style>
