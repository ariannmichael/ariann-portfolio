<template>
  <div>
    <b-row id="about-title" class="about-title">
        <h1 class="title">ABOUT ME</h1>
    </b-row>
    <b-row id="about-section" class="about-section">
      <b-col>
        <p class="about-text">
          Hello! My name is Ariann and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
          Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
          I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
          Here are a few technologies I’ve been working with recently:
        </p>
      </b-col>
      <b-col>
        <div class="relative-position">
          <div class="img-size color-block-red"></div>
          <div class="img-size color-block-green"></div>
          <b-img 
            src="/ariann.png" 
            blank-color="#000000"
            fluid 
            class="img-size photo"
            alt="Ariann Michael">
          </b-img>
        </div>
      </b-col>
    </b-row>
    <b-row id="about-tech">
      <b-col>
        <h3>Frontend / Backend</h3>
        <p class="tech-p">Javascript / React / NextJS / Angular2+ / Vue / NuxtJS / NodeJS / Java / Spring / Python / Flask</p>
      </b-col>
      <b-col>
        <h3>Infrastructure</h3>
        <p class="tech-p">Dockers / Kubernetes / Jenkins / AWS / MySQL / MongoDB</p>
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>
  .about-title {
    border-bottom: 1px solid var(--color-text-white);
  }

  .about-section {
    padding-top: 2.2rem;
    padding-bottom: 2.2rem;
  }

  .about-text {
    font-family: 'Playfair Display';
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: var(--color-text-light);
    padding-right: 5rem;
  } 

  .img-size {
    position: absolute;
    width: 33.313rem;
    height: 32.938rem;
  }
  .color-block-red {
    background-color: var(--color-red);
  }

  .color-block-green {
    background-color: var(--color-green);
    top: 1.5rem;
    left: 1.5rem;
  }

  .photo {
    top: 3rem;
    left: 3rem;
  }

  h3 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 900;
    font-size: 1.5rem;
    letter-spacing: 0.3em;
    color: var(--color-text-soft);
    text-align: center;
  }

  .tech-p {
    font-family: 'Playfair Display';
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 3.5rem;
    letter-spacing: 0.09em;
    color: var(--color-text-white);
    padding: 2rem;
    text-align: center;
  }
</style>