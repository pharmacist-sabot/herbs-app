<!-- src/views/HomeView.vue -->
<template>
    <div class="home-view">
        <Header />
        <SearchBar
            :categories="categories"
            @search="handleSearch"
            @filter="handleFilter"
        />

        <div class="container">
            <div class="herbs-count" v-if="filteredHerbs.length && !loading">
                <p>พบ {{ filteredHerbs.length }} รายการ</p>
            </div>

            <div
                class="herbs-grid grid grid-3"
                v-if="filteredHerbs.length && !loading"
            >
                <HerbCard
                    v-for="herb in filteredHerbs"
                    :key="herb.ID"
                    :herb="herb"
                />
            </div>

            <div class="no-results" v-else-if="!loading">
                <p>ไม่พบสมุนไพรที่ตรงกับการค้นหา</p>
            </div>

            <div class="loading" v-if="loading">
                <p>กำลังโหลดข้อมูล...</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import Header from "@/components/Header.vue";
import SearchBar from "@/components/SearchBar.vue";
import HerbCard from "@/components/HerbCard.vue";
import herbsService from "@/services/herbsService";
import type { Herb } from "@/types/Herb";

// State
const herbs = ref<Herb[]>([]);
const loading = ref<boolean>(true);
const searchQuery = ref<string>("");
const selectedCategory = ref<string>("");

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
        const nameMatch = (herb.Name || "").toLowerCase().includes(q);
        const scientificNameMatch = (herb.ScientificName || "")
            .toLowerCase()
            .includes(q);
        const descriptionMatch = (herb.Description || "")
            .toLowerCase()
            .includes(q);

        const matchesSearch =
            !q || nameMatch || scientificNameMatch || descriptionMatch;
        const matchesCategory =
            !selectedCategory.value || herb.Category === selectedCategory.value;

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

const getMockHerbs = (): Herb[] => {
    // ข้อมูลสำรองสำหรับการพัฒนา
    return [
        {
            ID: 1,
            Name: "กระเทียม",
            ScientificName: "Allium sativum L.",
            Description: "กระเทียมเป็นพืชล้มลุก...",
            Benefits: "ช่วยลดคอเลสเตอรอล...",
            Usage: "รับประทานสด...",
            ImageUrl: "",
            Category: "พืชในครัวเรือน",
            NHSO_Price: "0",
            Per_Course: "1 week",
            ICD10: "Z71",
        },
    ];
};

// Lifecycle
onMounted(async () => {
    try {
        const response = await herbsService.getAllHerbs();
        herbs.value = response.data;
    } catch (error) {
        console.error("Error fetching herbs:", error);
        herbs.value = getMockHerbs();
    } finally {
        loading.value = false;
    }
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
</style>
