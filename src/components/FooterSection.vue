<script setup>
import { ref } from "vue";

const showTooltip = ref(false);

function copyEmail() {
  navigator.clipboard.writeText("sammooneydev@gmail.com");
  showTooltip.value = true;
  setTimeout(() => (showTooltip.value = false), 1500);
}
</script>

<template>
  <div class="footer">
    <p>
      * ascii banner created using the
      <a href="https://manytools.org/hacker-tools/ascii-banner/"
        >many tools page for ascii banner</a
      >
    </p>
    <p>
      * for serious enquiries:
      <span class="email" @click="copyEmail">
        sammooneydev@gmail.com
        <span v-if="showTooltip" class="tooltip">copied!</span>
      </span>
    </p>
    <p>--- end of portfolio ---</p>
  </div>
</template>

<style scoped>
.footer {
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 100%;
}

p {
  font-size: 0.8rem;
  margin-top: 0;
  margin-bottom: 0;
  line-height: 1.5;
}

a {
  color: #f9a825;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}

.email {
  color: #f9a825;
  font-weight: bold;
  cursor: pointer;
  display: inline-block;
}

.email:hover {
  text-decoration: underline;
}

.tooltip {
  color: var(--fg);
  font-size: 0.75rem;
}
</style>
