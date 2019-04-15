<template>
  <div>
    <b-form-group
      id="fieldset-1"
      label-for="input-1"
      :label="errorMsg ? 'Please enter a valid email address.': null"
      label-class="text-danger"
      description="*ระบุตัวอักษรอย่างน้อย2ตัว"
    >
      <b-form-input id="input-1" class="p-0 pb-2 border-top-0 border-left-0 border-right-0" type="text" v-model="name" placeholder="ชื่อ" trim/>
    </b-form-group>
    <b-form-group
      id="fieldset-2"
      label-for="input-2"
      :label="errorMsg ? 'Please enter a valid email address.': null"
      label-class="text-danger"
    >
      <b-form-input id="input-2" class="p-0 pb-2 mb-4 border-top-0 border-left-0 border-right-0" type="email" v-model="email" placeholder="อีเมล" trim/>
    </b-form-group>
    <b-form-group
      id="fieldset-3"
      label-for="input-3"
      label-class="text-danger"
      description="*รหัสผ่านของคุณต้องมีความยาว 8-20 ตัวอักษร และไม่มีการเว้นวรรค"
    >
      <b-form-input id="input-3" class="p-0 pb-2 border-top-0 border-left-0 border-right-0" type="password" v-model="password" placeholder="รหัสผ่าน" trim/>
    </b-form-group>
    <b-button class="mt-5 text-white mb-3" variant="warning" block @click="register">สมัครสมาชิก</b-button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      name: '',
      email: null,
      password: '',
      errorMsg: null
    }
  },
  methods: {
    async register () {
      try {
        await axios.post(`http://localhost:3000/user`, {
          name: this.name,
          email: this.email,
          password: this.password
        })
      } catch (error) {
        // todos
      }
    }
  }
}
</script>

<style lang="scss" scoped>
//custom bootstrap
.form-control:focus {
  box-shadow: none;
  border-color: gray;
}

</style>
