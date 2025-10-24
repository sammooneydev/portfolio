<script setup>
import ProfileSection from "./components/ProfileSection.vue";
</script>

<template>
  <ProfileSection />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=JetBrains+Mono:wght@400;700&display=swap");

:root {
  --bg: #0a0f17;
  --fg: #e6ecf3;
  --font-heading: "Space Mono", monospace;
  --font-body: "JetBrains Mono", monospace;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-heading);
}

body {
  background: var(--bg);
  color: var(--fg);
  font-family: var(--font-body);
}
</style>
