<template>
  <div class="test-case-view">
    <div v-if="!showSheet">
      <div class="back-nav">
        <button class="back-btn" @click="goBack">
          <span class="back-icon">←</span>
          <span class="back-text">Back</span>
        </button>
      </div>

      <div class="header">
        <div class="header-content">
          <h2 class="animated-title">
            <span class="title-letter" v-for="(letter, index) in 'Test Case Platforms'" :key="index"
                  :style="{ animationDelay: `${index * 0.1}s` }">
              {{ letter === ' ' ? '\u00A0' : letter }}
            </span>
          </h2>
        </div>
      </div>

      <div class="grid-container">
        <div class="grid-item" v-for="(item, index) in testCases" :key="item.type"
             @click="openSheet(item.type)"
             :style="{ animationDelay: `${index * 0.2}s` }">
          <div class="content">
            <div class="icon-wrapper" :class="item.type">
              <div class="icon">{{ item.icon }}</div>
            </div>
            <div class="text-content">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
            <div class="arrow">→</div>
          </div>
          <div class="card-shine"></div>
        </div>
      </div>

      <div class="info-section">
        <div class="info-card">
          <h4>Recent Updates</h4>
          <ul>
            <li v-for="(update, index) in recentUpdates" :key="index" class="update-item">
              <div class="update-content">
                <div class="update-icon" :class="update.type">
                  <span v-if="update.type === 'android'">🤖</span>
                  <span v-else-if="update.type === 'ios'">🍎</span>
                  <span v-else-if="update.type === 'web'">🌐</span>
                  <span v-else-if="update.type === 'api'">⚡</span>
                </div>
                <div class="update-text">
                  <span class="update-title">{{ update.title }}</span>
                  <span class="update-date">{{ update.date }}</span>
                </div>
              </div>
              <div class="update-status" :class="update.status">
                {{ update.status }}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div v-if="showSheet" class="sheet-container">
      <div class="sheet-nav">
        <button class="back-btn" @click="closeSheet">
          <span class="back-icon">←</span>
          <span class="back-text">Back to Test Cases</span>
        </button>
        <div class="sheet-header">
          <div class="sheet-icon" :class="currentType">
            <span class="platform-icon">{{ getTypeIcon }}</span>
          </div>
          <div class="sheet-title-group">
            <h2 class="sheet-title">{{ getTitle }}</h2>
            <span class="sheet-subtitle">{{ getSubtitle }}</span>
          </div>
        </div>
      </div>
      <iframe 
        :src="sheetUrl"
        width="100%" 
        height="100%"
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestCaseView',
  data() {
    return {
      showSheet: false,
      sheetUrl: '',
      currentType: '',
      testCases: [
        {
          type: 'android',
          title: 'Android Test Cases',
          description: 'Add test cases',
          icon: '🤖'
        },
        {
          type: 'ios',
          title: 'iOS Test Cases',
          description: 'Add test cases',
          icon: '🍎'
        },
        {
          type: 'web',
          title: 'Web Test Cases',
          description: 'Add test cases',
          icon: '🌐'
        },
        {
          type: 'api',
          title: 'API Test Cases',
          description: 'Add test cases',
          icon: '⚡'
        }
      ],
      recentUpdates: [
        {
          type: 'android',
          title: 'Android Test Cases updated',
          date: 'Oct 2023',
          status: 'recent'
        },
        {
          type: 'ios',
          title: 'iOS Test Cases updated',
          date: 'Oct 2023',
          status: 'recent'
        },
        {
          type: 'web',
          title: 'Web Test Cases updated',
          date: 'Sept 2023',
          status: 'pending'
        },
        {
          type: 'api',
          title: 'API Test Cases updated',
          date: 'Aug 2023',
          status: 'completed'
        }
      ]
    }
  },
  computed: {
    getTypeIcon() {
      const icons = {
        android: '🤖',
        ios: '🍎',
        web: '🌐',
        api: '⚡'
      }
      return icons[this.currentType] || '📋'
    },
    getTitle() {
      const titles = {
        android: 'Android Test Cases',
        ios: 'iOS Test Cases',
        web: 'Web Test Cases',
        api: 'API Test Cases'
      }
      return titles[this.currentType] || 'Test Cases'
    },
    getSubtitle() {
      const subtitles = {
        android: 'View and manage Android platform test cases',
        ios: 'View and manage iOS platform test cases',
        web: 'View and manage Web platform test cases',
        api: 'View and manage API test cases'
      }
      return subtitles[this.currentType] || 'View and manage test cases'
    }
  },
  methods: {
    goBack() {
      this.$router.push('/');
    },
    openSheet(type) {
      this.currentType = type;
      this.sheetUrl = 'https://docs.google.com/spreadsheets/d/1VrsI8Ys4hh8trt04C9ZCj_7NCWADknZsru8lX4eXKw0/preview';
      this.showSheet = true;
    },
    closeSheet() {
      this.showSheet = false;
      this.sheetUrl = '';
      this.currentType = '';
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  },
  mounted() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  },
  watch: {
    showSheet(newVal) {
      if (!newVal) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
  }
}
</script>

