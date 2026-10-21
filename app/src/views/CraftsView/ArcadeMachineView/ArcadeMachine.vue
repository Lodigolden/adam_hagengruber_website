<!-- An arcade machine built on a Raspberry Pi. -->

<script setup>
    // Components
    import HomeButton from '@/components/HomeButton.vue'

    // Assets
    import ArcadeMachineDane from './assets/ArcadeMachineDane.jpg'
</script>

<!------------------------------------------------------------------------------------------------->
<template>
    <HomeButton />

    <h1 style="text-align: center">Arcade Machine</h1>

    <p>
        My friend and I wanted to build an arcade machine (mostly because playing Pokemon
        on an arcade machine seemed awesome). This was a pretty simple project from a
        hardware perspective - we just used a Raspberry Pi running RetroPi, and I picked
        up some old speakers and a monitor from a second-hand store. I had some ROMs for old
        games that I couldn't play anymore on the original hardware. The fun part of this
        project was the woodworking that went into building the cabinet. Neither of us had many
        tools, so we had to implement some not-so-safe building practices, but I think it turned
        out really cool!
    </p>

    <div className="grid-container">
        <img :src=ArcadeMachineDane class="resized-image" />
    </div>

    <p>
        We're still planning to paint the arcade machine, and add a few extra features, so I'll
        make sure to keep this page updated.
    </p>
</template>

<!------------------------------------------------------------------------------------------------->
<style scoped>
    .resized-image {
        display: flex;
        max-width: 300px;
        height: auto;
        justify-content: center;
        align-items: center;
    }
    .grid-container {
        display: grid;
        grid-template-columns: repeat(1, minmax(250px, 1.0fr));
        gap: 2.0rem;
        place-items: center;
    }
</style>