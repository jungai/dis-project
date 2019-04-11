<template lang="html">
  <b-container fluid>
    <b-row>
      <b-col >
        <h1 class="my-3 py-2">{{ header }}</h1>
          <b-list-group flush class="mb-3">
            <b-list-group-item
              button
              v-for="(movie,index) in popular"
              :key="index"
              @click="justClick(index)">
               <h4> {{ movie.movieName }}</h4>
              <b-media
              vertical-align
              class="mt-2">
                <b-img slot="aside" :src="movie.image" width="130" height="80"/>
                <span  class="claimedRight d-md-none d-lg-block">{{ movie.description }}</span>
             </b-media>
             <span  class="claimedRight d-none d-md-block d-lg-none">{{ movie.description }}</span>
            </b-list-group-item>
          </b-list-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      required: true
    },
    popular: {
      type: Array,
      default: () => ([])
    }
  },
  data: () => ({
    didClick: false
  }),
  methods: {
    justClick (index) {
      this.didClick = !this.didClick
      console.log(index)
    }
  }
}
</script>

<style lang="scss" scoped>
.claimedRight {
    display:        block;
    height:          80px;
    overflow:       hidden;
    text-overflow:  ellipsis;
    padding: 10px
}
</style>
