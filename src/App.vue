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
      loading: true,
    }
  },
  created: function() {
    this.loading = false
  },
}
</script>
<style>
html,
body,
#app {
  /* height: 100%;
  width: 100%;
  height: 100%; */
  /* height: 100%; */

  /* overflow: hidden; */
}
#nprogress .bar {
  background: #2ff8ff !important;
  height: 2px !important;
}
</style>
