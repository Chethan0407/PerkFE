<template>
  <div class="home">
    <div class="features">
      <div class="top-row">
        <TestCaseButton />
        <BugDashboardButton />
      </div>
      <PRDButton />
    </div>
  </div>
</template>

<script>
import TestCaseButton from '@/components/TestCaseButton.vue'
import PRDButton from '@/components/PRDButton.vue'
import BugDashboardButton from '@/components/BugDashboardButton.vue'

export default {
  name: 'Home',
  components: {
    TestCaseButton,
    PRDButton,
    BugDashboardButton
  }
}
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 60px);
}

.features {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  max-width: 800px;
  width: 100%;
}

.top-row {
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
}

@media (max-width: 768px) {
  .top-row {
    flex-direction: column;
  }
}
</style>
