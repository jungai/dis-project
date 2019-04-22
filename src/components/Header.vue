<template>
  <div>
    <b-navbar class="p-1 border border-light shadow-sm border-secondary
    d-lg-flex justify-content-lg-around
    d-md-flex justify-content-md-around
    d-flex justify-content-between">
      <b-navbar-brand href="#">
        <router-link to="/">
          <img src="@/assets/logoeiei.png" alt="logo" class="logo">
        </router-link>
      </b-navbar-brand>
      <b-navbar-nav
      >
        <b-nav-item class="d-none d-md-block">
          <b-button v-if="isAuth" @click="$emit('SignIn', true)" variant="link" class="mx-2 text-secondary">
              เข้าสู่ระบบ
          </b-button>
          <button  v-if="isAuth" @click="$emit('SignUp', true)" class="border rounded p-2 mx-2 text-secondary btn-colour-1" >
              สมัครสมาชิก
          </button>
          <button  @click="showPopup" v-if="!isAuth" variant="outline-secondary"  class="border rounded p-2 mx-2 text-black btn-colour-1 text-secondary" >
              <i class="far fa-user-circle" style="font-size:1.4em;"></i>&nbsp;{{name}} <i class="fas fa-caret-down"></i>
          </button>
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="d-md-none">
        <b-nav-item class="mx-2">
          <i
          v-if="isAuth"
          class="fas fa-user-circle icon"
          @click="$emit('SignIn', true)"/>
          <b-button  v-if="!isAuth" variant="primary"  class="mx-2 text-light" >
            {{name}}
        </b-button>
        </b-nav-item>
      </b-navbar-nav>
      <!-- <ModalLogin/> -->
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  computed: {
    isAuth () {
      return !this.$store.state.isAuth
    },
    name () {
      return this.$store.state.name
    },
    isClick () {
      return this.$store.state.clickPopup
    }
  },
  methods: {
    showPopup () {
      this.$store.commit('SHOW_POPUP', !this.isClick)
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Kanit');

button {
  font-family:      'Kanit', sans-serif;
}
.icon {
  color:            #1a8cff;
  font-size:        30px;
}
.logo {
  height:           50px;

  @media only screen and (max-width: 768px) {
    margin-left:   -32px;
    height:         40px;
  }
}
.btn-colour-1 {
  background-color: transparent;
  border-color: #003D4F;
  letter-spacing: 0.05em;
}

.btn-colour-1:hover,
.btn-colour-1:active,
.btn-colour-1:focus,
.btn-colour-1.active {
  /* let's darken #004E64 a bit for hover effect */
  background: transparent;
  outline: none;
  cursor: pointer;
}
</style>
