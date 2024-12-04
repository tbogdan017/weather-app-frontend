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
    <div class="right-side-info">
        <!-- <p style="font-size: 1.5em; margin-bottom: 1em; color: #47484a">Feels like: {{ feelsLike + '°' }}</p> -->
        <div class="temp-limits">
            <p style="font-size: 1.5em; color: #47484a">Feels like: {{ feelsLike + '°' }}</p>
            <div class="min-temp">
                <img src="/temperature-min.svg" alt="">
                <p style="font-size: 1.5em; margin-right: 1em; color: #47484a">{{ minTemp + '°' }}</p>
            </div>
            <div class="max-temp">
                <img src="/temperature-max.svg" alt="">
                <p style="font-size: 1.5em; color: #47484a">{{ maxTemp + '°' }}</p>
            </div>
        </div>
        <div class="condition-wrapper">
            <Condition :type="'Humidity'" :value="props.humidity" />
            <Condition :type="'Wind'" :value="props.wind" />
            <Condition :type="'Pressure'" :value="props.pressure" />
            <Condition :type="'UV Index'" :value="props.uvIndex" />
        </div>
    </div>
</template>

<style>
.right-side-info {
    width: 50%;
    display: grid;
    gap: 1em;
    grid-template-rows: 0.7fr 1.3fr;
    opacity: 0.87;
    border-radius: 20px;
}

.temp-limits {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    background-color: #e2e2e2;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.temp-limits p {
    margin-left: auto;
    margin-right: auto;
    grid-column: 2 / 4;
}

.min-temp {
    display: flex;
    flex-direction: row;
    grid-column: 2 / 3;
    grid-row: 2;
}

.max-temp {
    display: flex;
    flex-direction: row;
    grid-column: 3 / 4;
    grid-row: 2;
}

.condition-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    background-color: #e2e2e2;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

@media screen and (min-width: 1920px) {
    .right-side-info {
        height: 100%;
    }

    .condition-wrapper {
        font-size: 1.6rem;
    }
    
    .temp-limits {
        font-size: 1.5rem;
    }
}

@media screen and (max-width: 500px) and (max-height: 940px) {
    .right-side-info {
        height: 95%;
    }

    .temp-limits {
        font-size: 0.8em;
    }

    .min-temp {
        transform: scale(0.9);
    }

    .max-temp {
        transform: scale(0.9);
    }

    .condition-wrapper {
        font-size: 1em;
    }
}

@media screen and (max-width: 360px) and (max-height: 800px) {
    .right-side-info {
        height: 92%;
    }
} 
</style>