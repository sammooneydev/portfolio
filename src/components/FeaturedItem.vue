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
        {{ isOpen ? "hide details" : "view details" }}
      </button>

      <div v-if="isOpen" class="details">
        <p>{{ details }}</p>

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
  opacity: 0.7;
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