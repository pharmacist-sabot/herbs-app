<!-- src/App.vue -->
<template>
    <div class="main-layout">
        <router-view />
        <Footer />
    </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
    name: "App",
    components: {
        Footer,
    },
};
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
