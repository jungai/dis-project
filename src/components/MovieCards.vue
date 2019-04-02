<template>
  <div>
    <div>
      <div class="reviewcard">
        <b-card-group deck>
            <b-card v-for="(movie,index) in currentPageMovies" :key="index" v-bind:img-src="movie.image" img-alt="Image" img-top>
              <h4 class="card-title">
                {{movie.name}}
              </h4>
              <b-card-text class="summary-content">
                {{movie.review}}
              </b-card-text>
              <div slot="footer">
                <b-btn variant="primary" block style="padding:5px;" >Read review</b-btn>
              </div>
            </b-card>
            <b-card v-for="index in lastPageClubs" :key="index" class="invisible_card" style="border:0;"/>
        </b-card-group>
      </div>
    </div>
    <ul class="pagination">
      <li class="page-item"><a class="page-link" @click="goto(1)">First</a></li>
      <li class="page-item" v-for="i in nbPages" :key="i"  @click="goto(i)" :class={active:currentPage(i)}><a class="page-link">{{i}}</a></li>
      <li class="page-item"><a class="page-link" @click="golast()">Last</a></li>
    </ul>
  </div>
</template>

<script>
import json from '../data/data.json'
export default {
  data: function () {
    return {
      movies: json,
      paginatedMovies: [],
      nbPages: 0,
      nbRowPerPage: 4,
      currentPageIndex: 0
    }
  },
  computed: {
    formattedMovies () {
      return this.movies.reduce((c, n, i) => {
        if (i % 4 === 0) c.push([])
        c[c.length - 1].push(n)
        return c
      }, [])
    },
    currentPageMovies () {
      this.createPages()

      return this.paginatedMovies[this.currentPageIndex]
    },
    lastPageClubs () {
      return 4 - (this.paginatedMovies[this.currentPageIndex]).length
    },
    movieImage () {
      return this.clubs.image
    }
  },
  methods: {
    currentPage (i) {
      return i - 1 === this.currentPageIndex
    },
    createPages () {
      let lengthAll = Object.keys(this.movies).length
      this.nbPages = 0
      for (let i = 0; i < lengthAll; i = i + this.nbRowPerPage) {
        this.paginatedMovies[this.nbPages] = this.movies.slice(
          i,
          i + this.nbRowPerPage
        )
        this.nbPages++
      }
    },
    goto (i) {
      this.currentPageIndex = i - 1
    },
    golast () {
      this.currentPageIndex = Math.ceil(Object.keys(this.movies).length / this.nbRowPerPage) - 1
    }
  }
}
</script>

<style>
.reviewcard{
  margin: 15px;
}
.card-pagination{
  display:flex;
  align-items: center;
  justify-content: center;
  padding:20px;
}
.pagination{
  display:flex;
  align-items: center;
  justify-content: center;
  padding:20px;
}
.page-index{
  margin-left:10px;
  width:15px;
  height:15px;
  border-radius:15px;
  background:#007bff
}
.active{
  /* width:20px;
  height:20px;
  border-radius:20px; */
}
.page-link{
  cursor:pointer;
}
.card-img-top{
  height: 280px !important;
}
.card{
  height: 600px;
}
.card-title{
  display: block;
  display: -webkit-box;
  max-width: 400px;
  margin: 0 auto;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.summary-content{
  display: block;
  display: -webkit-box;
  max-width: 400px;
  margin: 0 auto;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card-footer{
  padding : 10px;
}
</style>
