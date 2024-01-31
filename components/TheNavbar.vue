<template>
  <header>
    <div class="wrapper">
      <div>
          <NuxtLink :to="{path: '/', hash: '#home'}" class="logo">
            <img src="/ariann-logo.svg" alt="Logo" />
          </NuxtLink>
      </div>
      <nav>
        <div class="links">
          <NuxtLink :to="{path: '/', hash: '#about'}">About.</NuxtLink>
          <NuxtLink :to="{path: '/', hash: '#experience'}">Experience.</NuxtLink>
          <NuxtLink :to="{path: '/', hash: '#work'}">Work.</NuxtLink>
          <NuxtLink :to="{path: '/', hash: '#contact'}">Contact.</NuxtLink>
          <a href="/Ariann_Michael_CV.pdf" class="btn btn-outline-light resume-btn" download>Resume</a>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  border-bottom: 1px solid var(--color-text-white);
  border-width: 95%;
  background-image: url('/black.png');
  position: sticky;
  top: 0;
  z-index: 10000;
}
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2rem;
  margin-bottom: 1.2rem;
}

nav {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  width: 36rem;
}

.links {
  display: flex;
  justify-content: space-between;
  line-height: 2.625rem;
}

.resume-btn {
  font-family: 'Montserrat';
  font-weight: 800;
  font-size: 1.2rem;
  line-height: 1.688rem;
}
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheNavbar'
})
</script>