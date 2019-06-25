<template>
  <div class="aa">
    <b-modal title="เข้าสู่ระบบ" v-model="showLogin">
      <Login/>
    </b-modal>
    <b-modal title="สมัครสมาชิก" v-model="clickSignIn2">
      <SignUp/>
    </b-modal>
  </div>
</template>

<script>
import SignUp from './SignUp'
import Login from './Login'

export default {
  components: {
    SignUp,
    Login
  },
  props: {
    isRegister: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    showModal: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    showModal (val) {
      console.log('showmodal', val)
      this.showLogin = val
    },
    showLogin (val) {
      this.$emit('close', val)
    }
  },
  data: () => ({
    showLogin: false
  })
}
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css?family=Kanit');

.modal-header {
  background-color: darkblue;
  color: white;
}
</style>
