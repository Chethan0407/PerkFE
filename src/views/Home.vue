<template>
  <div class="home">
    <!-- Hamburger Menu -->
    <div class="nav-menu">
      <button class="hamburger-btn" @click="toggleMenu">
        <span class="hamburger-icon" :class="{ 'open': isMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <!-- Menu Overlay -->
      <div class="menu-overlay" v-if="isMenuOpen" @click="closeMenu"></div>

      <!-- Side Menu -->
      <div class="side-menu" :class="{ 'open': isMenuOpen }">
        <div class="menu-header">
          <h3>Menu</h3>
          <button class="close-btn" @click="closeMenu">×</button>
        </div>
        <ul class="menu-items">
          <li><a href="#" @click="navigateTo('home')">Home</a></li>
          <li><a href="#" @click="navigateTo('release-plans')">Release Plans</a></li>
          <li><a href="#" @click="navigateTo('bug-dashboard')">Bug Dashboard</a></li>
          <li><a href="#" @click="navigateTo('prd')">PRD</a></li>
        </ul>
      </div>
    </div>

    <div class="page-header">
      <h1 class="animated-title">
        <span class="title-letter" v-for="(letter, index) in 'QA Dashboard'" :key="index"
              :style="{ animationDelay: `${index * 0.1}s` }">
          {{ letter === ' ' ? '\u00A0' : letter }}
        </span>
      </h1>
      <div class="header-line"></div>
      <p class="subtitle">Access all QA tools and documentation in one place</p>
    </div>

    <div class="cards-container">
      <div class="card-wrapper" v-for="(card, index) in cards" :key="index"
           :style="{ animationDelay: `${index * 0.2}s` }">
        <div class="feature-card" @mouseenter="card.isHovered = true" @mouseleave="card.isHovered = false"
             :class="{ 'hovered': card.isHovered }">
          <div class="card-content">
            <h2>{{ card.title }}</h2>
            <p>{{ card.description }}</p>
            <button class="feature-btn" @click="card.action">{{ card.buttonText }}</button>
          </div>
          <div class="card-glow"></div>
        </div>
      </div>
    </div>

    <!-- Add animated background -->
    <div class="animated-background">
      <div class="wave-container">
        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
        <div class="wave wave3"></div>
        <div class="wave wave4"></div>
      </div>
    </div>

    <div v-if="showCelebration" class="celebration">
      <div v-for="n in 50" :key="`confetti-${n}`" class="confetti"></div>
      <div v-if="showLaunchMessage" class="launch-message">
        <h1>🎉 Launch Celebrations! 🎉</h1>
      </div>
    </div>
  </div>
</template>

<script>
import PRDButton from '@/components/PRDButton.vue'
import ReleasePlanButton from '@/components/ReleasePlanButton.vue'
import BugDashboardButton from '@/components/BugDashboardButton.vue'

export default {
  name: 'Home',
  components: {
    PRDButton,
    ReleasePlanButton,
    BugDashboardButton
  },
  data() {
    return {
      showCelebration: false,
      showLaunchMessage: false,
      isMenuOpen: false,
      cards: [
        {
          title: 'Test Cases',
          description: 'View and manage test cases',
          buttonText: 'Open Test Cases',
          isHovered: false,
          action: () => this.$router.push('/test-cases')
        },
        {
          title: 'QA Release Plan',
          description: 'View QA release planning documents',
          buttonText: 'QA Release Plan',
          isHovered: false,
          action: () => this.$router.push('/release-plans')
        },
        {
          title: 'Bug Dashboard',
          description: 'View and manage reported bugs',
          buttonText: 'Open Bug Dashboard',
          isHovered: false,
          action: () => this.$router.push('/bug-dashboard')
        },
        {
          title: 'PRD',
          description: 'Manage Product Requirements Documents',
          buttonText: 'Open PRD',
          isHovered: false,
          action: () => this.$router.push('/prd')
        }
      ]
    }
  },
  methods: {
    triggerCelebration() {
      if (localStorage.getItem('celebrationTriggered') === 'true') {
        return;
      }

      this.showCelebration = true;
      this.showLaunchMessage = true;

      localStorage.setItem('celebrationTriggered', 'true');

      setTimeout(() => {
        this.showCelebration = false;
        this.showLaunchMessage = false;
      }, 3000);
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
    },
    closeMenu() {
      this.isMenuOpen = false;
      document.body.style.overflow = '';
    },
    navigateTo(route) {
      this.closeMenu();
      if (route === 'home') {
        this.$router.push('/');
      } else if (route === 'release-plans') {
        this.$router.push('/release-plans');
      } else if (route === 'bug-dashboard') {
        // Handle bug dashboard navigation
      } else if (route === 'prd') {
        // Handle PRD navigation
      }
    }
  },
  mounted() {
    this.triggerCelebration();
  }
}
</script>

