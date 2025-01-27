<template>
  <div id="app">
    <header>
      <div class="perk-header">
        <div class="header-content">
          <h1><strong>Perk</strong></h1>
        </div>
      </div> 
    </header>
    <div class="main-content">
      <router-view></router-view>
    </div>
    <footer>
      <div class="footer-content">
        <div class="powered-by">Powered by <span class="zyle">Zyle</span></div>
        <div class="tagline">Bridging developer and QA excellence</div>
      </div>
    </footer>
    <button class="chat-button" @click="openChat">
      <div class="ai-logo">
        <div class="ai-circle"></div>
        <div class="ai-core"></div>
        <div class="ai-orbit"></div>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    openChat() {
      console.log('Open AI chat assistant');
      // Add functionality to open the chat here
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

body {
  margin: 0;
  padding: 0;
  background-color: white;
  min-height: 100vh;
}

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.perk-header {
  background: linear-gradient(
    45deg, 
    #FF6B6B, 
    #FFA07A, 
    #FFD700, 
    #98FB98, 
    #00CED1, 
    #9370DB, 
    #FF69B4
  );
  background-size: 700% 700%;
  animation: gradientBG 20s ease infinite;
  padding: 10px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

@keyframes gradientBG {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.header-content {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
}

h1 {
  font-weight: 700;
  color: white;
  margin: 0;
  font-size: 2.5em; /* Increased font size */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  letter-spacing: 1px;
}

.main-content {
  padding-top: 60px;
  flex-grow: 1;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  margin: 20px;
  border-radius: 10px;
}

footer {
  padding: 10px;
  background-color: rgba(245, 245, 245, 0.8);
  border-top: 1px solid #e0e0e0;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 20px;
}

.powered-by {
  font-weight: 500;
  color: #666;
  font-size: 0.9em;
  letter-spacing: 0.5px;
}

.tagline {
  font-style: italic;
  color: #888;
  font-size: 0.8em;
  margin-top: 5px;
}

.zyle {
  font-weight: 700;
  color: #4a90e2;
  text-transform: uppercase;
}

.chat-button {
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #4a90e2;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.chat-button:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.ai-logo {
  position: relative;
  width: 40px;
  height: 40px;
}

.ai-circle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid white;
  border-radius: 50%;
}

.ai-core {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30%;
  height: 30%;
  background-color: white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.ai-orbit {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid transparent;
  border-top: 2px solid white;
  border-radius: 50%;
  animation: orbit 1.5s linear infinite;
}

@keyframes orbit {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
