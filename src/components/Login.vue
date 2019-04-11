<template>
  <div>
    <b-form-group
        id="fieldset-1"
        label-for="input-1"
        :label="errorMsg ? 'Please enter a valid email address.': null"
        label-class="text-danger"
      >
        <b-form-input class="p-0 pb-2 mb-4 border-top-0 border-left-0 border-right-0" type="email" v-model="email" placeholder="อีเมล" trim/>
        <b-form-input class="p-0 pb-2 mb-4 border-top-0 border-left-0 border-right-0" type="password" v-model="password" placeholder="รหัสผ่าน" trim/>
        <b-button class="mt-5 text-white mb-3" variant="warning" block @click="signIn">เข้าสู่ระบบ</b-button>
        <div class="sub-button d-flex justify-content-around " >
          <b-link href="#foo" class="text-secondary">ลืมรหัสผ่าน?</b-link>
          <b-link href="#foo" class="text-secondary">สมัครสมาชิก</b-link>
        </div>
      </b-form-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: null,
      password: null,
      errorMsg: false
    }
  },
  methods: {
    validateEmail (email) {
      const sQtext = '[^\\x0d\\x22\\x5c\\x80-\\xff]'
      const sDtext = '[^\\x0d\\x5b-\\x5d\\x80-\\xff]'
      const sAtom = '[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+'
      const sQuotedPair = '\\x5c[\\x00-\\x7f]'
      const sDomainLiteral = '\\x5b(' + sDtext + '|' + sQuotedPair + ')*\\x5d'
      const sQuotedString = '\\x22(' + sQtext + '|' + sQuotedPair + ')*\\x22'
      const sDomainRef = sAtom
      const sSubDomain = '(' + sDomainRef + '|' + sDomainLiteral + ')'
      const sWord = '(' + sAtom + '|' + sQuotedString + ')'
      const sDomain = sSubDomain + '(\\x2e' + sSubDomain + ')*'
      const sLocalPart = sWord + '(\\x2e' + sWord + ')*'
      const sAddrSpec = sLocalPart + '\\x40' + sDomain// complete RFC822 email address spec
      const sValidEmail = '^' + sAddrSpec + '$'// as whole string

      const isValid = new RegExp(sValidEmail)

      return isValid.test(email)
    },
    signIn () {
      if (this.validateEmail(this.email)) {
        this.errorMsg = false
      } else {
        this.errorMsg = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
//custom bootstrap
a {
  text-decoration: underline;
}
.form-control:focus {
  box-shadow: none;
  border-color: gray;
}
// normal
.feedback-user{
  padding: 10px;
  border-bottom: 100px;
  color: yellow;
}

</style>
