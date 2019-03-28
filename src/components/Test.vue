<template>
<div class="overflow-auto">
    
    <div
        v-for="(i, index) in Numcard"
        :key="i">
        <b-card
        :per-page="4"
        :id="i"
        v-if="i !== 3"
        title="Card Title"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        class="mb-2 reviewcard"
    >
        <b-card-text>
        {{ i }} Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>

        <b-button
            @click="testmethod" 
            variant="primary">Go somewhere</b-button>
        </b-card>
    </div>
    <div class="overflow-auto">
    <b-pagination-nav 
    :link-gen="linkGen" 
    :number-of-pages="numpage()" 
    use-router>
    </b-pagination-nav>
  </div>
</div>
</template>

<script>
export default {
  data:() => ({
      Numcard : [1,2,3,4,5,6,7,8,9],
      numpages : 1,
  }),
  methods : {
    testmethod(){
        this.va = this.va+1
    },
    numpage(){
        if(this.Numcard.length <= 5){
            return this.numpages
        }
        else{
            this.numpages = Math.ceil(this.Numcard.length / 5)
            return this.numpages
        }
    }
  }

}
</script>

<style>
.logo {
  height: 38px;
}
.reviewcard{
    margin: 20px;
}
</style>
