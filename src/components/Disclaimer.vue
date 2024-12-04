<script setup lang="ts">
</script>

<template>
    <div class="disclaimer-wrapper">
        Enter the city to find out the current weather and forecast for the following days!
    </div>
</template>

<style>
.disclaimer-wrapper {
    width: 50%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    font-size: 1.6em;
}

@media screen and (max-width: 500px) and (max-height: 940px) {
    .disclaimer-wrapper {
        width: 90%;
    }
}

@media screen and (max-width: 360px) and (max-height: 800px) {
    .disclaimer-wrapper {
        width: 90%;
        font-size: 1.2rem;
    }
}
</style>