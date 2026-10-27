<!-- The overview page for all tools. -->

<script setup>
    // Components
    import HomeButton from '@/components/HomeButton.vue'
    import Card from '@/components/Card.vue'
</script>

<!------------------------------------------------------------------------------------------------->
<template>
    <HomeButton />

    <h1 style="text-align: center">Tools</h1>

    <p style="text-align: center">
        A collection of tools I find useful during project development.
    </p>

    <div className="grid-container">
        <Card
            title="Devo"
        />
    </div>
</template>

<!------------------------------------------------------------------------------------------------->
<style scoped>
    .grid-container {
        display: grid;
        grid-template-columns: repeat(3, minmax(250px, 1.0fr));
        gap: 2.0rem;
        place-items: center;
    }
</style>
