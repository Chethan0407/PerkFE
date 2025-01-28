<template>
  <div class="bug-dashboard">
    <div class="back-nav">
      <button class="back-btn" @click="goBack">
        <span class="back-icon">←</span>
        <span class="back-text">Back</span>
      </button>
      <div class="nav-title">
        <span class="title-icon">🐛</span>
        <h2>Bug Dashboard</h2>
      </div>
    </div>

    <div class="iframe-container">
      <iframe 
        src="https://your-bug-dashboard-url.com"
        width="100%" 
        height="100%"
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BugDashboardView',
  methods: {
    goBack() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.bug-dashboard {
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
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  z-index: 1000;
}

.back-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: #4a90e2;
  padding: 8px;
  transition: all 0.3s ease;
}

.back-btn:hover {
  transform: translateX(-3px);
}

.back-icon {
  font-size: 24px;
}

.back-text {
  font-size: 16px;
  font-weight: 500;
}

.nav-title {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 20px;
}

.title-icon {
  font-size: 24px;
}

.nav-title h2 {
  font-size: 18px;
  color: #1e293b;
  margin: 0;
  font-weight: 600;
}

.iframe-container {
  padding-top: 60px;
  height: 100vh;
}

.iframe-container iframe {
  width: 100%;
  height: calc(100vh - 60px);
  border: none;
}
</style> 