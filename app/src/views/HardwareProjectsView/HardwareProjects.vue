<!-- The overview page for all hardware projects. -->

<script setup>
    // Components
    import HomeButton from '@/components/HomeButton.vue'
    import Card from '@/components/Card.vue'

    // Assets
    import STM32SoMSymbol from './STM32SoMView/assets/BoardTop.png'
</script>

<!------------------------------------------------------------------------------------------------->
<template>
    <HomeButton />

    <h1 style="text-align: center">Hardware Projects</h1>
    
    <div className="grid-container">
        <Card
            title="STM32 SoM"
            :coverImage=STM32SoMSymbol
            route="/hardware-projects/stm32-som"
        />
    </div>
</template>

<!------------------------------------------------------------------------------------------------->
<style scoped>
    .resized-image {
        display: flex;
        max-width: 300px;
        height: auto;
        justify-content: center;
        align-items: center;
    }
</style>

