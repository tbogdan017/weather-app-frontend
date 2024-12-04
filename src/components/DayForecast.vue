<script setup lang="ts">
const props = defineProps({
    type: String,
    src: String,
    src1: String,
    src2: String,
    date: String,
    maxTemp: Number,
    minTemp: Number,
    maxTemp1: Number,
    minTemp1: Number,
    maxTemp2: Number,
    minTemp2: Number,
    description: String,
    description1: String,
    description2: String
});
</script>

<template>
    <div class="current-day-info">
        <p style="font-size: 1.2em; margin-bottom: -0.8em;">{{ date }}</p>
        <img :src="src" alt="">
        <p style="font-size: 1.2em; font-weight: bold; margin-top: -1em;">{{ description }}</p>
        <p style="font-size: 1.2em;">{{ `${minTemp}°/${maxTemp}°` }}</p>
    </div>
</template>

<style>
.current-day-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 10vh;
    color: #47484a;
}

.current-day-info img {
    transform: scale(0.8)
}

@media screen and (min-width: 1920px) {
    .current-day-info {
        transform: scale(1.4);
    }
}
</style>
