<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  categories: string[];
}>();

const emit = defineEmits<{
  (e: 'search', query: string): void;
  (e: 'filter', category: string): void;
}>();

const searchQuery = ref<string>('');
const selectedCategory = ref<string>('');

function onSearch() {
  emit('search', searchQuery.value);
}

function onFilter() {
  emit('filter', selectedCategory.value);
}
</script>

<template>
  <div class="sticky top-[72px] md:top-[88px] z-40 py-4 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row gap-3 md:items-center justify-between">
        <div class="relative flex-1 group">
          <div class="flex items-center w-full bg-slate-50 border border-slate-200 rounded-full overflow-hidden transition-all duration-300 focus-within:bg-white focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10 shadow-sm hover:border-slate-300">
            <!-- Icon -->
            <div class="pl-4 text-slate-400 group-focus-within:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <!-- Input Field -->
            <input
              v-model="searchQuery"
              type="text"
              placeholder="ค้นหาสมุนไพร..."
              class="w-full px-3 py-2.5 bg-transparent border-none focus:ring-0 outline-none text-text-main placeholder-slate-400 text-base"
              @keydown.enter="onSearch"
            >

            <!-- Search Button -->
            <button
              class="bg-primary hover:bg-dark text-white px-6 py-2.5 font-medium transition-colors cursor-pointer m-1 rounded-full text-sm shadow-md"
              @click="onSearch"
            >
              ค้นหา
            </button>
          </div>
        </div>

        <!-- Filter Select -->
        <div class="relative md:w-64 shrink-0">
          <div class="relative">
            <select
              v-model="selectedCategory"
              class="w-full appearance-none pl-4 pr-10 py-2.5 bg-white border border-slate-200 rounded-full text-text-main focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all cursor-pointer shadow-sm hover:border-slate-300"
              @change="onFilter"
            >
              <option value="">
                ทุกหมวดหมู่
              </option>
              <option v-for="category in categories" :key="category" :value="category">
                {{ category }}
              </option>
            </select>

            <!-- Custom Arrow Icon -->
            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
