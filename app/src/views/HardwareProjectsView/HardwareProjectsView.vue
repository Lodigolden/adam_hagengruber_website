<script setup>
    import HomeButton from '../../components/HomeButton.vue'
    import TitleCard from '../../components/TitleCard.vue'
</script>

<template>
    <HomeButton />
    <div className="grid-container">
        <TitleCard
            title="STM32 SoM"
            route="/hardware-projects/stm32-system-on-module"
        />
    </div>
</template>
