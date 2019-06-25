<template>
  <footer class="p-4 border-top">
    © 2019 DIS_PROJECT - View this project on
    <a href="https://github.com/jungai/dis-project" target="_blank"><img src="@/assets/github-logo.svg" alt="github-svg"/> Github</a>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Kanit');

footer {
  text-align: center;
  color: #888888;
  font-family: 'Kanit', sans-serif;

  a {
    text-decoration: underline;

    img {
      height: 14px;
    }
  }
}
</style>
