<template>
  <div class="feature-card">
    <h2>Test Cases</h2>
    <p>View and manage test cases</p>
    <button class="feature-btn" @click="openTestCases">
      Open Test Cases
    </button>

    <!-- Sheet Display -->
    <div v-if="showSheet" class="sheet-container">
      <iframe 
        :src="`https://docs.google.com/spreadsheets/d/1Ni5BEJxJqfGwxqVmQvxw_m3Y-xNbvUkXpD8HaEqfvd4/edit#gid=1234567890`"
        width="100%" 
        height="100%"
        frameborder="0"
        @load="iframeLoaded"
      ></iframe>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="loading-overlay">
      <div class="loading-spinner"></div>
      <span>Loading test cases...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestCaseButton',
  data() {
    return {
      showSheet: false,
      loading: false,
      error: null
    }
  },
  methods: {
    async openTestCases() {
      this.loading = true;
      this.showSheet = true;

      try {
        const apiUrl = 'http://127.0.0.1:8000/google-sheets/data/?spreadsheetId=1Ni5BEJxJqfGwxqVmQvxw_m3Y-xNbvUkXpD8HaEqfvd4&range=Sheet1!A1:C10';
        
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Request timeout')), 5000)
        );

        const response = await Promise.race([
          fetch(apiUrl, {
            method: 'GET',
            headers: {
              'Accept': 'application/json'
            }
          }),
          timeoutPromise
        ]);

        const data = await response.json();
        console.log('Data received:', data);
      } catch (error) {
        console.error('API Error:', error);
        this.error = error.message;
      } finally {
        this.loading = false;
      }
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
  overflow-y: auto;
}

.loading-overlay {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.9);
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
  border-top: 3px solid #4a90e2;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style> 