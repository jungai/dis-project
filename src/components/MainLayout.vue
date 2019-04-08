<template>
  <div class="wrap">
    <Navbar
      :itClick="clickSignIn"
      @did-click="clickSignIn = $event"
      @did-click2="clickSignIn2 = $event"/>
    <FilterSearch class="mb-4"/>
    <b-row class="pp">
      <b-col md="8" lg="8">
        <MovieCards/>
      </b-col>
      <b-col md="4" lg="4">
        <Popular
          header="😀 Popular"
          :popular="popularVote"/>
      </b-col>
    </b-row>
    <b-modal id="modal-1" title="BootstrapVue" v-model="clickSignIn">
      <Login/>
    </b-modal>
    <b-modal id="modal-1" title="BootstrapVue" v-model="clickSignIn2">
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
import ModalLogin from '@/components/ModalLogin'
import MovieCards from '@/components/MovieCards'
export default {
  components: {
    Navbar,
    ModalLogin,
    MovieCards,
    FilterSearch,
    Popular,
    Login,
    SignUp
  },
  data: () => ({
    clickSignIn: false,
    clickSignIn2: false,
    popularVote: [
      {
        image: 'https://lumiere-a.akamaihd.net/v1/images/homepage_avengersageofultron_hero_phase3_6c1f86f5.jpeg',
        movieName: 'The Avengers',
        description: 'Earths mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.'
      },
      {
        image: 'https://i.ytimg.com/vi/04k73SUkhXg/maxresdefault.jpg',
        movieName: 'Ralph breaks the internet',
        description: 'Six years after the events of "Wreck-It Ralph," Ralph and Vanellope, now friends, discover a wi-fi router in their arcade, leading them into a new adventure.'
      },
      {
        image: 'https://cdn3.movieweb.com/i/article/jmls4qMXpv7sB6kKATEkyaTDJfiiXd/798:50/Captain-Marvel-Movie-Set-Photos-Carol-Danvers-Brie.jpg',
        movieName: 'captain marvel',
        description: 'Carol Danvers becomes one of the universe s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/fade.scss';
@include fade();

.wrap {
  overflow-x: hidden
}
</style>
