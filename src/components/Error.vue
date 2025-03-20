<script setup lang="ts">
</script>

<template>
    <div class="error-wrapper">
        <strong style="color: red">Error!</strong>
       <p>Unfortunately, there was no city with that name. Please try again.</p>
    </div>
</template>

<style>
.error-wrapper {
    width: 50%;
    height: 10%;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 1px solid red;
    border-radius: 10px;
    font-size: 1.2em;
    background-color: #e2e2e2;
}

@media screen and (2000px <= width <= 2560px) {
    .error-wrapper {
        width: 48%;
    }
}

@media screen and (width <= 800px) {
    .error-wrapper {
        width: 70%;
    }
}

@media screen and (width <= 480px) {
    .error-wrapper {
        width: 80%;
    }
}
</style>