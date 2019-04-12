<template>
  <div id="app">
    <Navbar
      @SignUp="showSignUp = $event"
      @SignIn="showSignIn = $event"/>
    <router-view></router-view>
    <b-modal class="modal-titlee" hide-footer title="เข้าสู่ระบบ" v-model="showSignIn">
      <Login/>
    </b-modal>
    <b-modal class="modal-titlee" hide-footer title="สมัครสมาชิก" v-model="showSignUp">
      <SignUp/>
    </b-modal>
  </div>
</template>

<script>
import SignUp from '@/components/SignUp'
import Login from '@/components/Login'
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar,
    SignUp,
    Login
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
</style>
