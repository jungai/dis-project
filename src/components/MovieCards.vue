<template>
  <div>
    <div>
      <div id="title"><p>🎬 รีวิวหนังล่าสุด</p></div>
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
                <b-btn variant="primary" block style="padding:5px;" >อ่านรีวิว</b-btn>
              </div>
            </b-card>
            <b-card v-for="index in lastPageClubs" :key="index" class="invisible_card" style="border:0;"/>
        </b-card-group>
      </div>
    </div>
    <ul class="pagination">
      <li class="page-item"><a class="page-link" @click="goprevious()">ก่อนหน้า</a></li>
      <li class="page-item" v-for="i in nbPages" :key="i"  @click="goto(i)" :class={active:currentPage(i)}><a class="page-link">{{i}}</a></li>
      <li class="page-item"><a class="page-link" @click="gonext()">ถัดไป</a></li>
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
    },
    goprevious (){
      if(0<=(this.currentPageIndex - 1)){
        this.currentPageIndex = this.currentPageIndex - 1
      }
    },
    gonext (){
      if((this.currentPageIndex + 1)<=(Math.ceil(Object.keys(this.movies).length / this.nbRowPerPage) - 1)){
        this.currentPageIndex = this.currentPageIndex + 1
      }
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
#title{
  font-size: 200%;
  margin-left: 1%;
}
</style>
