<template>
    <div class="card">
        <h2>About Me</h2>
        <p>My name is Sam Mooney, I am a 4th year student studying computing at Abertay University. I'm currently on track for a 1st class degree</p>
    </div>
</template>

<style scoped>
/*import for heading font*/
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Space+Grotesk:wght@300..700&display=swap');


h2 {
    margin-bottom: 15px;
    font-family: "Archivo Black", sans-serif;
}

@keyframes fadeUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

@media (prefers-color-scheme: dark) {
    .card{
        width: 500px;
        height: 250px;
        background-image: url('../assets/retro-card-design-dark.svg');
        background-size:100% 100%;
        background-position: center;
        display: flex;
        flex-direction: column;
        justify-content: top;
        align-items: center;
        box-shadow: 0 4px 16px rgba(65,56,50, 0.30);
        border-radius: 3px;
        padding: 1.5rem;
        color: #f4eade;
        text-align: center;
        opacity: 0;
        transform: translateY(20px);
        animation: fadeUp 1s ease-out forwards;
    }
}

@media (prefers-color-scheme: light) {
    .card {
        width: 500px;
        height: 250px;
        background-image: url('../assets/retro-card-design.svg');
        background-size:100% 100%;
        background-position: center;
        display: flex;
        flex-direction: column;
        justify-content: top;
        align-items: center;
        box-shadow: 0 4px 16px rgba(0,0,0,0.18);
        border-radius: 3px;
        padding: 1.5rem;
        color: #2b2018;
        text-align: center;
        opacity: 0;
        transform: translateY(20px);
        animation: fadeUp 1s ease-out forwards;
    }
}
</style>