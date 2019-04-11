<template>
  <div>
    <b-row >
        <b-col lg="4" md="4" class="d-none d-md-block pr-0">
          <b-img
            style="width:100%;padding:15px;"
            class="pr-0" height="360"
            :src="image" alt="Left image"></b-img>
        </b-col>
        <b-col lg="8" md="8" sm="12">
          <div>
              <iframe
                style="width:100%;padding:15px;"
                frameborder="0"
                height="360"
                :src="embed"></iframe>
          </div>
        </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    embed: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    }
  },
  mounted () {
  }
}
</script>
