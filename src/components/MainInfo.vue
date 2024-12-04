<script setup lang="ts">
import { reactive, ref } from 'vue';
import WeatherInfo from './WeatherInfo.vue';
import Disclaimer from './Disclaimer.vue';
import State from '../request';
import Error from './Error.vue';

const state = reactive(new State());
const isActive = ref(false);

function moveDisclaimer() {
    isActive.value = true;
}

function showComponent() {
    state.getData();
    moveDisclaimer();
}
</script>

<template>
    <h3 style="color: #515659">Weather App</h3>
    <div class="search-wrapper">
        <input @keyup.enter="showComponent" type="text" placeholder="e.g. London" v-model="state.city">
        <button @click="showComponent" class="btn">Go</button>
    </div>
    <Disclaimer :class="{ active: isActive }" />
    <WeatherInfo v-if="state.isLoading" 
        :city="state.currentCity" 
        :temperature="state.temperature" 
        :description="state.description"
        :humidity="state.humidity" 
        :feelsLike="state.feelsLike" 
        :wind="state.wind"
        :pressure="state.pressure" 
        :uvIndex="state.uvIndex"
        :sunrise="state.sunrise"
        :sunset="state.sunset"
        :maxTemp="state.maxTemp"
        :minTemp="state.minTemp" 
        :date="state.date"
        :date1="state.date1"
        :date2="state.date2"
        :maxTemp1="state.maxTemp1"       
        :minTemp1="state.minTemp1" 
        :maxTemp2="state.maxTemp2"       
        :minTemp2="state.minTemp2" 
        :description1="state.description1"
        :description2="state.description2" 
        :isDay="state.isDay" />

    <Error v-if="state.isError && !state.isLoading" />
</template>

<style scoped>
.active {
    display: none;
}

.search-wrapper {
    margin-bottom: 1em;
    width: 50%;
    height: 9%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e2e2e2;
    opacity: 0.87;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

h3 {
    margin-top: 10em;
    margin-bottom: 0.5em;
    width: 50%;
}

input {
    width: 80%;
    height: 33%;
    font-size: 1rem;
    outline: none;
    border: none;
    border-radius: 5px;
    border-right-width: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.btn {
    width: 5%;
    height: 33%;
    border: none;
    border-left-width: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background-color: #81a9cc;
    color: #ffffff;
    position: relative;
}

.btn:hover {
    background-color: #415b75;
    transition: 0.3s;
}

.btn:active {
    box-shadow: 5px 5px 10px #a5b7cf;
}

.weather-info {
    width: 50%;
    height: 30%;
    background-color: blueviolet;
}

@media screen and (min-width: 1920px) {
    input {
        font-size: 1.5rem;
    }

    h3 {
        margin-top: 5.5em;
        font-size: 2rem;
    }

    .btn {
        font-size: 1.3rem;
    }
}

@media screen and (max-height: 730px) {
    .weather-info-wrapper {
        height: 25%;
    }

    h3 {
        margin-top: 4em;
    }
}

@media screen and (max-width: 500px) and (max-height: 940px) {
    .search-wrapper {
        width: 90%;
    }

    h3 {
        margin-top: 3em;
        width: 90%;
    }

    .btn {
        width: 10%;
    }
}

@media screen and (max-width: 360px) and (max-height: 800px) {
    .search-wrapper {
        width: 96%;
    }

    h3 {
        margin-top: 3em;
        width: 96%;
    }
}
</style>