<style scoped>
.test-case-view {
  min-height: 100vh;
  padding: 10px 20px;
  background: #f8fafc;
}

.back-nav {
  padding: 10px 20px;
  margin-bottom: 10px;
}

.back-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: #4a90e2;
  font-size: 16px;
  padding: 8px 0;
  transition: all 0.3s ease;
}

.back-btn:hover {
  color: #357abd;
  transform: translateX(-3px);
}

.back-icon {
  font-size: 24px;
}

.back-text {
  font-weight: 500;
}

.header {
  text-align: center;
  margin: 10px 0 30px;
  padding: 20px;
  position: relative;
  overflow: hidden;
}

.header::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120%;
  height: 120%;
  background: radial-gradient(
    circle at center,
    rgba(74, 144, 226, 0.05) 0%,
    transparent 70%
  );
  transform: translate(-50%, -50%);
  animation: pulseGlow 2s ease-in-out infinite;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
}

.animated-title {
  display: flex;
  justify-content: center;
  gap: 2px;
  margin: 0;
  font-weight: 600;
}

.title-letter {
  display: inline-block;
  font-size: 32px;
  background: linear-gradient(135deg, #1e293b, #334155);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0;
  animation: letterPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  transform-origin: center;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 25px;
  position: relative;
}

.grid-item {
  opacity: 0;
  animation: cardPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  background: white;
  border-radius: 16px;
  padding: 25px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(0,0,0,0.1);
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  min-height: 180px;
  transform-origin: center;
}

.grid-item:hover {
  transform: translateY(-12px) scale(1.03);
  box-shadow: 0 20px 30px rgba(74, 144, 226, 0.2);
  border-color: rgba(74, 144, 226, 0.3);
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 15px;
  position: relative;
  z-index: 3;
}

.icon-wrapper {
  width: 55px;
  height: 55px;
  border-radius: 12px;
  font-size: 28px;
  margin: 0 auto 15px;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
}

.icon-wrapper::before {
  content: '';
  position: absolute;
  inset: -4px;
  background: linear-gradient(45deg, rgba(74, 144, 226, 0.4), rgba(138, 92, 246, 0.4));
  border-radius: 14px;
  opacity: 0;
  transition: all 0.4s ease;
  transform: scale(0.8);
}

.grid-item:hover .icon-wrapper::before {
  opacity: 1;
  transform: scale(1.1);
}

.grid-item:hover .icon-wrapper {
  transform: scale(1.2) rotate(12deg);
}

.text-content {
  transform: translateY(0);
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.grid-item:hover .text-content {
  transform: translateY(-5px);
}

.text-content h3 {
  font-size: 18px;
  margin: 0 0 8px;
  transition: all 0.4s ease;
}

.text-content p {
  font-size: 14px;
  margin: 0 0 15px;
  transition: all 0.4s ease;
}

.arrow {
  font-size: 20px;
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  margin-top: 12px;
}

.grid-item:hover .arrow {
  transform: translateX(15px) scale(1.2);
  color: #4a90e2;
  opacity: 1;
}

.card-shine {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent 0%,
    transparent 30%,
    rgba(255, 255, 255, 0.15) 50%,
    transparent 70%,
    transparent 100%
  );
  background-size: 200% 100%;
  transform: translateX(-100%);
  transition: transform 0.8s ease;
}

.grid-item:hover .card-shine {
  transform: translateX(100%);
}

.info-section {
  margin-top: 25px;
  padding: 12px;
  max-width: 700px;
  margin: 30px auto 0;
}

.info-card {
  background: white;
  border-radius: 16px;
  padding: 25px;
  max-width: 450px;
  margin: 0 auto;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  border: 1px solid rgba(99, 102, 241, 0.1);
  transition: all 0.3s ease;
}

.info-card:hover {
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
  transform: translateY(-2px);
}

.info-card h4 {
  color: #1e293b;
  font-size: 18px;
  margin: 0 0 15px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
}

.info-card h4::before {
  content: '🔄';
  font-size: 22px;
}

.info-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.update-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid rgba(0,0,0,0.05);
  transition: all 0.3s ease;
}

