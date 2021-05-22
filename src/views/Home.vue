<template>
  <div class="home">
    <tleList />
  </div>
</template>

<script>
// @ is an alias to /src
import tleList from '@/components/tleList.vue'

export default {
  name: 'Home',
  components: {
    tleList
  },
 
}
</script>
