<script setup lang="ts">
import Footer from '@/components/Footer.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen font-sans bg-background text-text-main">
    <router-view />
    <Footer />
  </div>
</template>
