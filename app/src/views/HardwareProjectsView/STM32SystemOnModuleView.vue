<script setup>
    import HomeButton from '../../components/HomeButton.vue'
</script>

<template>
    <HomeButton />
    <div>
        <h1 style="text-align: center">STM32 System-on-Module</h1>
    </div>
    <p>
        I wanted to design a board that contains all the necessary components to run a system,
        abstracting the complex routing and bring-up from the end user. 
    </p>
</template>

<style scoped>
.resized-image {
    display: flex;
    max-width: 300px;
    height: auto;
    justify-content: center;
    align-items: center;
}
</style>
