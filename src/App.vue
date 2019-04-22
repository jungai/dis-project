<template>
  <div id="app">
    <div class="position-relative">
      <Header
        @SignUp="showSignUp = $event"
        @SignIn="showSignIn = $event"/>
    </div>
    <router-view></router-view>
    <Footer/>
    <b-modal class="modal-titlee" hide-footer title="เข้าสู่ระบบ" v-model="showSignIn">
      <Login
        @close="showSignIn = $event"/>
    </b-modal>
    <b-modal class="modal-titlee" hide-footer title="สมัครสมาชิก" v-model="showSignUp">
      <SignUp/>
    </b-modal>
    <ModalLogin v-if="showPopup" class="position-absolute boxx"/>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import SignUp from '@/components/SignUp'
import Login from '@/components/Login'
import Header from '@/components/Header'
import ModalLogin from '@/components/ModalLogin'

export default {
  components: {
    Header,
    SignUp,
    Login,
    Footer,
    ModalLogin
  },
  computed: {
    showPopup () {
      return this.$store.state.clickPopup
    }
  },
  data: () => ({
    showSignUp: false,
    showSignIn: false
  })
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Kanit');

.modal-titlee {
  font-family: 'Kanit', sans-serif;
}

.boxx {
  right: 17.5vw;
  top: 60px;

  @media only screen and (max-width: 992px) {
    right: 0;
  }
}
</style>
