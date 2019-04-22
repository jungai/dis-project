<template>
    <b-card no-body class="text-center p-1 popup d-flex justify-content-center">
      <button v-if="!isAuth" @click="login" type="button" class="btn btn-custom text-white mb-4 ">เข้าสู่ระบบ หรือ สมัครสมาชิก</button>
      <button v-if="isAuth" @click="logout" type="button" class="btn btn-warning ss text-white mb-4"><i class="fas fa-power-off"></i>&nbsp;ออกจากระบบ</button>
    </b-card>
</template>

<script>
export default {
  computed: {
    isAuth () {
      return this.$store.state.isAuth
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('LoginOut', false)
      // window.location.reload()
    },
    login () {
      this.$store.commit('SHOW_POPUP', false)
      this.$emit('SignIn', true)
    }
  }
}
</script>

<style lang="scss" scoped>
.popup {
  height: 150px;
  background-color: white;
  width: 100%;
  max-width: 250px;

  @media only screen and (max-width: 992px) {
    max-width: 100%;
  }

  .btn-custom {
    background-color: tomato;
  }
}
</style>