.update-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.update-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  transition: all 0.3s ease;
}

.update-icon.android { background: rgba(61, 220, 132, 0.1); }
.update-icon.ios { background: rgba(255, 59, 48, 0.1); }
.update-icon.web { background: rgba(74, 144, 226, 0.1); }
.update-icon.api { background: rgba(139, 92, 246, 0.1); }

.update-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.update-title {
  font-weight: 500;
  color: #1e293b;
  font-size: 13px;
}

.update-date {
  color: #64748b;
  font-size: 11px;
}

.update-status {
  font-size: 11px;
  padding: 3px 10px;
  border-radius: 10px;
  font-weight: 500;
}

.update-status.recent {
  background: rgba(61, 220, 132, 0.1);
  color: #10b981;
}

.update-status.pending {
  background: rgba(245, 158, 11, 0.1);
  color: #f59e0b;
}

.update-status.completed {
  background: rgba(99, 102, 241, 0.1);
  color: #6366f1;
}

.update-item:hover {
  background: rgba(0,0,0,0.01);
  padding-left: 8px;
}

.update-item:hover .update-icon {
  transform: scale(1.1);
}

.sheet-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: white;
  z-index: 1000;
}

.sheet-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: white;
  display: flex;
  align-items: center;
  padding: 0 25px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  z-index: 1001;
}

.sheet-header {
  display: flex;
  align-items: center;
  gap: 15px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.sheet-icon {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.sheet-icon.android { 
  background: rgba(61, 220, 132, 0.1); 
}

.sheet-icon.ios { 
  background: rgba(255, 59, 48, 0.1); 
}

.sheet-icon.web { 
  background: rgba(74, 144, 226, 0.1); 
}

.sheet-icon.api { 
  background: rgba(139, 92, 246, 0.1); 
}

.sheet-title-group {
  text-align: left;
}

.sheet-title {
  color: #1e293b;
  font-size: 18px;
  font-weight: 600;
  margin: 0;
}

.sheet-subtitle {
  color: #64748b;
  font-size: 13px;
  display: block;
  margin-top: 2px;
}

.sheet-container iframe {
  width: 100%;
  height: calc(100vh - 70px);
  margin-top: 70px;
  border: none;
  background: #f8fafc;
}

.platform-icon {
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.grid-item:hover .platform-icon {
  transform: scale(1.1);
}

@keyframes cardPop {
  0% {
    opacity: 0;
    transform: scale(0.8) translateY(60px);
  }
  50% {
    transform: scale(1.05) translateY(-10px);
  }
  70% {
    transform: scale(0.95) translateY(5px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.grid-item:nth-child(1) { animation-delay: 0.2s; }
.grid-item:nth-child(2) { animation-delay: 0.35s; }
.grid-item:nth-child(3) { animation-delay: 0.5s; }
.grid-item:nth-child(4) { animation-delay: 0.65s; }

@media (max-width: 1200px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
    max-width: 800px;
    gap: 25px;
  }
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
    max-width: 400px;
  }
  
  .grid-item {
    min-height: 160px;
  }
  
  .animated-title {
    font-size: 28px;
  }
}

@keyframes pulseGlow {
  0% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0.5;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0.8;
  }
  100% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0.5;
  }
}

@keyframes letterPop {
  0% {
    opacity: 0;
    transform: scale(0.5) translateY(-20px);
  }
  60% {
    transform: scale(1.2) translateY(5px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
</style> 