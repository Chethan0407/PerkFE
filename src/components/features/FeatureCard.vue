<template>
  <div class="feature-card">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <button @click="onActionClick">{{ actionText }}</button>
  </div>
</template>

<script>
export default {
  name: 'FeatureCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    actionText: {
      type: String,
      default: 'Learn More'
    }
  },
  methods: {
    onActionClick() {
      this.$emit('action-clicked')
    }
  }
}
</script>

<style scoped>
.feature-card {
  /* Add your styles here */
}
</style>
