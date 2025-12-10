<script setup lang="ts">
const currentYear: number = new Date().getFullYear();
</script>

<template>
  <footer class="bg-dark text-white py-6 mt-auto">
    <div class="container mx-auto px-4 text-center">
      <p class="text-sm text-white/70 mb-2">
        อ้างอิงตามประกาศ สปสช. วันที่ 10 เมษายน 2568
      </p>

      <p class="text-sm font-medium">
        &copy; {{ currentYear }} ลิขสิทธิ์ | พัฒนาโดย ภก. สุรเดช ประถมศักดิ์
      </p>
    </div>
  </footer>
</template>
