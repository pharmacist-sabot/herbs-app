<!-- src/App.vue -->
<script setup lang="ts">
import Footer from '@/components/Footer.vue';
</script>

<template>
  <div class="main-layout">
    <router-view />

    <Footer />
  </div>
</template>

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