<style scoped>
.home {
  min-height: 100vh;
  padding: 20px;
  background: #f8fafc;
}

.page-header {
  text-align: center;
  margin-bottom: 40px;
  padding-top: 30px;
}

.page-header h1 {
  font-size: 36px;
  color: #1e293b;
  margin-bottom: 10px;
}

.subtitle {
  color: #64748b;
  font-size: 16px;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  z-index: 1;
  background: transparent;
}

.card-wrapper {
  position: relative;
}

.celebration {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
}

.confetti {
  position: fixed;
  width: var(--size);
  height: var(--size);
  background: var(--color);
  opacity: 0.8;
  animation: confetti var(--duration) ease-in-out var(--delay) forwards;
}

.launch-message {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.9);
  padding: 20px 40px;
  border-radius: 10px;
  text-align: center;
  animation: messageAppear 0.5s ease forwards;
}

@keyframes confetti {
  0% {
    transform: translate(0, 0) rotate(0deg);
    opacity: 0.8;
  }
  100% {
    transform: translate(var(--x), var(--y)) rotate(var(--rotation));
    opacity: 0;
  }
}

@keyframes messageAppear {
  from {
    opacity: 0;
    transform: translate(-50%, -30%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}

@media (max-width: 768px) {
  .cards-container {
    grid-template-columns: 1fr;
    max-width: 400px;
  }
}

.nav-menu {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1000;
}

.hamburger-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 1002;
}

.hamburger-icon {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
}

.hamburger-icon span {
  display: block;
  width: 100%;
  height: 2px;
  background: #1e293b;
  transition: all 0.3s ease;
}

.hamburger-icon.open span:first-child {
  transform: translateY(8px) rotate(45deg);
}

.hamburger-icon.open span:nth-child(2) {
  opacity: 0;
}

.hamburger-icon.open span:last-child {
  transform: translateY(-8px) rotate(-45deg);
}

.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1001;
}

.side-menu {
  position: fixed;
  top: 0;
  left: -280px;
  width: 280px;
  height: 100vh;
  background: white;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
  transition: left 0.3s ease;
  z-index: 1002;
}

.side-menu.open {
  left: 0;
}

.menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #e2e8f0;
}

.menu-header h3 {
  margin: 0;
  color: #1e293b;
  font-size: 18px;
}

.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  color: #64748b;
  cursor: pointer;
  padding: 5px;
}

.menu-items {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-items li {
  border-bottom: 1px solid #e2e8f0;
}

.menu-items a {
  display: block;
  padding: 15px 20px;
  color: #1e293b;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.menu-items a:hover {
  background-color: #f1f5f9;
}

.feature-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  max-width: 300px;
  width: 100%;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    120deg,
    transparent 0%,
    transparent 40%,
    rgba(74, 144, 226, 0.1) 50%,
    transparent 60%,
    transparent 100%
  );
  background-size: 200% 100%;
  transition: all 0.8s ease;
  z-index: 1;
}

