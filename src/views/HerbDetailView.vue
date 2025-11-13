<!-- src/views/HerbDetailView.vue -->
<template>
    <div class="herb-detail-view">
        <Header />
        <div class="container">
            <HerbDetail :herb="herb" :loading="loading" />
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import HerbDetail from "@/components/HerbDetail.vue";
import herbsService from "@/services/herbsService";

export default {
    name: "HerbDetailView",
    components: {
        Header,
        HerbDetail,
    },
    data() {
        return {
            herb: null,
            loading: true,
        };
    },
    async created() {
        const id = this.$route.params.id;
        await this.fetchHerb(id);
        this.loading = false;
    },
    watch: {
        "$route.params.id": async function (newId) {
            this.loading = true;
            await this.fetchHerb(newId);
            this.loading = false;
        },
    },
    methods: {
        async fetchHerb(id) {
            try {
                const response = await herbsService.getHerbById(id);
                this.herb = response.data;
            } catch (error) {
                console.error("Error fetching herb:", error);
                // ข้อมูลสำรองกรณีที่ API ไม่ทำงาน
                this.herb = this.getMockHerb(id);
            }
        },
        getMockHerb(id) {
            // ข้อมูลสำรองสำหรับการพัฒนา
            const mockHerbs = {
                1: {
                    ID: 1,
                    Name: "กระเทียม",
                    ScientificName: "Allium sativum L.",
                    Description:
                        "กระเทียมเป็นพืชล้มลุกในวงศ์ Alliaceae มีลักษณะเป็นหัวใต้ดิน มีกลิ่นฉุนเฉพาะตัว",
                    Benefits:
                        "ช่วยลดคอเลสเตอรอล ลดความดันโลหิต ป้องกันการเกิดลิ่มเลือด",
                    Usage: "รับประทานสด 5-6 กลีบต่อวัน หรือปรุงอาหาร",
                    ImageUrl: "https://example.com/garlic.jpg",
                    Category: "พืชในครัวเรือน",
                },
                // เพิ่มข้อมูลสมุนไพรอื่นๆ ตามต้องการ
            };

            return mockHerbs[id] || null;
        },
    },
};
</script>

<style scoped>
.herb-detail-view {
    min-height: 100vh;
    padding-bottom: 40px;
}
</style>
