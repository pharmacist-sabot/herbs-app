<!-- src/components/HerbCard.vue -->
<template>
    <div class="herb-card card" @click="viewDetails">
        <div class="herb-image">
            <img
                :src="herb.ImageUrl || '/placeholder-herb.png'"
                :alt="herb.Name"
            />
        </div>
        <div class="herb-info">
            <h3 class="herb-name">{{ herb.Name }}</h3>
            <p class="herb-scientific">{{ herb.ScientificName }}</p>
            <p class="herb-category">{{ herb.Category }}</p>
            <div class="herb-description">
                {{ truncateText(herb.Description, 100) }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HerbCard",
    props: {
        herb: {
            type: Object,
            required: true,
        },
    },
    methods: {
        viewDetails() {
            this.$router.push({
                name: "herb-detail",
                params: { id: this.herb.ID },
            });
        },
        truncateText(text, maxLength) {
            if (!text || typeof text !== "string") return "";
            if (text.length <= maxLength) return text;
            return text.substring(0, maxLength) + "...";
        },
    },
};
</script>

<style scoped>
.herb-card {
    cursor: pointer;
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.herb-image {
    height: 200px;
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
    padding: 15px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.herb-name {
    font-size: 1.2rem;
    margin-bottom: 5px;
    color: var(--primary-color);
}

.herb-scientific {
    font-style: italic;
    color: var(--secondary-color);
    margin-bottom: 5px;
    font-size: 0.9rem;
}

.herb-category {
    background-color: var(--light-color);
    color: var(--dark-color);
    display: inline-block;
    padding: 3px 8px;
    border-radius: 3px;
    font-size: 0.8rem;
    margin-bottom: 10px;
    align-self: flex-start;
}

.herb-description {
    font-size: 0.9rem;
    color: var(--text-color);
    flex-grow: 1;
}
</style>
