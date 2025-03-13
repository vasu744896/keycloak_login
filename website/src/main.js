import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { initKeycloak } from './services/keycloak'; // Import the keycloak service

const app = createApp(App);

initKeycloak()
  .then(() => {
    // Once Keycloak is initialized successfully, mount the app
    app.use(router);
    app.mount('#app');
  })
  .catch((error) => {
    console.error('Keycloak initialization failed:', error);
  });
