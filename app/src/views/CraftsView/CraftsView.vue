<script setup>
    import ArcadeMachinePicture from './ArcadeMachine/assets/ArcadeMachinePicture.png'
    import HomeButton from '../../components/HomeButton.vue'
    import TitleCard from '../../components/TitleCard.vue'
</script>

<template>
    <HomeButton />
    <div className="grid-container">
        <TitleCard
            title="Arcade Machine"
            :coverImage=ArcadeMachinePicture
            route="/crafts/arcade-machine"
        />
    </div>
</template>
