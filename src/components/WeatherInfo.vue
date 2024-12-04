<script setup lang="ts">
import { computed } from 'vue';
import WeatherAddInfo from './WeatherAddInfo.vue';
import Forecast from './Forecast.vue';
const props = defineProps({
    city: String,
    country: String,
    temperature: Number,
    description: String,
    humidity: Number,
    icon: String,
    feelsLike: Number,
    wind: Number,
    pressure: Number,
    uvIndex: Number,
    sunrise: String,
    sunset: String,
    maxTemp: Number,
    minTemp: Number,
    date: String,
    date1: String,
    date2: String,
    maxTemp1: Number,
    minTemp1: Number,
    maxTemp2: Number,
    minTemp2: Number,
    description1: String,
    description2: String,
    isDay: Number
});

function changeIcon(param: string) {
    if (props.isDay === 1) {
   switch (param) {
        case 'sunny':
            return '/clear-day.svg';
        case 'clear':
            return '/clear-day.svg';
        case 'partly cloudy':
            return '/partly-cloudy-day.svg';
        case 'cloudy':
            return '/cloudy.svg';
        case 'overcast':
            return '/overcast.svg';
        case 'mist':
            return '/mist.svg';
        case 'patchy rain possible':
            return '/raindrops.svg';
        case 'light drizzle':
            return '/drizzle.svg';
        case 'freezing drizzle':
            return '/drizzle.svg';
        case 'heavy freezing drizzle':
            return '/drizzle.svg';
        case 'patchy snow possible':
            return '/snow.svg';
        case 'patchy sleet possible':
            return '/sleet.svg';
        case 'moderate or heavy sleet':
            return '/sleet.svg';
        case 'light sleet':
            return '/sleet.svg';
        case 'blowing snow':
            return '/snow.svg';
        case 'light snow':
            return '/snow.svg';
        case 'patchy light snow':
            return '/snow.svg';
        case 'patchy moderate snow':
            return '/snow.svg';
        case 'moderate snow':
            return '/snow.svg';
        case 'patchy heavy snow':
            return '/snow.svg';
        case 'heavy snow':
            return '/snow.svg';
        case 'patchy light rain':
            return '/rain.svg';
        case 'patchy rain nearby': 
            return '/rain.svg';
        case 'light rain':
            return '/rain.svg';
        case 'moderate rain at times':
            return '/rain.svg';
        case 'moderate rain':
            return '/rain.svg';
        case 'heavy rain at times':
            return '/rain.svg';
        case 'heavy rain':
            return '/rain.svg';
        case 'light freezing rain':
            return '/rain.svg';
        case 'moderate or heavy freezing rain':
            return '/rain.svg';
        case 'light rain shower':
            return '/rain.svg';
        case 'moderate or heavy rain shower':
            return '/rain.svg';
        case 'torrential rain shower':
            return '/rain.svg';
        case 'light sleet showers':
            return '/sleet.svg';
        case 'moderate or heavy sleet showers':
            return '/sleet.svg';
        case 'light snow showers':
            return '/snow.svg';
        case 'moderate or heavy snow showers':
            return '/snow.svg';
        case 'patchy light rain with thunder':
            return '/thunderstorms.svg';
        case 'moderate or heavy rain with thunder':
            return '/thunderstorms.svg';
        case 'patchy light snow with thunder':
            return '/snow.svg';
        case 'moderate or heavy snow with thunder':
            return '/snow.svg';
        case 'ice pellets':
            return '/snow.svg';
        case 'light showers of ice pellets':
            return '/snow.svg';
        case 'moderate or heavy showers of ice pellets':
            return '/snow.svg';
        case 'fog':
            return '/fog.svg';
        case 'freezing fog':
            return '/fog.svg';
        case 'blizzard':
            return '/snow.svg';
        default:
            console.log('icon not found')
    } 
    } else {
        switch(param) {
        case 'sunny':
            return '/clear-day.svg';
        case 'clear': 
            return '/clear-night.svg';
        case 'partly cloudy': 
            return '/partly-cloudy-night.svg'
        case 'cloudy':
            return '/cloudy.svg';
        case 'overcast':
            return '/overcast.svg';
        case 'mist':
            return '/mist.svg';
        case 'patchy rain possible':
            return '/partly-cloudy-night-rain.svg';
        case 'light drizzle':
            return '/partly-cloudy-night-rain.svg';
            case 'light freezing rain':
            return '/partly-cloudy-night-rain.svg';
        case 'freezing drizzle':
            return '/partly-cloudy-night-rain.svg';
        case 'heavy freezing drizzle':
            return '/partly-cloudy-night-rain.svg';
        case 'patchy snow possible':
            return '/sleet.svg';
        case 'patchy sleet possible':
            return '/sleet.svg';
        case 'moderate or heavy sleet':
            return '/sleet.svg';
        case 'light sleet':
            return '/sleet.svg';
        case 'blowing snow':
            return '/snow.svg';
        case 'light snow':
            return '/snow.svg';
        case 'patchy light snow':
            return '/snow.svg';
        case 'patchy moderate snow':
            return '/snow.svg';
        case 'moderate snow':
            return '/snow.svg';
        case 'patchy heavy snow':
            return '/snow.svg';
        case 'heavy snow':
            return '/snow.svg';
        case 'patchy light rain':
            return '/partly-cloudy-night-rain.svg';
        case 'patchy rain nearby': 
            return '/partly-cloudy-night-rain.svg';
        case 'light rain':
            return '/partly-cloudy-night-rain.svg';  
        case 'moderate rain at times':
            return '/partly-cloudy-night-rain.svg';
        case 'moderate rain':
            return '/partly-cloudy-night-rain.svg';  
        case 'heavy rain at times':
            return '/partly-cloudy-night-rain.svg';
        case 'heavy rain':
            return '/partly-cloudy-night-rain.svg';
        case 'moderate or heavy freezing rain':
            return '/partly-cloudy-night-rain.svg';
        case 'light rain shower':
            return '/partly-cloudy-night-rain.svg';
        case 'moderate or heavy rain shower':
            return '/partly-cloudy-night-rain.svg';
        case 'torrential rain shower':
            return '/partly-cloudy-night-rain.svg';
        case 'light sleet showers':
            return '/sleet.svg';
        case 'moderate or heavy sleet showers':
            return '/sleet.svg';
        case 'light snow showers':
            return '/snow.svg';
        case 'moderate or heavy snow showers':
            return '/snow.svg';
        case 'patchy light rain with thunder':
            return '/thunderstorms.svg';
        case 'moderate or heavy rain with thunder':
            return '/thunderstorms.svg';
        case 'patchy light snow with thunder':
            return '/snow.svg';
        case 'moderate or heavy snow with thunder':
            return '/snow.svg';
        case 'ice pellets':
            return '/snow.svg';
        case 'light showers of ice pellets':
            return '/snow.svg';
        case 'moderate or heavy showers of ice pellets':
            return '/snow.svg';
        case 'fog':
            return '/fog.svg';
        case 'freezing fog':
            return '/fog.svg';
        case 'blizzard':
            return '/snow.svg';
        default:
            console.log('icon not found')
        }
    }
};

