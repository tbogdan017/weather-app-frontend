<script setup lang="ts">
import DayForecast from './DayForecast.vue';

const props = defineProps({
    src: String,
    src1: String,
    src2: String,
    date: String,
    date1: String,
    date2: String,
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
    <h3 style="color: #47484a;">Forecast</h3>
    <div class="forecast-weather-info">
        <DayForecast 
        :type="'current-day'" 
        :date="props.date" 
        :minTemp="minTemp" 
        :maxTemp="minTemp" 
        :description="description" 
        :src="src" />

        <DayForecast 
        :type="'tomorrow'" 
        :date="props.date1" 
        :minTemp="minTemp1" 
        :maxTemp="maxTemp1" 
        :description="description1" 
        :src="src1" />

        <DayForecast 
        :type="'after-tomorrow'" 
        :date="props.date2" 
        :minTemp="minTemp2" 
        :maxTemp="maxTemp2" 
        :description="description2" 
        :src="src2" />
    </div>
</template>

<style>
h3 {
    width: 50%;
}

.forecast-weather-info {
    margin-top: 0.5em;
    width: 50%;
    height: 15%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #e2e2e2;
    opacity: 0.87;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

@media screen and (min-width: 1920px) {
    h3 {
        font-size: 2rem;
    }
}

@media screen and (max-width: 1280px) {
    .forecast-weather-info {
        height: 17%;
    }
}

@media screen and (max-width: 500px) and (max-height: 940px) {
    .forecast-weather-info {
        width: 90%;
        height: 15%;
        font-size: 0.75rem;
        text-align: center;
    }

    h3 {
        width: 85%;
    }
}

@media screen and (max-width: 360px) and (max-height: 800px) {
    .forecast-weather-info {
        width: 96%;
        height: 18%;
    }

    h3 {
        width: 96%;
    }
}
</style>