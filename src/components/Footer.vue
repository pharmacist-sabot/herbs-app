<!-- src/components/Footer.vue -->
<template>
    <footer class="app-footer">
        <div class="container">
            <p class="footer-reference">
                อ้างอิงตามประกาศ สปสช. วันที่ 10 เมษายน 2568
            </p>
            <p class="footer-copyright">
                &copy; 2025 ลิขสิทธิ์ | พัฒนาโดย ภก. สุรเดช ประถมศักดิ์
            </p>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style scoped>
.app-footer {
    background-color: var(--dark-color);
    color: white;
    padding: 20px 0;
    text-align: center;
    margin-top: auto;
}

.footer-reference {
    font-size: 0.9rem;
    opacity: 0.8;
    margin-bottom: 5px;
}

.footer-copyright {
    font-size: 0.9rem;
    font-weight: 500;
}
</style>
