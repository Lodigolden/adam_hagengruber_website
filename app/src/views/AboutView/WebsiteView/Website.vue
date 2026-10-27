<!-- A page detailing the design of this website. -->

<script setup>
    // Components
    import HomeButton from '@/components/HomeButton.vue'
    import LinkButton from '@/components/LinkButton.vue'
</script>

<!------------------------------------------------------------------------------------------------->
<template>
    <HomeButton title="Back" path="/about" />

    <h1 style="text-align: center">This Website</h1>

    <p>
        I built this website as a way to showcase some of the projects I've worked on. I'm
        obsessed with building things and learning new things in the process! It should be
        noted that I'm a hardware guy, not a frontend developer (if my weird design choices
        didn't already show that). But it seemed fun to get some front-end experience, and I
        have a few future projects in mind that could benefit from the practice, so I thought
        why not?
    </p>

    <p>
        I intend on doing some front-end development for a Yocto-based computer as part of a
        future project, so this website also serves as a great way for me to learn a bit that
        I can hopefully reuse in that project.
    </p>

    <LinkButton
        title="GitHub"
        websiteURL="https://github.com/Lodigolden/adam_hagengruber_website"
    />
</template>
