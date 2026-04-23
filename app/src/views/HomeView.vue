<script setup>
    import { useRouter } from 'vue-router'

    const router = useRouter()

    const goToAbout = () => {
        router.push('/about')
    }

    const goToHardwareProjects = () => {
        router.push('hardware-projects')
    }
</script>

<template>
    <div class="home">
        <h1 style="text-align: center">Home Page</h1>
    </div>
    <div class="card" @click="goToAbout">
        <h2 style="color: black">About</h2>
    </div>
    <div class="card" @click="goToHardwareProjects">
        <h2 style="color: black">Hardware Projects</h2>
    </div>
</template>

<style scoped>
.card {
    border: 1px solid black;
    border-radius: 8px;
    background-color: #feda6a;
    overflow: hidden;
    width: 250px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 20px rgba(254, 218, 106, 0.15);
}
</style>
