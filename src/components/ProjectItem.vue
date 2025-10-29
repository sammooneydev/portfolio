<script setup>
defineProps({
    title: String,
    description: String,
    repo_url: String,
    languages: Array,
})
</script>

<template>
  <div class="project-item-background">
    <div class="project-item">
        <h4>{{ title }}</h4>
        <div class="project-languages">
            <span v-for="language in languages" :key="language">
                {{ language }}
            </span>    
        </div>
        <p>{{ description }}</p>
        <a :href="repo_url" target="_blank">
            <img src="../assets/github-mark-white.svg" alt="Github icon" />
        </a>
    </div>
  </div>
</template>
