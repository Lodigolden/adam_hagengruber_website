<!-- A PDF viewer based on vue-pdf-embed -->

<script setup>
    // Components
    import { ref } from 'vue'
    import VuePdfEmbed from 'vue-pdf-embed'

    const props = defineProps({
        doc: {
            type: String
        }
    })

    const pdfSource = ref(props.doc)
</script>

<!------------------------------------------------------------------------------------------------->
<template>
    <div class="pdf-container">
        <VuePdfEmbed :source="pdfSource" class="pdf-document" />
    </div>
</template>

<!------------------------------------------------------------------------------------------------->
<style scoped>
    .pdf-container {
        position: relative;
        width: 100%;
        max-width: 700px;
        height: 400px;
        margin: 20px auto;
        overflow-y: auto;
        overflow-x: hidden;
        border: 1px solid #ccc;
        border-radius: 8px;
        background-color: #f5f5f5;
        box-sizing: border-box;
        transition: width 0.3s ease, height 0.3s ease;
        z-index: 1;
    }
</style>
