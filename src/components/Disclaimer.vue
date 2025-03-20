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
    font-size: 1.6em;
}

@media screen and (992px <= width <= 1200px) {
   .disclaimer-wrapper {
    width: 62%;
   }
}

@media screen and (800px <= width <= 992px) {
   .disclaimer-wrapper {
    width: 72%;
   }
}

@media screen and (600px <= width <= 800px) {
    .disclaimer-wrapper {
        width: 82%;
    }
}

@media screen and (480px <= width <= 600px) {
    .disclaimer-wrapper {
        width: 90%;
    }
}

@media screen and (320px <= width <= 480px) {
    .disclaimer-wrapper {
        width: 98%;
    }
}
</style>