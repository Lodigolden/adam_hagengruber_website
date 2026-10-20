<!-- A tile component that will navigate the user to a new website page. -->

<script setup>
import { useRouter } from 'vue-router'
import emptyImage from './assets/empty_image.png'

const props = defineProps({
    title: {
        type: String,
        default: 'Title'
    },
    coverImage: {
        type: String,
        default: emptyImage
    },
    route: {
        type: [String, Object],
        default: '/'
    }
})

const router = useRouter()

/**
 * Takes the user to the new page.
 */
const navigate = () => {
    router.push(props.route)
}
</script>

<!------------------------------------------------------------------------------------------------->
<template>
    <div class="card" @click="navigate">
        <h2 style="color: black">{{ title }}</h2>
        <img
            :src=coverImage
            :alt="props.title"
            class="card-img"
        />
    </div>
</template>

<!------------------------------------------------------------------------------------------------->
<style scoped>
.card {
    border: 1px solid black;
    border-radius: 8px;
    background-color: #feda6a;
    overflow: hidden;
    width: 250px;
    height: 250px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 20px rgba(254, 218, 106, 0.15);
}
</style>
