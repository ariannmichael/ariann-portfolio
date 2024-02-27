<template>
 <div class="wrapper">
  <b-row id="projects-title" class="projects-title">
   <h1 class="title">SELECTED PROJECTS</h1>
  </b-row>
  <b-row v-for="index in rowSize" :key="index" id="projects-section" class="projects-section">
   <b-col v-for="project in projectsByRow(index)" :key="project.name" class="project-col">
    <NuxtLink :to="'/projects/' + project.id">
      <b-card :img-src="getImgUrl(project.imgs[0])"></b-card>
    </NuxtLink>
   </b-col>
  </b-row>
 </div>
</template>

<script>
  import { defineComponent } from "vue";
  import { ProjectService } from "~/services/projectService";

  const projectService = new ProjectService();

  export default defineComponent({
   data: function () {
    return {
     projects: [],
    };
   },
   created() {
    this.projects = projectService.getProjects();
   },
   computed: {
    rowSize() {
     return Math.ceil(this.projects.length / 2);
    },
   },
   methods: {
    projectsByRow(index) {
      const start = (index - 1) * 2;
      const end = index * 2;
      return this.projects.slice(start, end);
    },
    getImgUrl(img) {
      return require(`~/static${img}`);
    },
   },
  })
</script>

<style scoped>
.wrapper {
 margin-top: 10rem;
 height: 100vh;
}

.projects-title {
 border-bottom: 1px solid var(--color-text-white);
}

.projects-section {
 padding-top: 3.2rem;
 padding-bottom: 2.2rem;
}

.card {
 width: 40rem;
 height: 25.6rem;
 border-radius: 0;
}

.card-img {
 width: 100%;
 height: 25.5rem;
 border-radius: 0;
}

.project-col {
  width: 5rem;
}

@media (max-width: 768px) {
  .card {
    width: 10.5rem;
    height: 10rem;
  }

  .card-img {
    height: 100%;
  }
}
</style>