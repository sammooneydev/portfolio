<script setup>
defineProps({
  title: String,
  description: String,
  repo_url: String,
  languages: Array,
});
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

<style scoped>
.project-item-background {
  display: flex;
  justify-content: center;
  align-items: center;
}

.project-item {
  background: #0a0f17;
  border: 0.1rem solid #111927;
  border-radius: 0.3rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  padding: 2rem;
  min-width: 250px;
  max-width: 300px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.project-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
}

h4 {
  font-size: 1.1rem;
  opacity: 0.5;
}

.project-languages {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.project-languages span {
  background: #111927;
  color: #f9a825;
  font-size: 0.75rem;
  padding: 0.3rem 0.6rem;
  border-radius: 0.25rem;
}

p {
  font-size: 0.9rem;
  color: #ccc;
  line-height: 1.4;
  margin-bottom: 1rem;
}

a img {
  width: 24px;
  height: 24px;
  transition: opacity 0.2s ease;
}

a img:hover {
  opacity: 0.3;
}
</style>
