<template>
  <div class="prd-page">
    <h2>PRD</h2>
    <div v-if="prdData.length > 0">
      <h3>Fetched PRD Data:</h3>
      <pre>{{ prdData }}</pre>
    </div>
    <div v-else>
      <p>This feature is under development.<br>We will be adding PRD data soon.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PRDPage",
  data() {
    return {
      prdData: [], // This will hold the PRD data passed from the previous page
    };
  },
  mounted() {
    // Get the PRD data passed via router state
    if (this.$route.state && Array.isArray(this.$route.state.prdData)) {
      this.prdData = this.$route.state.prdData;
    }
  },
};
</script>

<style scoped>
.prd-page {
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
