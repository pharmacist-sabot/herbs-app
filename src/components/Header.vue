<script setup lang="ts">
import LogoIcon from '@/components/icons/LogoIcon.vue';
</script>

<template>
  <header class="bg-primary text-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-4 py-4 md:py-5">
      <div class="flex items-center gap-4 md:gap-5">
        <!-- Logo -->
        <LogoIcon class="w-12 h-12 md:w-14 md:h-14 shrink-0 text-white drop-shadow-sm" />

        <div class="flex flex-col">
          <h1 class="text-xl md:text-2xl font-bold leading-tight">
            บัญชียาสมุนไพร รพ.สระโบสถ์
          </h1>
          <p class="text-xs md:text-sm text-white/80 font-light mt-0.5">
            รายการสมุนไพรที่สปสช.สนับสนุนจ่ายชดเชย
          </p>
        </div>
      </div>
    </div>
  </header>
</template>
