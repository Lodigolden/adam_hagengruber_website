<!-- The website main page. -->

<script setup>
    // Components
    import Card from '@/components/Card.vue'
    import LinkButton from '@/components/LinkButton.vue'

    // Assets
    import CraftsSymbol from '@/views/CraftsView/assets/CraftsSymbol.png'
    import HardwareProjectsSymbol from '@/views/HardwareProjectsView/assets/HardwareProjectsSymbol.png'
    import ToolsSymbol from '@/views/ToolsView/assets/ToolsSymbol.png'
</script>

<!------------------------------------------------------------------------------------------------->
<template>
    <h1 style="text-align: center">Adam's Website</h1>

    <div className="grid-container">
        <Card
            title="About"
            route="/about"
        />

        <Card
            title="Hardware Projects"
            :coverImage=HardwareProjectsSymbol
            route="/hardware-projects"
        />

        <Card
            title="Crafts"
            :coverImage=CraftsSymbol
            route="/crafts"
        />

        <Card
            title="Tools"
            :coverImage=ToolsSymbol
            route="/tools"
        />

        <Card
            title="Software Projects"
        />
    </div>

    <LinkButton
        title="GitHub"
        websiteURL="https://github.com/Lodigolden"
    />

    <LinkButton
        title="LinkedIn"
        websiteURL="https://www.linkedin.com/in/adam-hagengruber-aa1940196"
    />
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
