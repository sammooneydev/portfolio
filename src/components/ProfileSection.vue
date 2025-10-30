<template>
  <section class="profile-background">
    <div class="profile-section">
      <h4>sam-mooney-profile.md</h4>
      <p>
        Current computing student from Scotland with an interest in building
        software with a bit of personality. However I'm not opposed to building
        the bland stuff either ;)
      </p>
      <h4># current work</h4>
      <p>
        I'm currently working on my honours project, which aims to be a search
        engine for technical resources.
      </p>
      <h4># links</h4>
      <div class="socials">
        <a href="https://github.com/sammooneydev">
          <img
            src="../assets/github-mark-white.svg"
            alt="Github icon"
            class="icon"
          />
        </a>
        <a href="https://www.linkedin.com/in/sam-mooney-b8254632b">
          <img
            src="../assets/linkedin-app-white-icon.svg"
            alt="Linkedin icon"
            class="icon"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
h4 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  margin-top: 0;
  opacity: 0.7;
  color: #f9a825;
}

p {
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: 0;
  line-height: 1.5;
}

.profile-background {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 2rem;
  width: 100%;
}

.profile-section {
  background: #0a0f17;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  max-width: 600px;
  border-style: solid;
  border-width: 0.1rem;
  border-radius: 0.3rem;
  border-color: #111927;
}

.icon {
  width: 30px;
  height: 30px;
}

.socials {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>
