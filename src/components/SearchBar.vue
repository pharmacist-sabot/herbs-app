<!-- src/components/SearchBar.vue -->
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
  <div class="search-bar">
    <div class="container">
      <div class="search-container">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="ค้นหาสมุนไพร..."
          class="search-input"
          @keydown.enter="onSearch"
        >
        <button class="search-btn" @click="onSearch">
          ค้นหา
        </button>
      </div>
      <div class="filter-container">
        <select v-model="selectedCategory" class="filter-select" @change="onFilter">
          <option value="">
            ทุกหมวดหมู่
          </option>
          <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<style scoped>
.search-bar {
  background-color: white;
  padding: 20px 0;
  border-bottom: 1px solid #e2e8f0;
}

.search-container {
  display: flex;
  margin-bottom: 15px;
}

.search-input {
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #e2e8f0;
  border-radius: 5px 0 0 5px;
  font-size: 16px;
}

.search-btn {
  background-color: var(--secondary-color);
  color: white;
  border: none;
  padding: 0 20px;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: var(--transition);
}

.search-btn:hover {
  background-color: var(--primary-color);
}

.filter-select {
  padding: 8px 15px;
  border: 1px solid #e2e8f0;
  border-radius: 5px;
  font-size: 16px;
  background-color: white;
  min-width: 200px;
}
</style>
