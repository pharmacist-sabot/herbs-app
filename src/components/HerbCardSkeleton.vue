<script setup lang="ts">
// Skeleton component doesn't need props, it's just visual structure
</script>

<template>
  <div class="herb-card card">
    <!-- Image Placeholder -->
    <div class="skeleton-image skeleton-pulse" />

    <!-- Info Placeholder -->
    <div class="herb-info">
      <div>
        <!-- Title -->
        <div class="skeleton-text title skeleton-pulse" />

        <!-- Description lines -->
        <div class="skeleton-text line-long skeleton-pulse mt-3" />
        <div class="skeleton-text line-medium skeleton-pulse" />
        <div class="skeleton-text line-short skeleton-pulse" />

        <!-- Usage line -->
        <div class="skeleton-text line-medium skeleton-pulse mt-3" />
      </div>

      <!-- Details Grid Placeholder -->
      <div class="herb-details-grid">
        <div class="detail-item">
          <div class="skeleton-text label skeleton-pulse" />
          <div class="skeleton-text value skeleton-pulse" />
        </div>
        <div class="detail-item">
          <div class="skeleton-text label skeleton-pulse" />
          <div class="skeleton-text value skeleton-pulse" />
        </div>
        <div class="detail-item">
          <div class="skeleton-text label skeleton-pulse" />
          <div class="skeleton-text value skeleton-pulse" />
        </div>
      </div>

      <!-- Category Tag Placeholder -->
      <div class="herb-category-wrapper">
        <div class="skeleton-tag skeleton-pulse" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.herb-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid #e2e8f0;
  overflow: hidden;
}

.herb-info {
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
}

.herb-details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid #f0f4f8;
}

.herb-category-wrapper {
  margin-top: auto;
}

/* Skeleton Specific Styles */
.skeleton-pulse {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.skeleton-image {
  height: 180px;
  width: 100%;
}

.skeleton-text {
  height: 1rem;
  margin-bottom: 0.5rem;
}

.skeleton-text.title {
  height: 1.5rem;
  width: 60%;
  margin-bottom: 1rem;
}

.skeleton-text.line-long {
  width: 100%;
}
.skeleton-text.line-medium {
  width: 80%;
}
.skeleton-text.line-short {
  width: 60%;
}

.skeleton-text.label {
  height: 0.8rem;
  width: 50%;
  margin-bottom: 4px;
}

.skeleton-text.value {
  height: 1rem;
  width: 70%;
}

.skeleton-tag {
  height: 24px;
  width: 80px;
  border-radius: 15px;
}
</style>
