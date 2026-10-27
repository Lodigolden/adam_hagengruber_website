<!-- A picture carousel based on a tutorial from Medium -->

<script setup>
defineProps({
    images: {
        type: Array,
        default: () => []
    }
})
</script>

<!------------------------------------------------------------------------------------------------->
<template>
    <v-carousel
        v-if="images && images.length"
        width="600"
        height="600"
        class="picture-carousel"
        hide-delimiters
    >
        <v-carousel-item
            v-for="(image, index) in images"
            :key="`${image}-${index}`"
            cover
            class="carousel-item"
        >
            <img :src="image" alt="Project photo" class="carousel-image" />
        </v-carousel-item>
    </v-carousel>
</template>

<!------------------------------------------------------------------------------------------------->
<style scoped>
    .picture-carousel {
        max-width: 600px;
        margin: 0 auto;
        background: transparent;
    }
    .carousel-item {
        background: transparent !important;
        overflow: hidden;
    }
    .carousel-image {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
        background: transparent;
    }
</style>
