<template>
    <nav class="nav-bar">
      <RouterLink to="/">HOME</RouterLink>
      <RouterLink to="/projects">PROJECTS</RouterLink>
      <RouterLink to="/contact">CONTACT</RouterLink>
    </nav>
</template>

<style scoped>
.nav-bar {
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.nav-bar a {
  list-style: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  color: #c21717;
  font-family: "Space Grotesk", sans-serif;
  font-weight: bold;
}

.nav-bar a.router-link-exact-active {
    background-color: #fea712;
    border-radius: 4px;
}
</style>