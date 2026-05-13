<script setup>
import { ref } from "vue";

const props = defineProps({
  title: String,
  subtitle: String,
  description: String,
  details: String,
});

const isOpen = ref(false);

function toggleOpen() {
  isOpen.value = !isOpen.value;
}
</script>

<template>

  <section class="featured-background">
    <div class="featured-container">
      <h3>{{ title }}</h3>
      <h4>{{ subtitle }}</h4>

      <p class="description">{{ description }}</p>

      <button @click="toggleOpen" class="toggle-btn">
        {{ isOpen ? "hide overview" : "technical overview" }}
      </button>

      <div v-if="isOpen" class="details">
        <div class="details-content" v-html="details"></div>

        <p class="source-code-msg">source code is available upon request</p>

      </div>
    </div>
  </section>

</template>

<style scoped>
.featured-background {
  display: flex;
  justify-content: center;
  padding: 2rem;
  width: 100%;
}

.featured-container {
  background: #0a0f17;
  border: 0.1rem solid #111927;
  border-radius: 0.3rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  padding: 2rem;
  max-width: 600px;
  width: 100%;
  text-align: left;
}

h3 {
  margin: 0;
  margin-bottom: 0.3rem;
}

h4 {
  margin: 0 0 1rem 0;
  opacity: 0.85;
  color: #f9a825;
}

.description {
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.toggle-btn {
  background: transparent;
  border: 1px solid #f9a825;
  color: #f9a825;
  padding: 0.4rem 0.8rem;
  font-family: inherit;
  cursor: pointer;
  border-radius: 0.2rem;
  margin-bottom: 1rem;
}

.toggle-btn:hover {
  background: #f9a825;
  color: #0a0f17;
}

.details {
  margin-top: 1rem;
  font-size: 0.9rem;
}

.details-content {
  line-height: 1.7;
}

.details-content :deep(p) {
  margin-bottom: 1rem;
}

.details-content :deep(ul) {
  padding-left: 1.2rem;
  margin-bottom: 1rem;
}

.details-content :deep(li) {
  margin-bottom: 0.5rem;
}

.details-content :deep(.video-wrapper) {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  margin-bottom: 1.5rem;
}

.details-content :deep(.video-wrapper iframe) {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0.3rem;
}

.details-content :deep(.project-media) {
  width: 100%;
  border-radius: 0.3rem;
  margin: 1rem 0 1.5rem 0;
  border: 1px solid #111927;
  display: block;
}

.source-code-msg {
  margin-top: 1rem;
  font-size: 0.8rem;
  color: #f9a825;
  font-weight: bold;
}

@media (max-width: 768px) {
  .featured-container {
    padding: 1.5rem;
  }
}
</style>