<!-- Overview of all crafts projects. -->

<script setup>
    // Components
    import Card from '@/components/Card.vue'
    import HomeButton from '@/components/HomeButton.vue'

    // Assets
    import ArcadeMachineSymbol from './ArcadeMachineView/assets/ArcadeMachineSymbol.png'
</script>

<!------------------------------------------------------------------------------------------------->
<template>
    <HomeButton />

    <h1 style="text-align: center">Crafts</h1>

    <p style="text-align: center">
        A collection of random stuff I've made that doesn't have much to do with hardware or
        software, but was just fun to build.
    </p>

    <div className="grid-container">
        <Card
            title="Arcade Machine"
            :coverImage=ArcadeMachineSymbol
            route="/crafts/arcade-machine"
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
</style>
