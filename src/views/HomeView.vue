<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

import type { Herb } from '@/types/Herb';

import Header from '@/components/Header.vue';
import HerbCard from '@/components/HerbCard.vue';
import HerbCardSkeleton from '@/components/HerbCardSkeleton.vue';
import SearchBar from '@/components/SearchBar.vue';
import herbsService from '@/services/herbs-service';

// State
const herbs = ref<Herb[]>([]);
const loading = ref<boolean>(true);
const error = ref<string | null>(null);
const searchQuery = ref<string>('');
const selectedCategory = ref<string>('');

// Computed Properties
const categories = computed<string[]>(() => {
  const categorySet = new Set<string>();
  herbs.value.forEach((herb) => {
    if (herb && herb.Category) {
      categorySet.add(herb.Category);
    }
  });
  return Array.from(categorySet);
});

const filteredHerbs = computed<Herb[]>(() => {
  if (!herbs.value)
    return [];

  return herbs.value.filter((herb) => {
    if (!herb)
      return false;

    const q = searchQuery.value.toLowerCase();
    const nameMatch = (herb.Name || '').toLowerCase().includes(q);
    const scientificNameMatch = (herb.ScientificName || '').toLowerCase().includes(q);
    const descriptionMatch = (herb.Description || '').toLowerCase().includes(q);

    const matchesSearch = !q || nameMatch || scientificNameMatch || descriptionMatch;
    const matchesCategory = !selectedCategory.value || herb.Category === selectedCategory.value;

    return matchesSearch && matchesCategory;
  });
});

function handleSearch(query: string) {
  searchQuery.value = query;
}

function handleFilter(category: string) {
  selectedCategory.value = category;
}

async function fetchHerbs() {
  loading.value = true;
  error.value = null;
  try {
    const response = await herbsService.getAllHerbs();
    herbs.value = response.data;
  }
  catch (err) {
    console.error('Error fetching herbs:', err);
    error.value = 'ไม่สามารถดึงข้อมูลได้ โปรดตรวจสอบการเชื่อมต่ออินเทอร์เน็ต';
    herbs.value = [];
  }
  finally {
    loading.value = false;
  }
}

onMounted(() => {
  fetchHerbs();
});
</script>

<template>
  <div class="home-view">
    <Header />
    <SearchBar :categories="categories" @search="handleSearch" @filter="handleFilter" />

    <div class="container">
      <!-- Error -->
      <div v-if="error" class="error-message">
        <p>⚠️ {{ error }}</p>
        <button class="retry-btn" @click="fetchHerbs">
          ลองใหม่อีกครั้ง
        </button>
      </div>

      <div v-else-if="loading" class="loading-wrapper">
        <div class="loading-header">
          <span class="spinner" />
          <p>กำลังดาวน์โหลดข้อมูลสมุนไพร...</p>
        </div>

        <!-- Skeleton Grid -->
        <div class="herbs-grid grid grid-3">
          <HerbCardSkeleton v-for="n in 6" :key="n" />
        </div>
      </div>

      <template v-else>
        <div v-if="filteredHerbs.length" class="herbs-count">
          <p>พบ {{ filteredHerbs.length }} รายการ</p>
        </div>

        <div v-if="filteredHerbs.length" class="herbs-grid grid grid-3">
          <HerbCard v-for="herb in filteredHerbs" :key="herb.ID" :herb="herb" />
        </div>

        <div v-else class="no-results">
          <p>ไม่พบสมุนไพรที่ตรงกับการค้นหา</p>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.home-view {
  min-height: 100vh;
  flex-grow: 1;
}

.loading-wrapper {
  margin-top: 20px;
}

.loading-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  color: var(--text-color);
  opacity: 0.8;
  font-weight: 500;
}

.spinner {
  width: 16px;
  height: 16px;
  border: 2px solid #e2e8f0;
  border-top-color: var(--primary-color);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.herbs-count {
  margin: 20px 0;
  color: var(--text-color);
  font-weight: 500;
}

.herbs-grid {
  margin-bottom: 40px;
  padding-bottom: 2rem;
}

.no-results {
  text-align: center;
  padding: 50px 20px;
  color: var(--text-color);
}

.error-message {
  text-align: center;
  padding: 50px 20px;
  color: #e53e3e;
  background-color: #fff5f5;
  border-radius: 8px;
  margin-top: 20px;
  border: 1px solid #feb2b2;
}

.retry-btn {
  margin-top: 15px;
  padding: 8px 16px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: var(--font-family-sans);
}
</style>
