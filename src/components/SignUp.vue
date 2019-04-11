<template>
  <div>
    <!-- @comment -->
    <!--<b-card bg-variant="dark" text-variant="white" title="Sign In">-->
    <!-- <b-card border-variant="dark" header="Create an account" align="left">
      <label for="input-live">Username:</label>
    <b-form-input
      id="input-live"
      v-model="name"
      :state="nameState"
      aria-describedby="input-live-help input-live-feedback"
      placeholder="Enter your name"
      trim
    ></b-form-input>
    <b-form-invalid-feedback id="input-live-feedback">
      Enter at least 2 letters
    </b-form-invalid-feedback>

    <label for="input-email">Email:</label>
    <b-form-input
      id="input-email"
      v-model="email"
      :state="emailState"
      aria-describedby="input-email-help input-email-feedback"
      placeholder="Enter your email address"
      trim
    ></b-form-input>

    <label for="input-password">Password:</label>
    <b-form-input
      id="input-password"
      type="password"
      :state="passwordState"
      aria-describedby="input-password-help input-password-feedback"
      placeholder="Enter password"
      trim
    ></b-form-input>
    <b-form-text id="password-help-block">
      Your password must be 8-20 characters longand must not
      contain spaces.
    </b-form-text>

   <button type="signup" class="btn btn-success">Sign Up</button>
   <a href="#">or Log in</a>
   </b-card>
   <p>By creating an account, you agree to the <a href="#">Privacy Policy</a> and the <a href="#">Terms and Policies</a>.</p> -->
    <b-form-group
      id="fieldset-1"
      label-for="input-1"
      :label="errorMsg ? 'Please enter a valid email address.': null"
      label-class="text-danger"
      description="*ระบุตัวอักษรอย่างน้อย2ตัว"
    >
      <b-form-input id="input-1" class="p-0 pb-2 border-top-0 border-left-0 border-right-0" type="text" v-model="name" placeholder="ชื่อ" trim/>
      <!-- <b-form-input class="p-0 pb-2 mb-4 border-top-0 border-left-0 border-right-0" type="email" v-model="email" placeholder="อีเมล" trim/>
      <b-form-input class="p-0 pb-2 mb-4 border-top-0 border-left-0 border-right-0" type="password" v-model="password" placeholder="รหัสผ่าน" trim/> -->
      <!-- <b-form-input v-if="password.length !== 0" class="p-0 pb-2 mb-4 border-top-0 border-left-0 border-right-0" type="password" v-model="confirmPassword" placeholder="ยืนยันรหัสผ่าน" trim/> -->
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
      <!-- <b-form-input v-if="password.length !== 0" class="p-0 pb-2 mb-4 border-top-0 border-left-0 border-right-0" type="password" v-model="confirmPassword" placeholder="ยืนยันรหัสผ่าน" trim/> -->
    </b-form-group>
    <b-button class="mt-5 text-white mb-3" variant="warning" block @click="register">สมัครสมาชิก</b-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: null,
      password: '',
      // confirmPassword: null,
      errorMsg: null
    }
  },
  methods: {
    register () {

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
