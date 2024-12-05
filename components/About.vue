<template>
  <div>
    <b-row id="about-title" class="about-title">
        <h1 class="title">ABOUT ME</h1>
    </b-row>
    <b-row id="about-section" class="about-section">
      <b-col>
        <p class="about-text">
          Hello! My name is Ariann and I enjoy creating things from web to games. I have been working as a web developer for 5 years and I have been working with a variety of clients, I’ve had the privilege of working at a start-up, a huge corporation, and an open-source project. 
          All of this experience has given me a good understanding of the full life cycle of a project. I also have a great passion for learning and I am always looking for new technologies to work with.
          If you are looking for a friendly, passionate, and highly skilled software developer to join your team, please don't hesitate to get in touch. I look forward to hearing from you!
          Here are a few technologies I’ve been working with recently:                                  
        </p>
      </b-col>
      <b-col class="about-image">
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
    <b-row class="about-tech">
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

  @media (max-width: 768px) {
    .about-section {
      display: block;
    }

    .about-text {
      line-height: 2rem;
      padding-right: 3rem;
      font-size: 1.3rem;
    }

    .img-size {
      width: 15rem;
      height: 16rem;
    }

    .about-tech {
      margin-top: 20rem;
      padding-right: 1.6rem;
    }

    .about-image {
      margin-top: 4rem;
    }
  }
</style>