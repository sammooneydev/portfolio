<template>
  <footer>
    <div class="footer-content">
      <p>&copy; 2025 Sam Mooney</p>
      <ul class="social-links">
        <li><a href="https://github.com/Noysomee">Github</a></li>
        <li>
          <a href="https://linkedin.com/in/sam-mooney-b8254632b">LinkedIn</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Archivo+Black&family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Space+Grotesk:wght@300..700&display=swap");

.footer-content {
  text-align: center;
}

.social-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.social-links li a {
  text-decoration: none;
  color: #c21717;
  font-family: "Space Grotesk", sans-serif;
  font-weight: bold;
}
</style>
