<template>
    <header class="header">
        <div class="container">
            <div class="logo-container">

                <!-- SVG Logo -->
                <svg class="logo-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                    <circle cx="32" cy="32" r="26" stroke="currentColor" stroke-width="3" fill="none" />
                    <path d="M22 34 C14 26, 18 17, 28 15 C30 22, 30 29, 22 34 Z" opacity="0.85" />
                    <path d="M42 34 C50 26, 46 17, 36 15 C34 22, 34 29, 42 34 Z" opacity="0.75" />
                    <g transform="translate(32 38)">
                        <rect x="-3" y="-8" width="6" height="16" rx="1.2" />
                        <rect x="-8" y="-3" width="16" height="6" rx="1.2" />
                    </g>
                </svg>

                <div class="logo-text">
                    <h1>บัญชียาสมุนไพร รพ.สระโบสถ์</h1>
                    <p>รายการสมุนไพรที่สำนักงานหลักประกันสุขภาพแห่งชาติ (สปสช.) สนับสนุน</p>
                </div>

            </div>
        </div>
    </header>
</template>

<script>
export default { name: "Header" };
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

/* Typography */
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
