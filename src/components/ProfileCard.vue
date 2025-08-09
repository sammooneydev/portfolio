<template>
    <div class="card">
        <p>still a work in progress!</p>
    </div>
</template>

<style scoped>
@media (prefers-color-scheme: dark) {
    .card{
        width: 320px;
        height: 180px;
        background-image: url('../assets/retro-card-design-dark.svg');
        background-size:cover;
        background-position: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 0 4px 16px rgba(65,56,50, 0.30);
        border-radius: 3px;
        padding: 1.5rem;
        color: #f4eade;
        text-align: center;
    }
}

@media (prefers-color-scheme: light) {
    .card {
        width: 320px;
        height: 180px;
        background-image: url('../assets/retro-card-design.svg');
        background-size:cover;
        background-position: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 0 4px 16px rgba(0,0,0,0.18);
        border-radius: 3px;
        padding: 1.5rem;
        color: #2b2018;
        text-align: center;
    }
}

</style>