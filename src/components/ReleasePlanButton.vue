<template>
  <div class="feature-card">
    <h2>QA Release Plan</h2>
    <p>View QA release planning documents</p>
    <button class="feature-btn" @click="openReleasePlan">
      QA Release Plan
    </button>

    <!-- Release Plan Selection Page -->
    <div v-if="showSelection" class="selection-container">
      <div class="back-nav">
        <button class="back-btn" @click="closeSelection">
          <span class="back-icon">←</span>
          <span class="back-text">Back</span>
        </button>
      </div>

      <div class="selection-content">
        <h2 class="selection-title">Select Release Plan Type</h2>
        
        <div class="cards-grid">
          <!-- Current Release Card -->
          <div class="test-card web" @click="openReleaseSheet('current')">
            <div class="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
              </svg>
            </div>
            <h3>Current Release</h3>
            <p>View current release planning</p>
          </div>

          <!-- Future Release Card -->
          <div class="test-card mobile" @click="openReleaseSheet('future')">
            <div class="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3>Future Releases</h3>
            <p>View upcoming release plans</p>
          </div>

          <!-- Past Release Card -->
          <div class="test-card api" @click="openReleaseSheet('past')">
            <div class="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3>Past Releases</h3>
            <p>View previous release history</p>
          </div>

          <!-- Release Timeline Card -->
          <div class="test-card desktop" @click="openReleaseSheet('timeline')">
            <div class="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3>Release Timeline</h3>
            <p>View complete release roadmap</p>
          </div>
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
      <iframe 
        :src="`https://docs.google.com/spreadsheets/d/YOUR_RELEASE_PLAN_SHEET_ID/preview`"
        width="100%" 
        height="100%"
        frameborder="0"
        @load="iframeLoaded"
      ></iframe>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="loading-overlay">
      <div class="loading-spinner"></div>
      <span>Loading release plan...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReleasePlanButton',
  data() {
    return {
      showSelection: false,
      showSheet: false,
      loading: false,
      error: null
    }
  },
  methods: {
    openReleasePlan() {
      this.$router.push('/release-plans');
    },
    closeSelection() {
      this.showSelection = false;
    },
    openReleaseSheet(type) {
      this.loading = true;
      this.showSheet = true;
      this.showSelection = false;

      try {
        // You can add your sheet IDs here for different types
        const sheetIds = {
          current: 'YOUR_CURRENT_SHEET_ID',
          future: 'YOUR_FUTURE_SHEET_ID',
          past: 'YOUR_PAST_SHEET_ID',
          timeline: 'YOUR_TIMELINE_SHEET_ID'
        };
        
        // Handle sheet loading here
      } catch (error) {
        console.error('Error:', error);
        this.error = error.message;
      }
    },
    closeSheet() {
      this.showSheet = false;
      this.showSelection = true;
    },
    iframeLoaded() {
      this.loading = false;
    }
  }
}
</script>

<style scoped>
.feature-card {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  max-width: 300px;
  width: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

h2 {
  margin-top: 0;
  color: #333;
  font-size: 24px;
}

p {
  color: #666;
  margin-bottom: 20px;
}

.feature-btn {
  background-color: #4a90e2;
  border: none;
  color: white;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.3s ease;
}

.feature-btn:hover {
  background-color: #3a7bd5;
}

.sheet-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: white;
  z-index: 1001;
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
  color: #10b981;
}

.back-icon {
  font-size: 24px;
}

.sheet-container iframe {
  margin-top: 60px;
  height: calc(100vh - 60px);
}

.loading-overlay {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.95);
  padding: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 1002;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.loading-spinner {
  width: 20px;
  height: 20px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #10b981;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.selection-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #f8fafc;
  z-index: 1001;
  overflow-y: auto;
  animation: fadeIn 0.3s ease;
}

.selection-content {
  padding: 40px 40px 40px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: slideDown 0.3s ease;
}

.selection-title {
  text-align: center;
  font-size: 28px;
  color: #1e293b;
  margin: 25px 0 45px;
  font-weight: 600;
  position: relative;
  padding-bottom: 12px;
  animation: titleAppear 0.8s ease forwards;
  opacity: 0;
  width: 100%;
  max-width: 350px;
  letter-spacing: 0.5px;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.test-card {
  position: relative;
  background: white;
  border-radius: 14px;
  padding: 25px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  animation: cardFloat 0.5s ease forwards;
  animation-delay: calc(var(--i, 0) * 0.1s);
  opacity: 0;
}

.card-icon {
  width: 55px;
  height: 55px;
  margin: 0 auto 15px;
  padding: 14px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  color: white;
}

.test-card.web .card-icon { background: #10b981; }
.test-card.mobile .card-icon { background: #3b82f6; }
.test-card.api .card-icon { background: #8b5cf6; }
.test-card.desktop .card-icon { background: #f59e0b; }

.test-card h3 {
  font-size: 16px;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 8px;
}

.test-card p {
  font-size: 13px;
  color: #64748b;
  margin: 0;
  line-height: 1.5;
}

.test-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.test-card:hover .card-icon {
  transform: scale(1.1);
}

@keyframes cardFloat {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.test-card:nth-child(1) { --i: 1; }
.test-card:nth-child(2) { --i: 2; }
.test-card:nth-child(3) { --i: 3; }
.test-card:nth-child(4) { --i: 4; }

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideDown {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style> 