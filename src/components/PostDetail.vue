<template>
  <div class="mt-3 wrap">
    <b-row>
      <b-col md="2" lg="2"></b-col>
      <b-col md="8" lg="8" style="padding-left:0;padding-right:0;padding-top:2%;border-left:solid 1px #e3e8ef;border-right:solid 1px #e3e8ef; border-top:solid 1px #e3e8ef;">
        <Title style="padding-left:5%;padding-right:5%;" :text="data.title" :score="data.score"/>
        <PostHeader style="padding-left:5%;padding-right:5%;border-bottom:solid 1px #e3e8ef;"
          :image="data.image"
          :embed="data.embed"/>
        <Detail :review="data.review" style="padding:5%;border-bottom:solid 1px #e3e8ef;"/>
        <CommentBox style="padding:5%;padding-top:2%;padding-bottom:2%;"
          :id="this.$route.params.id"
          :isFetch="isFetch"
          :list="data"
          @post="postData"/>
        <CommentList :list="data" style="padding:5%;padding-top:0;padding-bottom:2%;border-bottom:solid 1px #e3e8ef;"/>
        <Related style="padding:5%;padding-top:2%;padding-bottom:2%;border-bottom:solid 1px #e3e8ef;"
          header="รีวิวที่เกี่ยวข้อง"
          :movieReview="[data]"
          />
      </b-col>
      <b-col md="2" lg="2">
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Title from '@/components/Post/Title'
import CommentBox from '@/components/Post/CommentBox'
import PostHeader from '@/components/PostHeader'
import Detail from '@/components/Post/Detail'
import axios from 'axios'
import Related from '@/components/Related'
import CommentList from '@/components/Post/CommentList'
export default {
  components: {
    Title,
    Detail,
    PostHeader,
    Related,
    CommentBox,
    CommentList
  },
  watch: {
    async isFetch () {
      const { data } = await axios.get(`http://localhost:3000/reviews/${this.path}`)
      this.data = data
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  async created () {
    this.path = this.$route.params.id
    try {
      const { data } = await axios.get(`http://localhost:3000/reviews/${this.path}`)
      this.data = data
    } catch (error) {
    }
  },
  methods: {
    postData (val) {
      this.isFetch = val
    }
  },
  data: () => ({
    path: null,
    isFetch: false,
    data: []
  })
}
</script>

<style>
  .wrap {
    overflow-x: hidden;
  }
</style>
