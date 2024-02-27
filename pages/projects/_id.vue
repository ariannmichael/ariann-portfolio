<template>
 <div class="project-wrapper">
  <div class="carousel-wrapper">
   <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators>
    <b-carousel-slide
     v-for="img in project.imgs"
     :key="img.id"
     :img-src="getImgUrl(img)"
     img-width="1024"
     img-height="480"
    >
    </b-carousel-slide>
   </b-carousel>
  </div>
  <div class="description-wrapper">
   <b-row>
    <b-col>
     <h1 class="project-title">{{ project.name }}</h1>
     <p class="project-text">{{ project.description }}</p>
    </b-col>
    <b-col class="detail-wrapper">
     <div class="detail-container">
      <h3 class="detail-title">Client</h3>
      <p class="detail-text">{{ project.client }}</p>
     </div>
     <div class="detail-container">
      <h3 class="detail-title">Stack</h3>
      <p class="detail-text">{{ project.stack }}</p>
     </div>
     <div class="detail-container">
      <h3 class="detail-title">Date</h3>
      <p class="detail-text">{{ project.startDate }} - {{ project.endDate }}</p>
     </div>
    </b-col>
   </b-row>
  </div>
 </div>
</template>

<script>
 import { defineComponent } from 'vue';
 import { ProjectService } from "~/services/projectService";

 const projectService = new ProjectService();

 export default defineComponent({
  data: function() {
   return {
    id: null,
    project: null
   };
  },
  created() {
   this.id = this.$route.params.id;
   this.project = projectService.getProject(this.id);
  },
  methods: {
   getImgUrl(img) {
      return require(`~/static${img}`);
    },
  }
 })
</script>

<style>
.project-wrapper {
 margin: 1rem 5rem;
}

.carousel-wrapper {
 width: 100%;
}

/* .img-fluid {
 height: 90vh;
} */

.description-wrapper {
 margin-top: 1.6rem;
}

.project-title {
 font-family: 'Montserrat';
 font-weight: 900;
 font-size: 4.3rem;
 color: var(--vt-c-soft);
}

.project-text {
 color: var(--vt-c-mute);
 font-family: 'Playfair Display';
 font-size: 1.4rem;
 font-style: normal;
 font-weight: 400;
 line-height: 1.438rem;
 letter-spacing: 0.047rem;
 white-space: pre-line;
 padding-right: 1.4rem;
 margin-top: 1rem;
}

.detail-wrapper {
 margin-top: 1.2rem;
 margin-left: 1rem;
}

.detail-container {
 margin-bottom: 2rem;
}

.detail-title {
 font-family: 'Montserrat';
 font-weight: 900;
 font-size: 3.4rem;
 color: var(--vt-c-soft);
}

.detail-text {
 color: var(--vt-c-mute);
 font-family: 'Playfair Display';
 font-size: 2.0rem;
 font-style: normal;
 font-weight: 400;
 line-height: 1.438rem;
 letter-spacing: 0.047rem;
 white-space: pre-line;
 margin-top: 1rem;
 padding-left: 1rem;
}

@media (max-width: 768px) {
  .project-wrapper {
    margin: 1rem 4rem;
  }

  .carousel-wrapper {
    width: 20rem;
  }

  .project-title {
    font-size: 3rem;
  }

  .project-text {
    font-size: 1rem;
  }

  .detail-title {
    font-size: 2.4rem;
  }

  .detail-text {
    font-size: 1.4rem;
  }
}
</style>