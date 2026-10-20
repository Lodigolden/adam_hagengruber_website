<!-- A link button component that will take the user to an external website page. -->

<script setup>

const props = defineProps({
    title: {
        type: String,
        default: "Website"
    },
    websiteURL: {
        type: String
    }
})

</script>

<!------------------------------------------------------------------------------------------------->
<template>
    <div class="link-button">
        <a
            :href=websiteURL
            target="_blank"
            rel="noopener"
            class="website-link"
        >
            {{ title }}
        </a>
    </div>
</template>

<!------------------------------------------------------------------------------------------------->
<style scoped>
.website-link {
    display:block;
    text-align: center;
    margin: 20px auto;
    color: black;
    background-color: #feda6a;
    border: 1px solid black;
    border-radius: 8px;
    cursor: default;
    width: 80px;
    cursor: pointer;
}
.website-link:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 20px rgba(254, 218, 106, 0.15);
}
</style>
