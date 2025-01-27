// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router
import store from './store'; // If you have a Vuex store

const app = createApp(App);

app.use(router); // Use the router in your app
app.use(store);  // Use the store if you're using Vuex

app.mount('#app'); // Mount the app to the DOM
