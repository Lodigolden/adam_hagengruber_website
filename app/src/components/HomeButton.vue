<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
    router.push('/')
}
</script>

<template>
    <div class="home-button" @click="goHome">
        <p style="color: black">Home</p>
    </div>
</template>

<style scoped>
.home-button {
    text-decoration: none;
    text-align: center;
    color: black;
    background-color: #feda6a;
    border: 1px solid black;
    border-radius: 8px;
    cursor: default;
    width: 80px;
}
.home-button:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 20px rgba(254, 218, 106, 0.15);
}
</style>
