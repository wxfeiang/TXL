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
body {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  height: 100%;
}
</style>
