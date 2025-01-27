<template>
  <div class="test-case-view">
    <div class="back-nav">
      <button class="back-btn" @click="goBack">
        <span class="back-icon">←</span>
        <span class="back-text">Back</span>
      </button>
    </div>

    <div class="sheet-container">
      <iframe 
        :src="sheetUrl"
        width="100%" 
        height="100%"
        frameborder="0"
      ></iframe>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="loading-overlay">
      <div class="loading-spinner"></div>
      <span>Loading mobile test cases...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileTestCaseView',
  data() {
    return {
      loading: true,
      sheetUrl: 'https://docs.google.com/spreadsheets/d/1VrsI8Ys4hh8trt04C9ZCj_7NCWADknZsru8lX4eXKw0/preview'
    }
  },
  methods: {
    goBack() {
      this.$router.push('/test-cases');
    }
  },
  mounted() {
    // Hide loading when iframe loads
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
</script>

<style scoped>
.test-case-view {
  height: 100vh;
  background: white;
}

.back-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: white;
  z-index: 1002;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.back-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
  color: #4a90e2;
}

.back-icon {
  font-size: 24px;
}

.sheet-container {
  padding-top: 60px;
  height: 100vh;
}

.sheet-container iframe {
  width: 100%;
  height: calc(100vh - 60px);
  border: none;
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  z-index: 1003;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #4a90e2;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style> 