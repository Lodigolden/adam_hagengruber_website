<script setup>
import { useRouter } from 'vue-router'

const props = defineProps(['title', 'route'])
const router = useRouter()

const navigate = () => {
    router.push(props.route)
}
</script>

<template>
    <div class="card" @click="navigate">
        <h2 style="color: black">{{ title }}</h2>
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
