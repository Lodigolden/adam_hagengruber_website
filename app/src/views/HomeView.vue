<script setup>
    import CraftsPicture from './assets/crafts.png'
    import HardwareProjectsPicture from './assets/op_amp.png'
    import TitleCard from '../components/TitleCard.vue'
    import ToolsPicture from './assets/tools.png'
</script>

<template>
    <div>
        <h1 style="text-align: center">Adam's Website</h1>
    </div>
    <div className="grid-container">
        <TitleCard title="About" route="/about" />
        <TitleCard
            title="Hardware Projects"
            :coverImage=HardwareProjectsPicture
            route="/hardware-projects"
        />
        <TitleCard
            title="Tools"
            :coverImage=ToolsPicture
            route="/tools"
        />
        <TitleCard
            title="Crafts"
            :coverImage="CraftsPicture"
            route="/crafts"
        />
    </div>
</template>
