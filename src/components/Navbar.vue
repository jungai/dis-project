<template>
  <div>
    <b-navbar class="p-1 border border-secondary d-lg-flex justify-content-lg-around d-md-flex justify-content-md-around">
      <b-navbar-brand href="#">
        <img src="@/assets/moviereview.png" alt="wait for real" class="logo">
        Review2Free
      </b-navbar-brand>
      <b-navbar-nav>
        <!-- <b-nav-item
          class="d-md-none"
          @click="$emit('did-click', !itClick)">
          <span class="h2">
            <i class="far fa-user-circle"></i>
          </span>
        </b-nav-item> -->
        <b-nav-item
        class="d-none d-md-block">
          <b-button  @click="$emit('SignIn', true)" variant="link" class="mx-2">
              เข้าสู่ระบบ
          </b-button>
          <b-button  @click="$emit('SignUp', true)" variant="primary"  class="mx-2" >
              สมัครสมาชิก
          </b-button>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css?family=Kanit');

* {
  font-family: 'Kanit', sans-serif;
}

.logo {
  height: 38px;
}
</style>
