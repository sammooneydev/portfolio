<template>
  <section class="profile-background">
    <div class="profile-section">
      <h4>sam-mooney-profile.md</h4>
      <p>
        Current computing student from Scotland with an interest in building
        software with a bit of personality. However I'm not opposed to building
        the bland stuff either ;)
      </p>
    </div>
  </section>
</template>

<style scoped>
h4 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  margin-top: 0;
  opacity: 0.4;
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
</style>
