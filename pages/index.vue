<template>
  <div id="index">
    <div id="home" style="height: 100vh;">
      <Home />
    </div>
    <div id="about" style="height: 100vh;">
      <About />
    </div>
    <div id="experience" style="height: 100vh;">
      <Experience />
    </div>
    <div id="work" class="work" style="height: 100vh;">
      <Work />
    </div>
    <div id="contact" class="contact">
      <Contact />
    </div>
  </div>

</template>

<script lang="ts">
import Vue from 'vue'
import { BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVueIcons)

export default Vue.extend({
  name: 'IndexPage'
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');

.contact {
  height: 100vh;
  margin-top: 50rem;
}

@media (max-width: 768px) {
  .work {
    margin-top: 80rem;
  }

  .contact {
    margin-top: 10rem;
  }
}
</style>
