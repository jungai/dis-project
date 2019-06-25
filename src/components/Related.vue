<template lang="html">
  <b-container fluid
  v-if="related.length >1">
    <b-row>
      <b-col >
        <h1 class="header-text">{{ header }}</h1>
          <b-list-group flush class="mb-3">
            <b-list-group-item
              button
              v-for="(movie,index) in related"
              :key="index"
              @click="justClick(movie.id)">
               <h4> {{ movie.name }}</h4>
              <b-media
              vertical-align
              class="mt-2">
                <b-img slot="aside" :src="movie.image" width="130" height="80"/>
                <span  class="claimedRight">{{ movie.title }}</span>
             </b-media>
             <!-- <span  class="claimedRight d-none d-md-block d-lg-none">{{ movie.review }}</span> -->
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
    },
    movieReview: {
      type: Array,
      default: () => []
    }
  },
  created () {
    axios.get(`https://ez-json-server.herokuapp.com/reviews`)
      .then(response => {
      // JSON responses are automatically parsed.
        this.movies = response.data
        this.movieRelated()
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  data: () => ({
    didClick: false,
    movies: [],
    related: []
  }),
  methods: {
    justClick (index) {
      this.$router.push('/movie-review/' + index)
      // window.location.reload()
      // window.scrollTo(0, 0)
    },
    movieRelated () {
      try {
        this.related = this.movies.filter(movie => movie.type === this.movieReview[0].type &&
          movie.id !== this.movieReview.id)
        if (this.related.length > 2) {
          let rand = []
          rand[0] = Math.floor(Math.random() * this.related.length)
          rand[1] = Math.floor(Math.random() * this.related.length)
          rand[2] = Math.floor(Math.random() * this.related.length)
          for (var i = rand.length; i > 0; i--) {
            if (rand[0] === rand[1]) {
              rand[1] = Math.floor(Math.random() * this.related.length)
            } else if (rand[0] === rand[2]) {
              rand[2] = Math.floor(Math.random() * this.related.length)
            } else if (rand[1] === rand[2]) {
              rand[2] = Math.floor(Math.random() * this.related.length)
            }
          }
          let relatedRand = this.related.filter((movie,no) => {
            for (var i in rand) {
              if (no === rand[i]) {
                return movie
              }
            }
          })
          this.related = [...relatedRand]
        }
      } catch (e) {

      }
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
