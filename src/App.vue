<script setup>
import TheFooter from './components/TheFooter.vue'; 
import TheHeader from './components/TheHeader.vue';
</script>

<template>
  <div class="app-container">
    <header>
      <TheHeader />
    </header>

    <main>
      <h1 style="margin:50px">WIP</h1>
    </main>

    <footer>
      <TheFooter />
    </footer>
  </div>
</template>


<style scoped>
body {
  background-color: #212738;
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