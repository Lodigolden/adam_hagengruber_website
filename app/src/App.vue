<script setup lang="ts"></script>

<template>
  <nav>
    <!-- <RouterLink
      to="/"
      class="link"
    >
        Home
    </RouterLink>
    <RouterLink
      to="/about"
      class="link"
    >
      About
    </RouterLink> -->
  </nav>

  <RouterView/>
</template>

<style scoped>
.link {
  text-decoration: none;
  text-align: center;
  color: black;
  background-color: #feda6a;
  border: 1px solid black;
  padding: 5px;
  border-radius: 8px;
  cursor: default;
}
</style>
