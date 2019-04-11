<template>
  <div id="app">
    <b-container fluid>
      <b-row>
        <b-col>
          <MainLayout/>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="12" lg="8">
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
import MainLayout from '@/components/MainLayout'
// import Test from '@/components/Popular'
export default {
  components: {
    MainLayout
    // Test
  },
  data: () => ({
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
</style>
