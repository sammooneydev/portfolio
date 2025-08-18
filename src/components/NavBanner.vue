<template>
  <nav class="nav-bar">
    <div class="nav-left">
      <span class="title">SAM'S STUFF</span>
    </div>
    <div class="nav-right">
      <RouterLink to="/">HOME</RouterLink>
      <RouterLink to="/projects">PROJECTS</RouterLink>
      <RouterLink to="/contact">CONTACT</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
@media (prefers-color-scheme: dark) {
  .nav-bar {
    margin-bottom: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    background-image: url("../assets/nav-card-dark.svg");
    background-size: 100% 100%;
    background-position: center;
    border-radius: 3px;
    box-shadow: 0 4px 16px rgba(65, 56, 50, 0.3);
    position: fixed;
    top: 0%;
    width: 100%;
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
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    background-image: url("../assets/nav-card.svg");
    background-size: 100% 100%;
    background-position: center;
    border-radius: 3px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);
    position: fixed;
    top: 0%;
    width: 100%;
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

.nav-left {
  display: flex;
  align-items: center;
}

.nav-right {
  display: flex;
  gap: 10px;
}

.title {
  text-align: center;
  margin: 0;
  padding: 5px;
  font-weight: bold;
  font-size: 1.2rem;
  font-family: "Space Grotesk", sans-serif;
  background: linear-gradient(90deg, #c21717, #e76219, #fea712);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>
