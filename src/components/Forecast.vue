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
    width: 56%;
}

.forecast-weather-info {
    margin-top: 0.5em;
    width: 56%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #e2e2e2;
    opacity: 0.87;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

@media screen and (2000px <= width <= 2560px) {
    h3 {
        width: 48%;
    }

    .forecast-weather-info {
        width: 48%;
    }
}

@media screen and (min-width: 1600px) and (min-height: 810px) {
    h3 {
        font-size: 1.5rem;
    }
}

@media screen and (992px <= width <= 1200px) {
    h3 {
        width: 62%;
    }

    .forecast-weather-info {
        width: 62%;
    }
}

@media screen and (800px <= width <= 992px) {
    h3 {
        width: 72%;
    }

    .forecast-weather-info {
        width: 72%;
    }
}

@media screen and (600px <= width <= 800px) {
    h3 {
        width: 82%;
    }
    
    .forecast-weather-info {
        width: 82%;
    }
}

@media screen and (480px <= width <= 600px) {    
    h3 {
        width: 90%;
    }

    .forecast-weather-info {
        width: 90%;
    }
}

@media screen and (320px <= width <= 480px) {
    h3 {
        width: 98%;
    }

    .forecast-weather-info {
        width: 98%;
    }
}
</style>