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

    <p style="text-align: center">
        A collection of hardware projects I've finished. Each project contains a link to my Github,
        where I've open-sourced the project. Some of these projects also include firmware, but if
        the project has any hardware component it's stored here.
    </p>
    
    <div className="grid-container">
        <Card
            title="STM32 SoM"
            :coverImage=STM32SoMSymbol
            route="/hardware-projects/stm32-som"
        />

        <Card
            title="Business Card"
            route="/hardware-projects/business-card"
        />
    </div>
</template>

<!------------------------------------------------------------------------------------------------->
<style scoped>
    .grid-container {
        display: grid;
        grid-template-columns: repeat(3, minmax(250px, 1.0fr));
        gap: 2.0rem;
        place-items: center;
    }
    .resized-image {
        display: flex;
        max-width: 300px;
        height: auto;
        justify-content: center;
        align-items: center;
    }
</style>

