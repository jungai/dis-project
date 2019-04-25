<template>
  <b-card
    :header="num"
    :footer="footer"
    tag="article"
    class="mb-4"
    header-text-variant="white"
    header-bg-variant="info"
    footer-bg-variant="transparent"
  >
    <!-- <b-card-text>
      ความคิดเห็นที่ {{ numberList }}
    </b-card-text> -->
    <!-- <hr/> -->
    <b-card-text>
      {{ msg }}
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: ''
    },
    cardTitle: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    numberList: {
      type: Number
    }
  },
  computed: {
    num () {
      return `ความคิดเห็นที่ ${this.numberList}`
    },
    footer () {
      return `✏️ชื่อผู้ใช้งาน: ${this.name}`
    }
  }
}
</script>

<style>

</style>
