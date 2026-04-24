<script setup>
    import TitleCard from '../components/TitleCard.vue'
</script>

<template>
    <div>
        <h1 style="text-align: center">Home Page</h1>
    </div>
    <TitleCard title="About" route="/about" />
    <TitleCard title="Hardware Projects" route="/hardware-projects" />
    <TitleCard title="Tools" route="/tools" />
    <TitleCard title="Crafts" route="/crafts" />
</template>
