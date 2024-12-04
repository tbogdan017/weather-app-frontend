<script setup lang="ts">
import MainInfo from './components/MainInfo.vue';
</script>

<template>
    <div class="container">
      <MainInfo />
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('/background.svg');
  background-size: cover;
  font-family: 'Open Sans', sans-serif;
}
</style>
