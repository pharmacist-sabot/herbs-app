<!-- src/components/HerbDetail.vue -->
<template>
    <div class="herb-detail" v-if="herb">
        <div class="herb-header">
            <div class="herb-image">
                <img
                    :src="herb.ImageUrl || '/placeholder-herb.png'"
                    :alt="herb.Name"
                />
            </div>
            <div class="herb-info">
                <h1 class="herb-name">{{ herb.Name }}</h1>
                <p class="herb-scientific">{{ herb.ScientificName }}</p>
                <div class="herb-category">{{ herb.Category }}</div>
            </div>
        </div>

        <div class="herb-content">
            <div class="section">
                <h2>คำอธิบาย</h2>
                <p>{{ herb.Description }}</p>
            </div>

            <div class="section">
                <h2>ประโยชน์</h2>
                <p>{{ herb.Benefits }}</p>
            </div>

            <div class="section">
                <h2>วิธีใช้</h2>
                <p>{{ herb.Usage }}</p>
            </div>
        </div>

        <div class="back-button">
            <button @click="goBack" class="btn">กลับไปหน้าหลัก</button>
        </div>
    </div>

    <div class="loading" v-else-if="loading">
        <p>กำลังโหลดข้อมูล...</p>
    </div>

    <div class="error" v-else>
        <p>ไม่พบข้อมูลสมุนไพรที่คุณค้นหา</p>
        <button @click="goBack" class="btn">กลับไปหน้าหลัก</button>
    </div>
</template>

<script>
export default {
    name: "HerbDetail",
    props: {
        herb: {
            type: Object,
            default: null,
        },
        loading: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        goBack() {
            this.$router.push({ name: "home" });
        },
    },
};
</script>

<style scoped>
.herb-detail {
    max-width: 800px;
    margin: 0 auto;
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: var(--card-shadow);
}

.herb-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: var(--light-color);
}

.herb-image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    border: 5px solid white;
    box-shadow: var(--card-shadow);
    margin-bottom: 20px;
}

.herb-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.herb-info {
    text-align: center;
}

.herb-name {
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: 5px;
}

.herb-scientific {
    font-style: italic;
    color: var(--secondary-color);
    margin-bottom: 10px;
    font-size: 1.1rem;
}

.herb-category {
    background-color: var(--primary-color);
    color: white;
    display: inline-block;
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 0.9rem;
}

.herb-content {
    padding: 20px;
}

.section {
    margin-bottom: 25px;
}

.section h2 {
    color: var(--primary-color);
    margin-bottom: 10px;
    padding-bottom: 5px;
    border-bottom: 2px solid var(--light-color);
}

.section p {
    line-height: 1.6;
}

.back-button {
    text-align: center;
    padding: 20px;
}

.loading,
.error {
    text-align: center;
    padding: 50px 20px;
}

.error p {
    margin-bottom: 20px;
    color: #e53e3e;
}

@media (min-width: 768px) {
    .herb-header {
        flex-direction: row;
        align-items: flex-start;
    }

    .herb-image {
        margin-right: 30px;
        margin-bottom: 0;
    }

    .herb-info {
        text-align: left;
        flex: 1;
    }
}
</style>
