<script setup>
    import DaneArcadeMachine from './assets/arcade_machine_dane.jpg'
    import HomeButton from '../../components/HomeButton.vue'
</script>

<template>
    <HomeButton />
    <div>
        <h1 style="text-align: center">Arcade Machine</h1>
        <p>
            My friend and I wanted to build an arcade machine (mostly because playing Pokemon
            on an arcade machine seemed awesome). This was a pretty simple project from a
            hardware perspective - we just used a Raspberry Pi running RetroPi, and I picked
            up some old speakers and a monitor from a second-hand store. The fun part of this
            project was the woodworking that went into building the cabinet. Neither of us had many
            tools, so we had to implement some not-so-safe building practices, but I think it turned
            out really cool!
        </p>
        <img src="./assets/arcade_machine_dane.jpg" class="resized-image" />
        <p>
            We're still planning to paint the arcade machine, and add a few extra features, so I'll
            make sure to keep this page updated.
        </p>
    </div>
</template>

<style scoped>
.resized-image {
    display: flex;
    max-width: 300px;
    height: auto;
    justify-content: center;
    align-items: center;
}
</style>
