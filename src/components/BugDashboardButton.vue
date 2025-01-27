<template>
  <div class="feature-card">
    <h2>Bug Dashboard</h2>
    <p>View and manage reported bugs</p>
    <button class="feature-btn" @click="openBugDashboard">
      Open Bug Dashboard
    </button>
  </div>
</template>

<script>
export default {
  name: 'BugDashboardButton',
  methods: {
    openBugDashboard() {
      // Redirecting to the "Under Development" page when the button is clicked
      this.$router.push({ name: 'UnderDevelopment' });
      
      console.log('Bug Dashboard is under development. Please check back later.');
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
  transition: background-color 0.3s, transform 0.2s;
}

.feature-btn:hover {
  background-color: #3a7bd5;
  transform: translateY(-2px);
}
</style>
