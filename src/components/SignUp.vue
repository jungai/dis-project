<template>
  <div>
    <!-- @comment -->
    <!--<b-card bg-variant="dark" text-variant="white" title="Sign In">-->
    <b-card border-variant="dark" header="Create an account" align="left">
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
   <p>By creating an account, you agree to the <a href="#">Privacy Policy</a> and the <a href="#">Terms and Policies</a>.</p>

  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: ''
    }
  },
  computed: {
    nameState () {
      return this.name.length > 1
    }
  }
}
</script>

<style>
.feedback-user{
  padding: 10px;
  border-bottom: 100px;
  color: yellow;
}

</style>
