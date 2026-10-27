<!-- A PCB-based business card. -->

<script setup>
    // Components
    import HomeButton from '@/components/HomeButton.vue'
    import LinkButton from '@/components/LinkButton.vue'
    import PictureCarousel from '@/components/PictureCarousel.vue'

    // Assets
    import BoardBottom from './assets/BoardBottom.png'
    import BoardTop from './assets/BoardTop.png'
    import PCBLayout from './assets/PCBLayout.png'

    const images = [
        BoardBottom,
        BoardTop,
        PCBLayout
    ]
</script>

<!------------------------------------------------------------------------------------------------->
<template>
    <HomeButton title="Back" path="/hardware-projects" />

    <h1 style="text-align: center">PCB Business Card</h1>

    <p>
        I saw a cool design online where someone made a PCB business card, but it didn't really do
        anything. I wanted to desing a business card that, on top of conveying my information, could
        also have some sort of function for the user. I settled on a card that could work as either
        a clock or a thermometer.
    </p>

    <PictureCarousel :images="images" />

    <LinkButton
        title="GitHub"
        websiteURL="https://github.com/Lodigolden/business_card"
    />
</template>