const imgBack = computed(() => {
    if (props.description) {
        const backgoundIcon = props.description.toLowerCase().trim();
        return changeIcon(backgoundIcon);
    }
});

const imgBack1 = computed(() => {
    if (props.description1) {
        const forecastIcon = props.description1.toLowerCase().trim();
        return changeIcon(forecastIcon);
    }
});

const imgBack2 = computed(() => {
    if (props.description2) {
        const forecastIcon1 = props.description2.toLowerCase().trim();
        return changeIcon(forecastIcon1);
    }
});
</script>

<template>
    <div class="weather-info-wrapper">
        <div class="left-side-info">
            <h3 style="color: #47484a">{{ city }}</h3>
            <div class="temp-info">
                <img :src="imgBack" alt="" style="width: 25%; margin-top: 0.5em" />
                <p style="margin-left: 0.2em; color: #1a2a4a">{{ temperature + '°' }}</p>
            </div>
            <p style="color: #47484a;">{{ description }}</p>
            <div class="sunrise">
                <img src="/sunrise.svg" alt="">
                <p style="align-self: center; color: #47484a">{{ sunrise }}</p>
                <img src="/sunset.svg" alt="">
                <p style="align-self: center; color: #47484a">{{ sunset }}</p>
            </div>
        </div>

        <WeatherAddInfo
            :feelsLike="props.feelsLike"
            :minTemp="props.minTemp"
            :maxTemp="props.maxTemp"
            :humidity="props.humidity"
            :wind="props.wind"
            :pressure="props.pressure" 
            :uvIndex="props.uvIndex" />
    </div>
        <Forecast 
            :src="imgBack"
            :src1="imgBack1"
            :src2="imgBack2"
            :date="props.date"
            :date1="props.date1"
            :date2="props.date2"
            :maxTemp="props.maxTemp"
            :minTemp="props.minTemp"
            :maxTemp1="props.maxTemp1"
            :minTemp1="props.minTemp1"
            :maxTemp2="props.maxTemp2"
            :minTemp2="props.minTemp2"
            :description="props.description"
            :description1="props.description1"
            :description2="props.description2" />
