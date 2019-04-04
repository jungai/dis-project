<template>
  <div>
    <!-- @comment -->
    <!--<b-card bg-variant="dark" text-variant="white" title="Sign In">-->
    <b-card border-variant="dark" header="Sign In" align="left">
    <b-form  @submit.prevent>
      <label for="feedback-user">Email address</label>
      <b-input v-model="userId" :state="validation" id="feedback-user" placeholder="Enter email address"></b-input>
      
     
     </b-form>
    <b-form  @submit.prevent>
    <label for="text-password">Password</label>
    <b-input type="password" id="text-password" aria-describedby="password-help-block"></b-input>
    <b-form-text id="password-help-block">
      Your password must be 8-20 characters long and must not contain spaces.
    </b-form-text>
   </b-form>
   <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox>
   <button type="submit" class="btn btn-primary">login</button>
   <a href="#">or Sign Up</a>
   </b-card>
   <a id="resetPasswordLink" href="#">Forget the password?</a>

  </div>
</template>

<script>
export default {
  data() {
      return {
        userId: ''
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
