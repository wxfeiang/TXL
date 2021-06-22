<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
    }
  },
}
</script>
<style>
#app {
  height: 100%;
}
html,
body {
  background: #fff;
  height: 100%;
}
</style>
