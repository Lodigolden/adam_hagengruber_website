<!-- A system-on-module using the STM32H7 MCU. -->

<script setup>
    // Components
    import HomeButton from '@/components/HomeButton.vue'
    import LinkButton from '@/components/LinkButton.vue'

    // Assets
    import BoardBottom from './assets/BoardBottom.png'
    import BoardTop from './assets/BoardTop.png'
    import PCBLayout from './assets/PCBLayout.png'
    import Picture from './assets/Picture.png'
</script>

<!------------------------------------------------------------------------------------------------->
<template>
    <HomeButton />
    
    <div>
        <h1 style="text-align: center">STM32 System-on-Module</h1>
    </div>

    <p>
        I wanted to design a board that contains all the necessary components to run a system,
        abstracting the complex routing and bring-up from the end user. The system-on-module seemed
        like a great way to do that, because I could pack a lot of processing power into a reusable
        interface and build a simple device tree using the Zephyr RTOS that would enable a user to
        quickly start developing.
    </p>

    <div className="grid-container">
        <img :src=PCBLayout class="resized-image" />
        <img :src=BoardTop class="resized-image" />
        <img :src=BoardBottom class="resized-image" />
        <img :src=Picture class="resized-image" />
    </div>

    <p>
        The most challenging part of this project was the PCB layout. The board is only about 1.5" x
        1.5", and has almost no comopnents on the bottom to maintain a low-profile footprint on any
        motherboard that uses it. Other than that, the SoM is a decent starting point for any project.
        It includes a powerful STM32H7 processor with 2MB of flash, 128MBit of DRAM that uses the MCU's
        flexible memory controller, and 16MBit of QSPI flash. It features a CP2102 for easy programming
        using a micro-USB cable, and a power OR'ing circuit that can source power from either the USB
        cable or the mainboard it's connected to. All unused GPIO are broken out onto the high-density
        connectors that send the signals to the mainboard.
    </p>

    <p>
        This project is open-source, so feel free to copy the gerbers and build your own! Click below
        for a link to the project Github.
    </p>

    <LinkButton
        title="GitHub"
        websiteURL="https://github.com/Lodigolden/stm32_system_on_module"
    />

    <p></p>
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
        grid-template-columns: repeat(2, minmax(250px, 1.0fr));
        gap: 2.0rem;
        place-items: center;
    }
</style>
