<script setup>
import TheFooter from "./components/TheFooter.vue";
import TheHeader from "./components/TheHeader.vue";
</script>

<template>
    <header>
      <TheHeader />
    </header>

    <nav class="nav-bar">
      <RouterLink to="/">home</RouterLink>
    </nav>
    
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
