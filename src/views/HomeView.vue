<!-- src/views/HomeView.vue -->
<template>
    <div class="home-view">
        <Header />
        <SearchBar :categories="categories" @search="handleSearch" @filter="handleFilter" />

        <div class="container">
            <div class="herbs-count" v-if="filteredHerbs.length && !loading">
                <p>พบ {{ filteredHerbs.length }} รายการ</p>
            </div>

            <div class="herbs-grid grid grid-3" v-if="filteredHerbs.length && !loading">
                <HerbCard v-for="herb in filteredHerbs" :key="herb.ID" :herb="herb" />
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

<script>
import Header from "@/components/Header.vue";
import SearchBar from "@/components/SearchBar.vue";
import HerbCard from "@/components/HerbCard.vue";
import herbsService from "@/services/herbsService";

export default {
    name: "HomeView",
    components: {
        Header,
        SearchBar,
        HerbCard,
    },
    data() {
        return {
            herbs: [],
            filteredHerbs: [],
            categories: [],
            loading: true,
            searchQuery: "",
            selectedCategory: "",
        };
    },
    async created() {
        await this.fetchHerbs();
        this.extractCategories();
        this.filteredHerbs = [...this.herbs];
        this.loading = false;
    },
    methods: {
        async fetchHerbs() {
            try {
                const response = await herbsService.getAllHerbs();
                this.herbs = response.data;
            } catch (error) {
                console.error("Error fetching herbs:", error);
                this.herbs = this.getMockHerbs();
            }
        },
        extractCategories() {
            const categorySet = new Set();
            this.herbs.forEach((herb) => {
                if (herb && herb.Category) {
                    categorySet.add(herb.Category);
                }
            });
            this.categories = Array.from(categorySet);
        },
        handleSearch(query) {
            this.searchQuery = query.toLowerCase();
            this.filterHerbs();
        },
        handleFilter(category) {
            this.selectedCategory = category;
            this.filterHerbs();
        },
        filterHerbs() {
            if (!this.herbs) {
                this.filteredHerbs = [];
                return;
            }

            this.filteredHerbs = this.herbs.filter((herb) => {
                if (!herb) return false;

                const nameMatch = (herb.Name || '').toLowerCase().includes(this.searchQuery);
                const scientificNameMatch = (herb.ScientificName || '').toLowerCase().includes(this.searchQuery);
                const descriptionMatch = (herb.Description || '').toLowerCase().includes(this.searchQuery);

                const matchesSearch =
                    !this.searchQuery || nameMatch || scientificNameMatch || descriptionMatch;

                const matchesCategory =
                    !this.selectedCategory ||
                    herb.Category === this.selectedCategory;

                return matchesSearch && matchesCategory;
            });
        },
        getMockHerbs() {
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
                },
            ];
        },
    },
};
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
