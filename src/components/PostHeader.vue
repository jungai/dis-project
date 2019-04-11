<template>
  <div>
        <b-row >
            <b-col style="padding-right:0px;" lg="3" md="3" class="d-none d-md-block">
                 <b-img style="width:100%;padding:15px;" height="360" src="https://upload.wikimedia.org/wikipedia/en/8/85/Captain_Marvel_poster.jpg" alt="Left image"></b-img>
            </b-col>
            <b-col lg="9" md="9" sm="12">
                    <div>
                        <iframe style="width:100%;padding:15px;" frameborder="0" height="360" src=
                        "//www.youtube.com/embed/0LHxvxdRnYc"></iframe>
                    </div>
            </b-col>
        </b-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: function () {
    return {
      movies: [],
      paginatedMovies: [],
      nbPages: 0,
      nbRowPerPage: 4,
      currentPageIndex: 0
    }
  },
  created () {
    axios.get(`http://localhost:3000/reviews`)
      .then(response => {
      // JSON responses are automatically parsed.
        this.movies = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
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
    goprevious () {
      if ((this.currentPageIndex - 1) >= 0) {
        this.currentPageIndex = this.currentPageIndex - 1
      }
    },
    gonext () {
      if ((this.currentPageIndex + 1) <= (Math.ceil(Object.keys(this.movies).length / this.nbRowPerPage) - 1)) {
        this.currentPageIndex = this.currentPageIndex + 1
      }
    },
    fetchProducts () {
      {
        this.$http.get('http://localhost:3000/reviews').then((response) => {
          console.log(response.body)
          this.products = response.body
        })
      }
    }
  }
}
</script>

<style scoped>

</style>