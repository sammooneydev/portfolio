<template>
    <nav class="nav-bar">
      <RouterLink to="/">HOME</RouterLink>
    </nav>
</template>

<style scoped>
.nav-bar {
  margin-bottom: 10px;
  padding: 10px;
}

.nav-bar a {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  gap: 10px;
  text-decoration: none;
  color: #c21717;
  font-family: "Space Grotesk", sans-serif;
  font-weight: bold;
}
</style>