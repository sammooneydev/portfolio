<script setup>
import TheFooter from "./components/TheFooter.vue";
import TheHeader from "./components/TheHeader.vue";
import ProfileCard from "./components/ProfileCard.vue";

</script>

<template>
  <div class="app-container">
    <header>
      <TheHeader />
    </header>

    <main>
      <ProfileCard />
    </main>

    <TheFooter />
  </div>
</template>

<style scoped>
body {
  background-color: #fffaf3;
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

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
