<!-- src/components/Header.vue -->
<template>
    <header class="header">
        <div class="container">
            <div class="logo">
                <h1>บัญชียาสมุนไพร</h1>
                <h2>โรงพยาบาลสระโบสถ์</h2>
                <p>
                    รายการสมุนไพรที่สำนักงานหลักประกันสุขภาพแห่งชาติ (สปสช.)
                    สนับสนุน
                </p>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
};
</script>

<style scoped>
.header {
    background-color: var(--primary-color);
    color: white;
    padding: 20px 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.logo h1 {
    font-size: 2rem;
    margin-bottom: 5px;
}

.logo p {
    font-size: 1rem;
    opacity: 0.9;
}
</style>
