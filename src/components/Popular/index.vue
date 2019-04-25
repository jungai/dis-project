<template lang="html">
  <b-container fluid>
    <b-row>
      <b-col >
        <h1 class="header-text">{{ header }}</h1>
          <b-list-group flush class="mb-3">
            <b-list-group-item
              button
              v-for="(movie,index) in popular"
              :key="index"
              @click="justClick(movie.id)">
               <h4> {{ movie.name }}</h4>
              <b-media
              vertical-align
              class="mt-2">
                <b-img slot="aside" :src="movie.image" width="130" height="80"/>
                <span  class="claimedRight d-md-none d-lg-block">{{ movie.review }}</span>
             </b-media>
             <span  class="claimedRight d-none d-md-block d-lg-none">{{ movie.review }}</span>
            </b-list-group-item>
          </b-list-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    header: {
      type: String,
      required: true
    }
    // popular: {
    //   type: Array,
    //   default: () => ([])
    // }
  },
  created () {
    axios.get(`http://localhost:3000/reviews`)
      .then(response => {
      // JSON responses are automatically parsed.
        this.movies = response.data
        this.randomPopular()
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  data: () => ({
    didClick: false,
    movies: [],
    popular: [],

  }),
  methods: {
    justClick (index) {
      this.$router.push('/movie-review/'+ index)
    },
    randomPopular() {
      let index = []
      index[0] = (Math.floor(Math.random() * 30))
      index[1] = (Math.floor(Math.random() * 30))
      index[2] = (Math.floor(Math.random() * 30))
      for (var i = index.length; i > 0; i--) {
        if (index[0]===index[1]) {
          index[1] = Math.floor(Math.random() * 30)
        }
        else if (index[0]===index[2]) {
            index[2] = Math.floor(Math.random() * 30)
        }
        else if (index[1]===index[2]) {
            index[2] = Math.floor(Math.random() * 30)
        }
      }
      this.popular = this.movies.filter(movie => {
        for (var i in index) {
          if (movie.id === index[i]) {
            return movie
          }

        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Kanit');

.header-text {
  font-family: 'Kanit', sans-serif;
}

.claimedRight {
    display:        block;
    height:          80px;
    overflow:       hidden;
    text-overflow:  ellipsis;
    padding: 10px
}
</style>
