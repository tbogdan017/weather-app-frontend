<script setup lang="ts">
import { computed } from 'vue';

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

const showDesc = computed(() => {
    const desc = props.description;

    const splitted = desc?.split(" ")
    if (splitted) {
       if (splitted.length === 7) {
        return `${splitted[3]} ${splitted[4]} ${splitted[5]} ${splitted[6]}`
       }
       return splitted.join(" ")
    }
})
</script>

<template>
    <div class="daily-info-wrapper">
        <div class="daily-info-wrapper__data">
            <p style="font-size: 1.2em; margin-bottom: -0.8em;">{{ date }}</p>
        </div>
        <div class="daily-info-wrapper__img">
            <img :src="src" alt="">
        </div>
        <div class="daily-info-wrapper__desc">
            <p style="font-weight: bold">{{ showDesc }}</p>
        </div>
        <div class="daily-info-wrapper__temp">
            <p style="font-size: 1.2em;">{{ `${minTemp}°/${maxTemp}°` }}</p>
        </div>
    </div>
</template>

<style>
.daily-info-wrapper {
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #47484a;
}

.daily-info-wrapper__desc {
    font-size: 1.1rem;
    height: fit-content;
    text-align: center;
    text-overflow: ellipsis;
}

.daily-info-wrapper__img {
    margin-top: 1em;
    transform: scale(0.8);
}

@media screen and (992px <= width <= 1200px) {
    .daily-info-wrapper__desc {
        height: 6vh;
    }
}

@media screen and (800px <= width <= 992px) {
    .daily-info-wrapper__desc {
        height: 7vh;
    }
}

@media screen and (600px <= width <= 800px) {
    .daily-info-wrapper__desc {
        height: 8vh;
    }
}

@media screen and (width <= 600px) {
    .daily-info-wrapper__desc {
        height: 8vh;
    }
}

@media screen and (320px <= width <= 480px) {
    .daily-info-wrapper__desc {
        height: 7vh;
    }

    .daily-info-wrapper__desc {
        font-size: 0.8rem;
    }
}
</style>
