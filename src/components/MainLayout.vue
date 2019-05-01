<template>
  <div class="wrap">
    <FilterSearch
      class="mb-4"
      @year="fromFilter($event)"
      @type="fromFilter($event)"
      @reset="reset"
      />
    <b-row>
      <b-col md="8" lg="8">
        <MovieCardsForFilter
          v-if="showFilterMovie"
          :movies="movieForFilter"/>
        <MovieCards
          v-else
          :movies="movies"/>
      </b-col>
      <b-col md="4" lg="4">
        <Popular
          header="🍿 ยอดนิยม"
          />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Popular from '@/components/Popular/index'
import FilterSearch from '@/components/FilterSearch'
import MovieCards from '@/components/MovieCards'
import MovieCardsForFilter from '@/components/MovieCardsForFilter'
import axios from 'axios'

export default {
  components: {
    MovieCards,
    FilterSearch,
    Popular,
    MovieCardsForFilter
  },
  created () {
    axios.get(`https://ez-json-server.herokuapp.com/reviews`)
      .then(response => {
      // JSON responses are automatically parsed.
        this.movies = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  data: () => ({
    clickSignIn: false,
    clickSignIn2: false,
    showDismissibleAlert: true,
    showFilterMovie: false,
    movies: [],
    movieForFilter: []
  }),
  methods: {
    reset () {
      this.movieForFilter = []
      this.showFilterMovie = false
    },
    fromFilter (value) {
      let test = this.movies
      if (value.year) {
        if (value.year === 'all') {
          test = test.filter(e => e)
        } else {
          test = test.filter(e => e.year === value.year)
        }
      }
      if (value.type) {
        if (value.type === 'all') {
          test = test.filter(e => e)
        } else {
          test = test.filter(e => e.type === value.type)
        }
      }
      this.showFilterMovie = true
      this.movieForFilter = test
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/fade.scss';
@include fade();

.wrap {
  overflow-x: hidden
}
</style>
