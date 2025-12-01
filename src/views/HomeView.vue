<template>
  <div class="home-view">
    <Header />
    <SearchBar :categories="categories" @search="handleSearch" @filter="handleFilter" />

    <div class="container">
      <!-- กรณีเกิด Error -->
      <div v-if="error" class="error-message">
        <p>⚠️ {{ error }}</p>
        <button class="retry-btn" @click="fetchHerbs">ลองใหม่อีกครั้ง</button>
      </div>

      <!-- กรณีเจอข้อมูล -->
      <div v-else-if="filteredHerbs.length && !loading" class="herbs-count">
        <p>พบ {{ filteredHerbs.length }} รายการ</p>
      </div>

      <!-- แสดงรายการสมุนไพร -->
      <div v-if="filteredHerbs.length && !loading && !error" class="herbs-grid grid grid-3">
        <HerbCard v-for="herb in filteredHerbs" :key="herb.ID" :herb="herb" />
      </div>

      <!-- กรณีไม่เจอข้อมูลจากการค้นหา -->
      <div v-else-if="!loading && !error" class="no-results">
        <p>ไม่พบสมุนไพรที่ตรงกับการค้นหา</p>
      </div>

      <!-- กำลังโหลด -->
      <div v-if="loading" class="loading">
        <p>กำลังโหลดข้อมูล...</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import Header from '@/components/Header.vue';
import SearchBar from '@/components/SearchBar.vue';
import HerbCard from '@/components/HerbCard.vue';
import herbsService from '@/services/herbsService';
import type { Herb } from '@/types/Herb';

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
  if (!herbs.value) return [];

  return herbs.value.filter((herb) => {
    if (!herb) return false;

    const q = searchQuery.value.toLowerCase();
    const nameMatch = (herb.Name || '').toLowerCase().includes(q);
    const scientificNameMatch = (herb.ScientificName || '').toLowerCase().includes(q);
    const descriptionMatch = (herb.Description || '').toLowerCase().includes(q);

    const matchesSearch = !q || nameMatch || scientificNameMatch || descriptionMatch;
    const matchesCategory = !selectedCategory.value || herb.Category === selectedCategory.value;

    return matchesSearch && matchesCategory;
  });
});

// Methods
const handleSearch = (query: string) => {
  searchQuery.value = query;
};

const handleFilter = (category: string) => {
  selectedCategory.value = category;
};

// แยก Logic การดึงข้อมูลออกมาเป็นฟังก์ชัน เพื่อให้กด Retry ได้
const fetchHerbs = async () => {
  loading.value = true;
  error.value = null; // Reset error ก่อนดึงใหม่
  try {
    const response = await herbsService.getAllHerbs();
    herbs.value = response.data;
  } catch (err) {
    console.error('Error fetching herbs:', err);
    error.value = 'ไม่สามารถดึงข้อมูลได้ โปรดตรวจสอบการเชื่อมต่ออินเทอร์เน็ต';
    herbs.value = [];
  } finally {
    loading.value = false;
  }
};

// Lifecycle
onMounted(() => {
  fetchHerbs();
});
</script>

<style scoped>
.home-view {
  min-height: 100vh;
  flex-grow: 1;
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

.no-results,
.loading {
  text-align: center;
  padding: 50px 20px;
  color: var(--text-color);
}

/* Style for Error Message */
.error-message {
  text-align: center;
  padding: 50px 20px;
  color: #e53e3e; /* สีแดง */
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

.retry-btn:hover {
  opacity: 0.9;
}
</style>
