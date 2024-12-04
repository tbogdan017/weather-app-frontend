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
    height: 12%;
    padding: 1em;
    text-align: center;
    border: 1px solid red;
    border-radius: 10px;
    font-size: 1.2em;
    background-color: #e2e2e2;
}

@media screen and (max-width: 1920px) and (max-height: 1080px) {
    .error-wrapper {
        height: 10%;
    }
}

@media screen and (max-width: 1024px) and (max-height: 768px) {
    .error-wrapper {
        height: 14%;
    }
}

@media screen and (max-width: 500px) and (max-height: 940px) {
    .error-wrapper {
        width: 90%;
    }
}

@media screen and (max-width: 360px) and (max-height: 800px) {
    .error-wrapper {
        height: 18%;
    }
}
</style>