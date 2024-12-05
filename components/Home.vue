<template>
  <b-row>
    <article class="hero">
      <div>
        <p>Hello there, my name is</p>
        <h1>Ariann Michael</h1>
        <h2>Name it, and I can build it.</h2>
        <h4>I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Gamedev in my free time.</h4>
        <NuxtLink :to="{path: '/', hash: '#contact'}">
          <button class="btn btn-outline-light call-btn">Let's work together</button>
        </NuxtLink>
      </div>
    </article>
  </b-row>
</template>

<style scoped>
.hero {
  display: flex;
  height: 50rem;
  align-items: center;
  padding-left: 4rem;
}

h1 {
  color: var(--color-text-soft);
  font-family: 'Montserrat';
  font-weight: 900;
  font-size: 5.75rem;
  line-height: 5.5rem;
  text-shadow: 8px 6px 0px rgba(0,0,0,0.81);
}

h2 {
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 4.375rem;
  line-height: 4.5rem;
  color: var(--color-text-mute); 
}

h4 {
  font-family: 'Playfair Display';
  font-weight: 400;
  font-size: 1.25rem;
  width: 35rem;
  color: var(--color-text-mute);
  margin-top: 2rem;
  margin-bottom: 6rem;
}

p {
  font-family: 'Playfair Display';
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.125rem;
  color: var(--color-text-white);
}

.call-btn {
  font-family: 'Montserrat';
  font-weight: 900;
  font-size: 2rem;
  width: 26rem;
  height: 5rem;
}

@media only screen and (max-width: 768px) {
  .hero {
    padding-right: 2rem;
    padding-left: 0;
  }

  h1 {
    font-size: 4.375rem;
    line-height: 4.5rem;
  }

  h2 {
    font-size: 2.4rem;
    line-height: 3rem;
  }

  h4 {
    font-size: 1rem;
    line-height: 1.5rem;
    width: 100%;
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .call-btn {
    font-size: 1.5rem;
    width: 19rem;
    height: 4rem;
  }
}
</style>