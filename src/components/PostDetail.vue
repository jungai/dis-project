<template>
  <div>
    <b-row>
      <b-col md="2" lg="2"></b-col>
      <b-col md="8" lg="8" style="padding-left:0;padding-right:0;padding-top:2%;border-left:solid 1px #e3e8ef;border-right:solid 1px #e3e8ef;">
        <Title style="padding-left:5%;" :text="data.title"/>
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
        <Popular style="padding:5%;padding-top:2%;padding-bottom:2%;border-bottom:solid 1px #e3e8ef;"
          header="Popular"
          :popular="popularVote"/>
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
import Popular from '@/components/Popular/index'
import CommentList from '@/components/Post/CommentList'
export default {
  components: {
    Title,
    Detail,
    PostHeader,
    Popular,
    CommentBox,
    CommentList
  },
  watch: {
    async isFetch () {
      const { data } = await axios.get(`http://localhost:3000/reviews/${this.path}`)
      this.data = data
    }
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
    data: [],
    popularVote: [
      {
        image: 'https://lumiere-a.akamaihd.net/v1/images/homepage_avengersageofultron_hero_phase3_6c1f86f5.jpeg',
        movieName: 'The Avengers',
        description: 'ฮีโร่ผู้ทรงพลังที่สุดในโลกต้องมารวมกันและเรียนรู้ที่จะต่อสู้เป็นทีมหากพวกเขาจะหยุดโลกิที่ซุกซนและกองทัพมนุษย์ต่างดาวของเขาจากการกดขี่มนุษย์.'
      },
      {
        image: 'https://i.ytimg.com/vi/04k73SUkhXg/maxresdefault.jpg',
        movieName: 'Ralph breaks the internet',
        description: 'หกปีหลังจากเหตุการณ์ "Wreck-It Ralph" Ralph และ Vanellope ตอนนี้เพื่อน ๆ ค้นพบเราเตอร์ Wi-Fi ในอาร์เคดของพวกเขานำพวกเขาไปสู่การผจญภัยครั้งใหม่'
      },
      {
        image: 'https://cdn3.movieweb.com/i/article/jmls4qMXpv7sB6kKATEkyaTDJfiiXd/798:50/Captain-Marvel-Movie-Set-Photos-Carol-Danvers-Brie.jpg',
        movieName: 'captain marvel',
        description: 'แครอลแดนเวอร์กลายเป็นหนึ่งในวีรบุรุษที่ทรงพลังที่สุดของจักรวาลเมื่อโลกถูกจับได้กลางสงครามกาแล็กซี่ระหว่างสองเผ่าพันธุ์มนุษย์ต่างดาว'
      }
    ]
  })
}
</script>

<style>

</style>
