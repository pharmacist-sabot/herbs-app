<!-- src/App.vue -->
<template>
    <div class="main-layout">
        <router-view />
        <Footer />
    </div>
</template>

<script setup>
import Footer from "@/components/Footer.vue";
</script>

<style>
.main-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
