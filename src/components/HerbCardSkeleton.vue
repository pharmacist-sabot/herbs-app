<script setup lang="ts">
// Skeleton component
</script>

<template>
  <div class="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col h-full animate-pulse">
    <!-- Image Placeholder -->
    <div class="h-48 w-full bg-slate-200" />

    <!-- Info Placeholder -->
    <div class="p-5 grow flex flex-col gap-4">
      <div>
        <!-- Title -->
        <div class="h-6 bg-slate-200 rounded w-3/4 mb-4" />

        <!-- Description -->
        <div class="space-y-2 mb-4">
          <div class="h-4 bg-slate-100 rounded w-full" />
          <div class="h-4 bg-slate-100 rounded w-5/6" />
          <div class="h-4 bg-slate-100 rounded w-4/6" />
        </div>

        <!-- Usage -->
        <div class="h-4 bg-slate-100 rounded w-1/2 mt-2" />
      </div>

      <!-- Details Grid -->
      <div class="grid grid-cols-2 lg:grid-cols-3 gap-3 pt-4 border-t border-slate-100 mt-auto">
        <div v-for="i in 3" :key="i" class="flex flex-col gap-1">
          <div class="h-3 bg-slate-100 rounded w-12" />
          <div class="h-4 bg-slate-200 rounded w-16" />
        </div>
      </div>

      <!-- Category Tag -->
      <div class="mt-2">
        <div class="h-6 bg-slate-100 rounded-full w-24" />
      </div>
    </div>
  </div>
</template>
