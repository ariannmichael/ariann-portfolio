<template>
  <div>
    <TheNavbar class="stick-navbar" />
    <Nuxt />
  </div>
</template>

<style scoped>
.stick-navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  max-width: 95%;
  margin: 0 auto;
  padding-top: 1rem;
}
</style>