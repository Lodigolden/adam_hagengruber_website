<!-- A page with personal information. -->

<script setup>
    // Components
    import Card from '@/components/Card.vue'
    import HomeButton from '@/components/HomeButton.vue'

    // Assets
    import CougarPicture from './assets/Cougarhead.jpg'
    import ResumeSymbol from './ResumeView/assets/ResumeSymbol.png'
    import SELPicture from './assets/SELPicture.png'
    import WebsiteSymbol from './WebsiteView/assets/WebsiteSymbol.png'
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

    <div className="grid-container">
        <img :src=SELPicture class="resized-image" />
    </div>

    <p></p>

    <div className="grid-container-card">
        <Card
            title="This Website"
            :coverImage=WebsiteSymbol
            route="/about/website"
        />

        <Card
            title="Resume"
            :coverImage=ResumeSymbol
            route="/about/resume"
        />
    </div>
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
    .grid-container-card {
        display: grid;
        grid-template-columns: repeat(2, minmax(250px, 1.0fr));
        gap: 2.0rem;
        place-items: center;
    }
</style>
