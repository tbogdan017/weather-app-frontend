<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    type: String,
    value: Number,
});

const defineType = computed(() => {
    switch(props.type) {
        case 'Humidity':
            return `${props.value}%`;
        case 'Wind':
            return `${props.value}kph`;
        case 'Pressure':
            return `${props.value}mb`;
        case 'UV Index':
            return `${props.value}uv`
    }
});

const defineImage = computed(() => {
    switch(props.type) {
        case 'Humidity':
            return '/humidity.svg';
        case 'Wind':
            return '/wind.svg';
        case 'Pressure':
            return '/barometer.svg';
        case 'UV Index': 
            return '/uv-index.svg'
    }
});
</script>

<template>
    <div class="condition-info">
        <p style="color: #47484a; font-size: 1.2em; font-weight: bold">{{props.type}}</p>
        <div class="cond">
            <img :src="defineImage" alt="">
            <p style="color: #47484a;">{{defineType}}</p>
        </div>
    </div>
</template>

<style>
.condition-info {
    width: 100%;
    margin-bottom: 0.5em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.cond {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

@media screen and (max-width: 540px) and (max-height: 940px) {
    .condition-info {
        font-size: 0.8rem;
    }
}
</style>
