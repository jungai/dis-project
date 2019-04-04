<template>
  <div class="search-n-filter">
    <div class="hero-section"/>
    <div class="filter-box-item d-lg-flex flex-lg-column justify-content-lg-center">
      <ul class="list-text d-flex justify-content-around justify-content-lg-around p-0">
        <li
          :class=" isActive ? 'active-tab' : null"
          @click=" isActive = true">ค้นหา</li>
        <li
          :class=" !isActive ? 'active-tab' : null"
          @click=" isActive = false">กรองข้อมูล</li>
      </ul>
      <div
        class="p-3 mt-5"
        v-if="isActive">
        <b-col>
          <b-input-group>
            <span class="prepend-icon"><i class="fas fa-search"></i></span>
            <b-form-input placeholder="ค้นหาหนังที่ต้องการ"></b-form-input>
          </b-input-group>
        </b-col>
      </div>
      <div
        class="d-flex flex-column p-3"
        v-if="!isActive">
        <b-input-group class="mb-3">
          <span class="prepend-icon"><i class="fas fa-calendar"></i> &nbsp; ปีฉาย</span>
          <b-form-input
            placeholder="เลือกปีที่ฉาย"
            @focus="filterBox1 = true"
            @blur="filterBox1 = false">
          </b-form-input>
          <span
            @click="filterBox1 = !filterBox1"
            class="prepend-icon"><i class="fas fa-caret-down" :class=" filterBox1? 'dropdown-img' : ''"></i>
          </span>
        </b-input-group>
        <div
          class="show-selected "
          v-if="filterBox1">
          <ListGroup/>
        </div>
        <b-input-group class="mb-3">
          <span class="prepend-icon"><i class="fas fa-th-large"></i> &nbsp; หมวด</span>
          <b-form-input
            @focus="filterBox2 = true"
            @blur="filterBox2 = false">
          </b-form-input>
          <span
            @click="filterBox2 = !filterBox2"
            class="prepend-icon">
              <i class="fas fa-caret-down" :class=" filterBox2 ? 'dropdown-img' : ''"></i>
          </span>
        </b-input-group>
        <div
          class="show-selected"
          v-if="filterBox2">
          <ListGroup/>
        </div>
        <b-input-group class="mb-3">
          <span class="prepend-icon"><i class="fas fa-th-large"></i> &nbsp; ประเภท</span>
          <b-form-input
            @focus="filterBox3 = true"
            @blur="filterBox3 = false">
          </b-form-input>
          <span
            @click="filterBox3 = !filterBox3"
            class="prepend-icon">
              <i class="fas fa-caret-down"></i>
          </span>
        </b-input-group>
        <div
          class="show-selected"
          v-if="filterBox3">
          <ListGroup/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListGroup from '@/components/ListGroup'

export default {
  components: {
    ListGroup
  },
  mounted () {
    // fetch data here
  },
  data: () => ({
    isActive: true,
    filterBox1: false,
    filterBox2: false,
    filterBox3: false
  })
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Kanit');

// custom bootstrap
.input-group {
  background-color: white;
  border-radius: 0.25em;
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
    position: absolute;
    height: 320px;
    width: 100%;
    filter: brightness(72%);
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
