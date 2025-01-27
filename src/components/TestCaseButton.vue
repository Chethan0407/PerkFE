<template>
  <div class="feature-card">
    <h2>Test Cases</h2>
    <p>View and manage test cases</p>
    <button class="feature-btn" @click="openTestCases">
      Open Test Cases
    </button>
  </div>
</template>

<script>
export default {
  name: 'TestCaseButton',
  methods: {
    openTestCases() {
      this.$router.push('/test-cases');
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
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 6px;
}

.feature-btn:hover {
  background-color: #357abd;
}
</style>

