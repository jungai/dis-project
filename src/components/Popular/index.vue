<template lang="html">
  <b-container >
    <b-row>
      <b-col>
        <h1 class="mb-3">{{ header }}</h1>
          <div
          v-for="(movie,index) in popular"
            :key="index">
            <b-media class="mb-5">
           <b-img slot="aside" :src="movie.image" width="130" height="80"/>
           <h5 class="mt-0"> {{ movie.movieName }}</h5>
             <span  class="claimedRight">{{ movie.description }}</span>
         </b-media>
           <!-- <hr class="my-4"> -->
          </div>

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
  }
}
</script>

<style lang="css">
.claimedRight {
    display:        block;
    height:          70px;
    overflow:       hidden;
    text-overflow:  ellipsis;
}
</style>
