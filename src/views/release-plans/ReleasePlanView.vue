<template>
  <div class="selection-container">
    <div class="back-nav">
      <button class="back-btn" @click="goBack">
        <span class="back-icon">←</span>
        <span class="back-text">Back</span>
      </button>
    </div>

    <div class="selection-content">
      <div class="animated-header">
        <h2 class="selection-title">QA Release Plan Document</h2>
        <div class="header-line"></div>
      </div>
      
      <div class="list-container">
        <div 
          v-for="item in items" 
          :key="item.type"
          class="list-item" 
          @click="openReleaseSheet(item.type)"
        >
          <div :class="['item-icon', item.iconClass]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                :d="item.icon"
              />
            </svg>
          </div>
          <div class="item-content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
          <div class="item-arrow">→</div>
        </div>
      </div>

      <div class="info-section">
        <div class="info-card">
          <h4>Recent Updates</h4>
          <ul>
            <li>Mobile Release Plan updated - Oct 2023</li>
            <li>Web Release Plan updated - Sept 2023</li>
            <li>Desktop Release Plan updated - Aug 2023</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Sheet Display -->
    <div v-if="showSheet" class="sheet-container">
      <div class="back-nav">
        <button class="back-btn" @click="closeSheet">
          <span class="back-icon">←</span>
          <span class="back-text">Back</span>
        </button>
      </div>
      <div class="iframe-container">
        <iframe 
          :src="sheetUrl"
          width="100%" 
          height="100%"
          frameborder="0"
          @load="iframeLoaded"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReleasePlanView',
  data() {
    return {
      showSheet: false,
      loading: false,
      sheetUrl: '',
      items: [
        {
          type: 'mobile',
          title: 'Mobile QA Release',
          description: 'View mobile QA release plans',
          iconClass: 'web',
          icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
        },
        {
          type: 'web',
          title: 'Web QA Release',
          description: 'View web QA release plans',
          iconClass: 'mobile',
          icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
        },
        {
          type: 'desktop',
          title: 'Desktop QA Release',
          description: 'View desktop QA release plans',
          iconClass: 'api',
          icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
        }
      ]
    }
  },
  methods: {
    goBack() {
      if (this.showSheet) {
        this.closeSheet();
      } else {
        this.$router.push('/');
      }
    },
    openReleaseSheet(type) {
      this.loading = true;
      this.showSheet = true;
      
      // Add your sheet IDs here
      const sheetIds = {
        mobile: 'YOUR_MOBILE_SHEET_ID',
        web: 'YOUR_WEB_SHEET_ID',
        desktop: 'YOUR_DESKTOP_SHEET_ID'
      };
      
      this.sheetUrl = `https://docs.google.com/spreadsheets/d/${sheetIds[type]}/preview`;
    },
    closeSheet() {
      this.showSheet = false;
      this.sheetUrl = '';
    },
    iframeLoaded() {
      this.loading = false;
    }
  }
}
</script>

<style scoped>
.selection-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: white;
  z-index: 1001;
  overflow-y: auto;
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
  font-size: 16px;
}

.back-icon {
  font-size: 24px;
}

.selection-content {
  padding: 80px 20px 20px;
  max-width: 800px;
  margin: 0 auto;
}

.animated-header {
  text-align: center;
  margin-bottom: 40px;
  position: relative;
  padding-bottom: 15px;
}

.selection-title {
  font-size: 32px;
  color: #1e293b;
  margin: 0;
  font-weight: 600;
  opacity: 0;
  animation: titleFadeIn 0.8s ease forwards;
}

.header-line {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 3px;
  background: #4a90e2;
  animation: lineExpand 0.8s ease forwards 0.3s;
}

.description-text {
  text-align: center;
  margin-bottom: 30px;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto 30px;
}

.description-text p {
  margin: 8px 0;
  line-height: 1.6;
  font-size: 15px;
}

.list-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.list-item {
  display: flex;
  align-items: center;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  cursor: pointer;
  transition: transform 0.2s ease;
  animation: slideIn 0.5s ease forwards;
  opacity: 0;
}

.list-item:nth-child(1) { animation-delay: 0.1s; }
.list-item:nth-child(2) { animation-delay: 0.2s; }
.list-item:nth-child(3) { animation-delay: 0.3s; }

.item-icon {
  width: 45px;
  height: 45px;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.item-icon.web { background: #3b82f6; }
.item-icon.mobile { background: #10b981; }
.item-icon.api { background: #8b5cf6; }

.item-content {
  flex: 1;
  margin-left: 20px;
}

.item-content h3 {
  font-size: 16px;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 5px;
}

.item-content p {
  font-size: 14px;
  color: #64748b;
  margin: 0;
}

.item-arrow {
  font-size: 20px;
  color: #94a3b8;
  margin-left: 20px;
  transition: transform 0.2s ease;
}

.list-item:hover {
  transform: translateX(5px);
}

.list-item:hover .item-arrow {
  transform: translateX(5px);
  color: #4a90e2;
}

@keyframes titleFadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes lineExpand {
  from { width: 0; }
  to { width: 60px; }
}

@keyframes slideIn {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}

@media (max-width: 640px) {
  .selection-title {
    font-size: 24px;
  }
  
  .list-item {
    padding: 15px;
  }
  
  .item-icon {
    width: 40px;
    height: 40px;
  }
}

.sheet-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  z-index: 1001;
  display: flex;
  flex-direction: column;
}

.iframe-container {
  flex: 1;
  margin-top: 60px;
  background: white;
}

iframe {
  width: 100%;
  height: 100%;
  border: none;
  background: white;
}

.info-section {
  margin-top: 40px;
  padding: 20px;
}

.info-card {
  background: #f8fafc;
  border-radius: 12px;
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
}

.info-card h4 {
  color: #1e293b;
  font-size: 16px;
  margin: 0 0 15px;
  font-weight: 600;
}

.info-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.info-card li {
  color: #64748b;
  font-size: 14px;
  padding: 8px 0;
  border-bottom: 1px solid #e2e8f0;
}

.info-card li:last-child {
  border-bottom: none;
}

/* Add styles for no results */
.no-results {
  text-align: center;
  padding: 20px;
  color: #64748b;
  font-size: 15px;
}

/* Add highlight for matching text */
.highlight {
  background-color: rgba(74, 144, 226, 0.1);
  padding: 0 2px;
  border-radius: 2px;
}
</style> 