<script setup>
    import { useRouter } from 'vue-router'

    const router = useRouter()

    const goToHome = () => {
        router.push('/')
    }
</script>

<template>
    <div class="home-button" @click="goToHome">
        <p style="color: black">Home</p>
    </div>
    <div>
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
            medicine.
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
    </div>
</template>

<style scoped>
.home-button {
    text-decoration: none;
    text-align: center;
    color: black;
    background-color: #feda6a;
    border: 1px solid black;
    border-radius: 8px;
    cursor: default;
    width: 80px;
}
.home-button:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 20px rgba(254, 218, 106, 0.15);
}
</style>