.feature-card::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150%;
  height: 150%;
  background: radial-gradient(
    circle at center,
    rgba(74, 144, 226, 0.1) 0%,
    transparent 60%
  );
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;
}

.feature-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 25px rgba(74, 144, 226, 0.15);
  border-color: rgba(74, 144, 226, 0.3);
}

.feature-card:hover::before {
  background-position: -50% 0;
}

.feature-card:hover::after {
  transform: translate(-50%, -50%) scale(1);
}

.card-content {
  position: relative;
  z-index: 2;
}

.feature-btn {
  background: linear-gradient(135deg, #4a90e2, #357abd);
  border: none;
  color: white;
  padding: 12px 28px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 15px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.feature-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent 0%,
    transparent 40%,
    rgba(255, 255, 255, 0.2) 50%,
    transparent 60%,
    transparent 100%
  );
  background-size: 200% 100%;
  transition: all 0.8s ease;
}

.feature-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(74, 144, 226, 0.25);
}

.feature-btn:hover::before {
  background-position: 100% 0;
}

.card-wrapper {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
  animation: cardPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes cardPop {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.feature-card h2 {
  background: linear-gradient(135deg, #1e293b, #334155);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 24px;
  margin-bottom: 12px;
  transition: transform 0.3s ease;
}

.feature-card:hover h2 {
  transform: translateY(-3px);
}

.feature-card p {
  color: #64748b;
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.feature-card:hover p {
  transform: translateY(-2px);
  color: #475569;
}

.test-types {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 10px 0;
  color: #666;
  font-size: 14px;
}

.test-types span {
  color: #4a90e2;
}

.test-types span:nth-child(even) {
  color: #ccc;
}

.animated-background {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40vh;
  z-index: 0;
  overflow: hidden;
  opacity: 0.5;
}

.wave-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  height: 100%;
  background: url('data:image/svg+xml,<svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg"><path d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"/></svg>') repeat-x;
  background-size: 1200px 100%;
  animation: wave 25s linear infinite;
  transform-origin: center bottom;
}

.wave1 {
  background: linear-gradient(90deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
  animation-duration: 20s;
  opacity: 0.3;
}

.wave2 {
  background: linear-gradient(90deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.15));
  animation-duration: 15s;
  animation-direction: reverse;
  opacity: 0.2;
}

.wave3 {
  background: linear-gradient(90deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
  animation-duration: 25s;
  opacity: 0.1;
}

.wave4 {
  background: linear-gradient(90deg, rgba(99, 102, 241, 0.25), rgba(139, 92, 246, 0.25));
  animation-duration: 30s;
  animation-direction: reverse;
  opacity: 0.05;
}

@keyframes wave {
  0% {
    transform: translateX(0) translateZ(0) scaleY(1);
  }
  50% {
    transform: translateX(-25%) translateZ(0) scaleY(0.8);
  }
  100% {
    transform: translateX(-50%) translateZ(0) scaleY(1);
  }
}

.animated-title {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2px;
}

.title-letter {
  display: inline-block;
  font-size: 36px;
  color: #1e293b;
  opacity: 0;
  animation: letterDrop 0.6s ease forwards;
}

.header-line {
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, #4a90e2, #63b3ed);
  margin: 15px auto;
  animation: lineExpand 0.8s ease forwards 1s;
}

.subtitle {
  opacity: 0;
  animation: fadeIn 0.6s ease forwards 1.5s;
}

.feature-card {
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle at center,
    rgba(74, 144, 226, 0.1) 0%,
    rgba(74, 144, 226, 0) 60%
  );
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
}

.feature-card.hovered {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

.feature-card.hovered .card-glow {
  transform: translate(-50%, -50%) scale(1);
}

@keyframes letterDrop {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(3px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes lineExpand {
  from { width: 0; }
  to { width: 100px; }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes cardSlideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
