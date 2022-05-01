// template 안에는 HTML로 이루어져있다.
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    우와 신기해요!
  </div>
</template>

// script 안에는 JS로 이루어져있다.
<script>
export default {
  name: 'App'
}
</script>

// style 안에는 CSS로 이루어져있다.
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
