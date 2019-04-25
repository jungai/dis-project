<template>
  <b-row>
      <b-col md="9" lg="9">
        <h1>
          {{ text }}
        </h1>
      </b-col>
      <b-col md="3" lg="3">
        <b-card
        border-variant="primary"
        header="คะแนนรีวิว"
        header-bg-variant="primary"
        header-text-variant="white"
        align="center"
        style="font-size:100%;"
      >
        <b-card-text style="font-size:200%;">{{ score }}</b-card-text>
      </b-card>
      </b-col>
    </b-row>

</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    score: {
      type: Number,
      default: ''
    }
  }
}
</script>

<style>
.card-body{
  padding: 10px;
}
</style>
