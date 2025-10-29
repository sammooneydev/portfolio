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

