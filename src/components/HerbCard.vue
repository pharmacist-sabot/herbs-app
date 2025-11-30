<!-- src/components/HerbCard.vue -->
<template>
    <div class="herb-card card" @click="viewDetails">
        <!-- Herb Image -->
        <div class="herb-image">
            <img :src="herb.ImageUrl || '/placeholder-herb.png'" :alt="herb.Name" loading="lazy" />
        </div>

        <!-- Herb Info -->
        <div class="herb-info">
            <div>
                <h3 class="herb-name">{{ herb.Name }}</h3>
                <div class="herb-description">
                    <strong>สรรพคุณ:</strong>
                    {{ truncateText(herb.Description, 80) }}
                </div>
                <div class="herb-usage">
                    <strong>วิธีใช้:</strong> {{ herb.Usage }}
                </div>
            </div>

            <!-- Technical Details -->
            <div class="herb-details-grid">
                <div class="detail-item">
                    <span class="detail-label">อัตราจ่ายชดเชย</span>
                    <span class="detail-value">{{ herb.NHSO_Price || 'N/A' }}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">รอบการเบิก</span>
                    <span class="detail-value">{{ herb.Per_Course || 'N/A' }}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">รหัส ICD10</span>
                    <span class="detail-value">{{ herb.ICD10 || 'N/A' }}</span>
                </div>
            </div>

            <!-- Category Tag -->
            <div class="herb-category-wrapper">
                <p class="herb-category">{{ herb.Category }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
    herb: {
        type: Object,
        required: true,
    },
});

const router = useRouter();

const viewDetails = () => {
    router.push({
        name: "herb-detail",
        params: { id: props.herb.ID },
    });
};

const truncateText = (text, maxLength) => {
    if (!text || typeof text !== "string") return "";
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
};
</script>

<style scoped>
.herb-card {
    cursor: pointer;
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid #e2e8f0;
    background-color: white;
}

.herb-image {
    height: 180px;
    overflow: hidden;
}

.herb-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
}

.herb-card:hover .herb-image img {
    transform: scale(1.05);
}

.herb-info {
    padding: 1rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
}

.herb-name {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--primary-color);
    line-height: 1.3;
}

.herb-description,
.herb-usage {
    font-size: 0.9rem;
    color: var(--text-color);
    line-height: 1.5;
    margin-bottom: 0.5rem;
}

.herb-description strong,
.herb-usage strong {
    font-weight: 500;
    color: var(--dark-color);
}

.herb-details-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 0.75rem;
    padding-top: 0.75rem;
    border-top: 1px solid #f0f4f8;
}

.detail-item {
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
}

.detail-label {
    color: #718096;
    margin-bottom: 2px;
}

.detail-value {
    font-weight: 500;
    color: var(--dark-color);
}

.herb-category-wrapper {
    margin-top: auto;
}

.herb-category {
    background-color: var(--light-color);
    color: var(--primary-color);
    display: inline-block;
    padding: 4px 10px;
    border-radius: 15px;
    font-size: 0.75rem;
    font-weight: 600;
    align-self: flex-start;
}
</style>
