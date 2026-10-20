<!-- The overview page for all hardware projects. -->

<script setup>
    // Components
    import HomeButton from '@/components/HomeButton.vue'
    import TitleCard from '../../components/TitleCard.vue'

    // Assets
    import STM32SoMPicture from './STM32_SoM/assets/top.png'
</script>

<!------------------------------------------------------------------------------------------------->
<template>
    <HomeButton />

    <div>
        <h1 style="text-align: center">Hardware Projects</h1>
    </div>
    
    <div className="grid-container">
        <TitleCard
            title="STM32 SoM"
            :coverImage=STM32SoMPicture
            route="/hardware-projects/stm32-system-on-module"
        />
    </div>
</template>
