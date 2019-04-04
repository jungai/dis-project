<template>
    <b-list-group class="wrap-items">
      <!-- <b-list-group-item
        v-for="val in rawData"
        :key="val">
        // @titile here
        {{ }}
      </b-list-group-item> -->
      <b-list-group-item>
        afasfag
      </b-list-group-item>
      <b-list-group-item>
        afasfag
      </b-list-group-item>
      <b-list-group-item>
        afasfag
      </b-list-group-item>
      <b-list-group-item>
        afasfag
      </b-list-group-item>
      <b-list-group-item>
        afasfag
      </b-list-group-item>
      <b-list-group-item>
        afasfag
      </b-list-group-item>
      <b-list-group-item>
        afasfag
      </b-list-group-item>

    </b-list-group>
</template>

<script>
export default {
  props: {
    rawData: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap-items {
  height: 220px;
  position: absolute;
  overflow: scroll;
  width: 100%;
  cursor: pointer;
}
</style>
