<script setup>
import TheFooter from "./components/TheFooter.vue";
import NavBanner from "./components/NavBanner.vue";
</script>

<template>
  <NavBanner />

  <main>
    <RouterView />
  </main>

  <TheFooter />
</template>

<style scoped>
header,
footer {
  text-align: center;
}

main {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

footer {
  padding: 1rem;
}
</style>
