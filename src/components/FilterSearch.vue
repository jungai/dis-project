<template>
  <div class="search-n-filter">
    <div class="hero-section"/>
    <div class="filter-box-item d-flex-row justify-content-center">
      <b-row class="justify-content-center">
        <b-col lg="8">
          <ul class="list-text d-flex justify-content-around justify-content-lg-around p-0">
            <li
              :class=" isActive ? 'active-tab' : null"
              @click="reset">ค้นหา</li>
            <li
              :class=" !isActive ? 'active-tab' : null"
              @click=" isActive = false">กรองข้อมูล</li>
          </ul>
        </b-col>
      </b-row>
      <div
        class="p-3 mt-5 d-lg-flex justify-content-lg-center"
        v-if="isActive">
        <b-col lg="6" md="12" sm="12">
          <b-input-group>
            <span class="prepend-icon"><i class="fas fa-search"></i></span>
            <b-form-input
              v-model="search"
              placeholder="ค้นหาหนังที่ต้องการ"
              @input="searchByMovieName"></b-form-input>
          </b-input-group>
          <div
            class="show-selected"
            v-if="search !== ''">
            <ListGroup
              :rawData="dataForSearch"/>
            </div>
        </b-col>
      </div>
      <b-row class="justify-content-center p-3" v-if="!isActive">
        <b-col lg="6">
          <b-form-select class="mb-4" v-model="selectedYear" :options="years">
            <template slot="first">
              <option :value="null" disabled>-- เลือกปี --</option>
            </template>
          </b-form-select>
            <b-form-select v-model="selectedType" :options="types">
              <template slot="first">
                <option :value="null" disabled>-- เลือกชนิดของหนัง --</option>
              </template>
            </b-form-select>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ListGroup from '@/components/List/ListGroup'

export default {
  components: {
    ListGroup
  },
  watch: {
    selectedYear (val) {
      this.fromList(1, val)
    },
    selectedType (val) {
      this.fromList(2, val)
    }
  },
  async mounted () {
    // fetch data here
    const { data: years } = await axios.get('https://ez-json-server.herokuapp.com/years')
    const { data: types } = await axios.get('https://ez-json-server.herokuapp.com/types')
    this.years = years
    this.types = types
  },
  data: () => ({
    isActive: true,
    search: '',
    searchResult: [],
    selectedYear: null,
    selectedType: null,
    filterBox1: false,
    filterBox3: false,
    dataForSearch: [],
    years: [],
    types: []
  }),
  methods: {
    reset () {
      this.isActive = true
      this.filterBox1 = false
      this.filterBox3 = false
      this.selectedYear = null
      this.selectedType = null
      this.$emit('reset', true)
    },
    async searchByMovieName () {
      if (this.search !== '') {
        const { data } = await axios('https://ez-json-server.herokuapp.com/reviews')
        this.searchResult = data
        const result = this.searchResult.map(each => {
          let lowerText = each.name.toLowerCase()
          let searchLow = this.search.toLowerCase()
          if (lowerText.indexOf(searchLow) !== -1) {
            return each
          }
        })
        this.dataForSearch = result.filter(e => e !== undefined)
      }
    },
    fromList (val, selected) {
      switch (val) {
        case 1:
          this.selectedYear = selected
          this.filterBox1 = false
          this.$emit('year', { year: this.selectedYear, type: this.selectedType })
          break
        case 2:
          this.selectedType = selected
          this.filterBox3 = false
          this.$emit('type', { year: this.selectedYear, type: this.selectedType })
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Kanit');

// custom bootstrap
.input-group {
  background-color: white;
  border-radius: 0.25em;
}
.form-control:disabled {
  background-color: white;
}

.form-control, form-control::placeholder {
  border-left: 0px;
  border: none;
  border-radius: none;
  color: rgb(118, 121, 122);
}

.form-control:focus {
  box-shadow: none;
  border: none;
}

// normal scss
.search-n-filter {
  position: relative;

  .hero-section {
    background-image: url('../assets/friend.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 320px;
    width: 100%;
    filter: brightness(72%);

    @media only screen and (min-width: 992px) {
      height: 420px;
      filter: brightness(42%);
    }
  }

  .filter-box-item {
    position: absolute;
    width: 100%;
    top: 58px;

    .list-text {
      cursor: pointer;
      color: white;
      font-size: 1.4em;
      font-family: 'Kanit', sans-serif;
      list-style: none;

      @media only screen and (min-width: 992px) {
        font-size: 2.2em;
      }

      .active-tab {
        border-bottom: 2px solid tomato;
        padding-bottom: 2px;
        transition: border-bottom-width 0.1s ease-in-out;
      }
    }

    .show-selected {
      position: relative;
      z-index: 999;
    }
    .prepend-icon {
      cursor: pointer;
      padding: 0.5em;
      font-weight: bold;
      color: rgb(118, 121, 122);

      .dropdown-img {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
