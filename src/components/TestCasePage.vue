<template>
  <div class="test-case-page">
    <h2>Test Cases</h2>
    <div v-if="testCases.length > 0">
      <h3>Fetched Test Cases:</h3>
      <pre>{{ testCases }}</pre>
    </div>
    <div v-else>
      <p>We will be right back!</p>

    </div>
  </div>
</template>

<script>
export default {
  name: "TestCasePage",
  data() {
    return {
      testCases: [], // This will hold the test case data passed from the previous page
    };
  },
  mounted() {
    // Get the test case data passed via router state
    if (this.$route.state && this.$route.state.testCases) {
      this.testCases = this.$route.state.testCases;
    }
  },
};
</script>

<style scoped>
.test-case-page {
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
