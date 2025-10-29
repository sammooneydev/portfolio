<script setup>
import ProfileSection from "./components/ProfileSection.vue";
import ProjectList from "./components/ProjectList.vue";
</script>

<template>
  <main class="app-container">
    <pre class="ascii-banner">
███████╗ █████╗ ███╗   ███╗███╗   ███╗ ██████╗  ██████╗ ███╗   ██╗███████╗██╗   ██╗██████╗ ███████╗██╗   ██╗
██╔════╝██╔══██╗████╗ ████║████╗ ████║██╔═══██╗██╔═══██╗████╗  ██║██╔════╝╚██╗ ██╔╝██╔══██╗██╔════╝██║   ██║
███████╗███████║██╔████╔██║██╔████╔██║██║   ██║██║   ██║██╔██╗ ██║█████╗   ╚████╔╝ ██║  ██║█████╗  ██║   ██║
╚════██║██╔══██║██║╚██╔╝██║██║╚██╔╝██║██║   ██║██║   ██║██║╚██╗██║██╔══╝    ╚██╔╝  ██║  ██║██╔══╝  ╚██╗ ██╔╝
███████║██║  ██║██║ ╚═╝ ██║██║ ╚═╝ ██║╚██████╔╝╚██████╔╝██║ ╚████║███████╗   ██║   ██████╔╝███████╗ ╚████╔╝ 
╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝     ╚═╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚═════╝ ╚══════╝  ╚═══╝  
    </pre>
    <ProfileSection />
    <ProjectList />
  </main>
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

.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 100%vh;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.ascii-banner {
  font-family: monospace;
  white-space: pre;
  text-align: center;
  color: var(--fg);
  line-height: 1.2;
}
</style>
