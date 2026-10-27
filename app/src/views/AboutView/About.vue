<!-- A page with personal information. -->

<script setup>
    // Components
    import HomeButton from '@/components/HomeButton.vue'

    // Assets
    import CougarPicture from './assets/Cougarhead.jpg'
</script>

<!------------------------------------------------------------------------------------------------->
<template>
    <HomeButton />

    <h1 style="text-align: center">My Background</h1>
    
    <p>
        Hi, I'm Adam! I was born in Madison, Wisconsin, but because my dad works for the forrest
        service we moved around a lot when I was younger. We eventually ended up in Helena,
        Montana where I went to high school and fell in love with the outdoors. 
    </p>
        
    <p>
        I attended Washington State University, where I jumped between majors A LOT. I think
        it's a blessing and a curse, but I've always had too many interests for my own good. I 
        spent time studying biomedical engineering, chemical engineering, veterinary and human
        medicine. During the COVID-19 pandemic, I took a bioinstrumentation course that exposed
        me to circuit design and some embedded programming, which helped me decide to settle
        on electrical engineering. I loved that the barrier-to-entry was so low, I could pick
        up an Arduino off Amazon and start building something new.
    </p>

    <div className="grid-container">
        <img :src=CougarPicture class="resized-image" />
    </div>

    <p>
        During undergrad, I interned at Schweitzer Engineering Laboratories (SEL) as an automation
        engineer in engineering services, writing PLC code and designing HMIs. After graduating,
        I joined SEL's engineering rotation program, spending 6 months a piece in 3 different divisions
        of the company: manufacturing test, R&D hardware engineering, and R&D firmware engineering.
        After graduating the program, I joined the hardware team I'd done a rotation with, and have
        worked on several awesome projects since then.
    </p>

    <h1 style="text-align: center">This Website</h1>
        
    <p>
        I built this website as a way to showcase some of the projects I've worked on. I'm
        obsessed with building things and learning new things in the process! It should be
        noted that I'm a hardware guy, not a frontend developer (if my weird design choices
        didn't already show that). But it seemed fun to get some front-end experience, and I
        have a few future projects in mind that could benefit from the practice, so I thought
        why not?
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
