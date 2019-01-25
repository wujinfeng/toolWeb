<template>
  <div id="app">
    <Md5 msg="md5加密"/>
  </div>
</template>

<script>
import Md5 from './components/Md5.vue'

export default {
  name: 'app',
  components: {
      Md5
  }
}
</script>

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
