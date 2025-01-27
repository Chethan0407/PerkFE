<template>
  <div class="test-case-selection">
    <div class="back-nav">
      <button class="back-btn" @click="goBack">
        <span class="back-icon">←</span>
        <span class="back-text">Back</span>
      </button>
      <h2 class="nav-title">QA Test Case Document</h2>
    </div>

    <div class="selection-content">
      <div class="grid-container">
        <div class="grid-item" @click="openTestCase('web')">
          <div class="item-content">
            <h3>Web Test Cases</h3>
            <p>View web application test cases</p>
          </div>
        </div>

        <div class="grid-item" @click="openTestCase('mobile')">
          <div class="item-content">
            <h3>Mobile Test Cases</h3>
            <p>View mobile application test cases</p>
          </div>
        </div>

        <div class="grid-item" @click="openTestCase('api')">
          <div class="item-content">
            <h3>API Test Cases</h3>
            <p>View API integration test cases</p>
          </div>
        </div>

        <div class="grid-item" @click="openTestCase('desktop')">
          <div class="item-content">
            <h3>Desktop Test Cases</h3>
            <p>View desktop application test cases</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestCaseSelection',
  methods: {
    goBack() {
      this.$router.push('/');
    },
    openTestCase(type) {
      this.$router.push(`/test-cases/${type}`);
    }
  }
}
</script>

<style scoped>
.test-case-selection {
  min-height: 100vh;
  background: white;
}

.back-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: white;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 10;
}

.back-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: #4a90e2;
}

.back-icon {
  font-size: 24px;
}

.nav-title {
  margin-left: 20px;
  font-size: 18px;
  color: #1e293b;
  font-weight: 500;
}

.selection-content {
  padding: 80px 20px 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  padding: 20px;
}

.grid-item {
  padding: 25px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  cursor: pointer;
}

.item-content h3 {
  font-size: 16px;
  font-weight: 500;
  color: #1e293b;
  margin: 0 0 5px;
}

.item-content p {
  font-size: 14px;
  color: #64748b;
  margin: 0;
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
  
  .grid-item {
    padding: 20px;
  }
}
</style> 