</template>

<style scoped>
p {
    font-size: 1.3rem;
}

.sunrise { 
    margin-left: -1em;
    height: 20%;
    display: flex;
    justify-content: flex-start;
}

.sunrise img {
    max-width: 15%;
}

.weather-info-wrapper { 
    width: 50%;
    height: 30%;
    display: flex;
    margin-bottom: 1em;
}

.weather-info-wrapper > * + * { 
    margin-left: 1rem;
}

.left-side-info {
    width: 50%;
    padding-left: 2em; 
    background-color: #e2e2e2;
    opacity: 0.87; 
    border-radius: 20px; 
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

h3 {
    width: 100%;
    font-size: 1.8rem;
}

.temp-info {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.temp-info img {
    transform: scale(1.4);
}

.temp-info p {
    font-size: 4rem;
}

.current-day-info {
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 10vh;
    color: #47484a;
}

.current-day-info img {
    transform: scale(0.8)
}

@media screen and (min-width: 1920px) {
    .weather-info-wrapper {
        height: 35%;
    }

    .left-side-info {
        height: 100%;
    }

    h3 {
        font-size: 2.8rem;
    }

    .temp-info p {
        font-size: 5rem;
    }

    .sunrise p {
        font-size: 1.8rem;
    }

    p {
        font-size: 2.2rem;
    }
}

@media screen and (max-height: 730px) {
    .weather-info-wrapper {
        height: 32%;
    }
}

@media screen and (max-width: 500px) and (max-height: 940px) {
    .weather-info-wrapper {
        width: 90%;
        margin-bottom: 0;
    }

    .left-side-info {
        padding-left: 1.2em;
        height: 95%;
    }

    .temp-info p {
        font-size: 2.5rem;
    }

    .sunrise {
        margin-top: 0.5em;
    }

    h3 {
        font-size: 1.5rem;
    }
}

@media screen and (max-width: 414px) and (max-height: 896px) {
    .sunrise p {
        font-size: 1rem;
    }
}

@media screen and (max-width: 360px) and (max-height: 800px) {
    .weather-info-wrapper {
        width: 96%;
    }

    .left-side-info {
        height: 92%;
    }
    .temp-info p {
        font-size: 2rem;
    }

    .sunrise p {
        font-size: 1rem;
    }

    h3 {
        font-size: 1.2rem;
    }
}
</style>