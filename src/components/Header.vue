<template>
  <header class="header">
    <div class="container">
      <!-- SVG Logo -->
      <div class="logo-container">
        <svg
          class="logo-icon"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <!-- พื้นหลังวงกลม -->
          <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" stroke-width="2"/>
          
          <!-- ใบไม้ -->
          <path d="M24 10 C20 15, 18 20, 24 24 C30 20, 28 15, 24 10 Z" fill="currentColor" opacity="0.8"/>
          
          <!-- ขวดยาเล็กๆ ตรงกลาง -->
          <rect x="22" y="26" width="4" height="8" rx="1" fill="currentColor"/>
          <circle cx="24" cy="34" r="2" fill="currentColor"/>
        </svg>

        <!-- ข้อความ -->
        <div class="logo-text">
          <h1>บัญชียาสมุนไพร</h1>
          <h2>โรงพยาบาลสระโบสถ์</h2>
          <p>รายการสมุนไพรที่สำนักงานหลักประกันสุขภาพแห่งชาติ (สปสช.) สนับสนุน</p>
        </div>
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
  padding: 20px 40px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 15px;
}

.logo-icon {
  width: 48px;
  height: 48px;
  fill: white;
}

.logo-text h1 {
  font-size: 2rem;
  margin-bottom: 5px;
  font-weight: bold;
}

.logo-text h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  opacity: 0.8;
}

.logo-text p {
  font-size: 0.9rem;
  opacity: 0.7;
  line-height: 1.4;
}

/* Responsive for Mobile */
@media (max-width: 767px) {
  .header {
    padding: 15px 20px;
  }

  .logo-container {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .logo-icon {
    width: 40px;
    height: 40px;
  }

  .logo-text h1 {
    font-size: 1.5rem;
    margin-bottom: 3px;
  }

  .logo-text h2 {
    font-size: 1.2rem;
    margin-bottom: 5px;
  }

  .logo-text p {
    font-size: 0.8rem;
    opacity: 0.7;
    line-height: 1.3;
  }
}
</style>