<template>
  <div id="index">
    <div id="home">
      <Home />
    </div>
    <div id="about">
      <About />
    </div>
    <Home />
  </div>

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
</style>
