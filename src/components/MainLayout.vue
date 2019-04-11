<template>
  <div class="wrap">
    <!-- <Navbar
      :itClick="clickSignIn"
      @asdas="clickSignIn2 = $event"
      @did-click="clickSignIn = $event"/> -->
    <FilterSearch class="mb-4"/>
    <b-row>
      <b-col md="8" lg="8">
        <MovieCards/>
      </b-col>
      <b-col md="4" lg="4">
        <Popular
          header="😀 Popular"
          :popular="popularVote"/>
      </b-col>
    </b-row>
    <b-modal class="modal-title" hide-footer title="เข้าสู่ระบบ" v-model="clickSignIn">
      <Login/>
    </b-modal>
    <b-modal class="modal-title" hide-footer title="สมัครสมาชิก" v-model="clickSignIn2">
      <SignUp/>
    </b-modal>
  </div>
</template>

<script>
import SignUp from '@/components/SignUp'
import Login from '@/components/Login'
import Popular from '@/components/Popular/index'
import FilterSearch from '@/components/FilterSearch'
import Navbar from '@/components/Navbar'
import MovieCards from '@/components/MovieCards'
export default {
  components: {
    Navbar,
    MovieCards,
    FilterSearch,
    Popular,
    Login,
    SignUp
  },
  data: () => ({
    clickSignIn: false,
    clickSignIn2: false,
    showDismissibleAlert: true,
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

<style lang="scss" scoped>
@import '@/styles/mixins/fade.scss';
@import url('https://fonts.googleapis.com/css?family=Kanit');
@include fade();

.modal-title {
  font-family: 'Kanit', sans-serif;
}

.wrap {
  overflow-x: hidden
}
</style>
