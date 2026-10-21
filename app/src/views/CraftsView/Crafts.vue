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
    <div className="grid-container">
        <Card
            title="Arcade Machine"
            :coverImage=ArcadeMachineSymbol
            route="/crafts/arcade-machine"
        />
    </div>
</template>
