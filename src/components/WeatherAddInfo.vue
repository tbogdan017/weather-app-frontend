<script setup lang="ts">
import Condition from './Condition.vue';

const props = defineProps({
    feelsLike: Number,
    maxTemp: Number,
    minTemp: Number,
    humidity: Number,
    wind: Number,
    pressure: Number,
    uvIndex: Number
});
</script>

<template>
    <div class="weather-wrapper__stats">
        <div class="weather-wrapper__stats-temp">
            <span style="color: #47484a">Feels like: {{ feelsLike + '°' }}</span>
            <div class="weather-wrapper__stats-temp-limits">
                <div class="weather-wrapper__stats-temp-limits--min">
                    <img src="/temperature-min.svg" alt="">
                    <p style="color: #47484a">{{ minTemp + '°' }}</p>
                </div>
                <div class="weather-wrapper__stats-temp-limits--max">
                    <img src="/temperature-max.svg" alt="">
                    <p style="color: #47484a">{{ maxTemp + '°' }}</p>
                </div>
            </div>
        </div>
        <div class="weather-wrapper__stats-condition">
            <Condition :type="'Humidity'" :value="props.humidity" />
            <Condition :type="'Wind'" :value="props.wind" />
            <Condition :type="'Pressure'" :value="props.pressure" />
            <Condition :type="'UV Index'" :value="props.uvIndex" />
        </div>
    </div>
</template>

<style>
.weather-wrapper__stats {
    width: 50%;
    display: grid;
    gap: 1em;
    grid-template-rows: 0.7fr 1.3fr;
    opacity: 0.87;
    border-radius: 20px;
}

.weather-wrapper__stats-temp {
    width: 100%;
    height: 100%;
    display: flex;
    gap: 0.5em;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 20px;
    background-color: #e2e2e2;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.weather-wrapper__stats-temp span {
    width: 60%;
    font-size: 1.3rem;
    text-align: center;
}

.weather-wrapper__stats-temp p {
    font-size: 1.3rem;
}

.weather-wrapper__stats-temp-limits {
    display: flex;
    gap: 1em;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.weather-wrapper__stats-temp-limits--min,
.weather-wrapper__stats-temp-limits--max {
    display: flex;
    flex-direction: row;
    gap: 0.3em;
}

.weather-wrapper__stats-condition {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5em;
    align-items: center;
    background-color: #e2e2e2;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

@media screen and (320px <=width <=480px) {
    .weather-wrapper__stats-temp span {
        font-size: 1rem;
    }

    .weather-wrapper__stats-temp-limits--min,
    .weather-wrapper__stats-temp-limits--max {
        transform: scale(0.8);
    }
}
</style>