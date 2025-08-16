<template>
  <nav class="nav-bar">
    <RouterLink to="/">HOME</RouterLink>
    <RouterLink to="/projects">PROJECTS</RouterLink>
    <RouterLink to="/contact">CONTACT</RouterLink>
  </nav>
</template>

<style scoped>
@media (prefers-color-scheme: dark) {
  .nav-bar {
    margin-bottom: 10px;
    padding: 10px;
    display: flex;
    justify-content: center;
    gap: 10px;
    background-image: url("../assets/nav-card-dark.svg");
    background-size: 100% 100%;
    background-position: center;
    border-radius: 3px;
    box-shadow: 0 4px 16px rgba(65, 56, 50, 0.3);
  }

  .nav-bar a.router-link-exact-active {
    text-decoration-thickness: 4px;
    text-underline-offset: 3px;
    text-decoration: underline;
    text-decoration-color: #fea712;
  }
}

@media (prefers-color-scheme: light) {
  .nav-bar {
    margin-bottom: 10px;
    padding: 10px;
    display: flex;
    justify-content: center;
    gap: 10px;
    background-image: url("../assets/nav-card.svg");
    background-size: 100% 100%;
    background-position: center;
    border-radius: 3px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);
  }

  .nav-bar a.router-link-exact-active {
    text-decoration-thickness: 4px;
    text-underline-offset: 3px;
    text-decoration: underline;
    text-decoration-color: #e76219;
  }
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
</style>
