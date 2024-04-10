<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  outline: none;
  list-style: none;
  height: 100%;
  font-family: "PingFang SC";
  background: #f5f5f5;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

fieldset {
  text-align: start;
  border: 1px solid #e6e6e6;
  padding: 15px;
  color: #6b6b6b;
}
</style>
