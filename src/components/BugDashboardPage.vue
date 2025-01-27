<template>
    <div class="bug-dashboard-page">
      <h2>Bug Dashboard</h2>
      <div v-if="bugs.length > 0">
        <h3>Fetched Bugs:</h3>
        <pre>{{ bugs }}</pre>
      </div>
      <div v-else>
        <p>No bug data available.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "BugDashboardPage",
    data() {
      return {
        bugs: [], // This will hold the bug data passed from the previous page
      };
    },
    mounted() {
      // Get the bug data passed via router state
      if (this.$route.state && this.$route.state.bugs) {
        this.bugs = this.$route.state.bugs;
      }
    },
  };
  </script>
  
  <style scoped>
  .bug-dashboard-page {
    padding: 20px;
  }
  
  h2 {
    color: #333;
  }
  
  pre {
    background-color: #f4f4f4;
    padding: 10px;
    border-radius: 5px;
  }
  </style>
  