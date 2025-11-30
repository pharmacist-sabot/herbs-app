<template>
    <header class="header">
        <div class="container">
            <div class="logo-container">
                <!-- เรียกใช้ Component Logo แทน SVG ก้อนยักษ์ -->
                <LogoIcon class="logo-icon" />

                <div class="logo-text">
                    <h1>บัญชียาสมุนไพร รพ.สระโบสถ์</h1>
                    <p>
                        รายการสมุนไพรที่สำนักงานหลักประกันสุขภาพแห่งชาติ (สปสช.)
                        สนับสนุน
                    </p>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import LogoIcon from "@/components/icons/LogoIcon.vue";
</script>

<style scoped>
.header {
    background-color: var(--primary-color);
    color: white;
    padding: 28px 40px;
}

.logo-container {
    display: flex;
    align-items: center;
    gap: 20px;
}

.logo-icon {
    width: 62px;
    height: 62px;
    flex-shrink: 0;
}

.logo-text h1 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0 0 4px;
    line-height: 1.2;
}

.logo-text p {
    margin: 0;
    font-size: 0.9rem;
    opacity: 0.75;
    line-height: 1.45;
}

/* Mobile */
@media (max-width: 767px) {
    .header {
        padding: 20px;
    }

    .logo-container {
        gap: 15px;
    }

    .logo-icon {
        width: 54px;
        height: 54px;
    }

    .logo-text h1 {
        font-size: 1.5rem;
    }

    .logo-text p {
        font-size: 0.8rem;
    }
}
</style>
