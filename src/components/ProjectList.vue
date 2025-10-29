<script setup>
import ProjectItem from "./ProjectItem.vue";
import projects from "../data/projects.js";
</script>

<template>
  <section class="projects-background">
    <div class="project-container">
      <ProjectItem
        v-for="project in projects"
        :key="project.title"
        :title="project.title"
        :description="project.description"
        :repo_url="project.repo_url"
        :languages="project.languages"
      />
    </div>
  </section>
</template>

<style scoped>
.projects-background {
  display: flex;
  justify-content: center;
  padding: 2rem 2rem;
  width: 100%;
}

.project-container {
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  overflow-y: visible;
  padding-top: 0.75rem;
  scroll-snap-type: x mandatory;
  padding-bottom: 1rem;
  max-width: 100vw;
}

.projects-container::-webkit-scrollbar {
  height: 0.5rem;
}

.projects-container > * {
  scroll-snap-align: start;
}
</style>
