<template>
  <div class="login-container">
    <div class="branding">
      <h1 class="logo">BaionData</h1>
      <p class="tagline">Your Secure Authentication</p>
      <p class="description">Access your workspace securely with Keycloak</p>
      <button class="left-btn" @click="goToWorkspace">Go to Workspace</button>
    </div>

    <div class="login-form">
      <div class="tabs">
        <router-link to="/" class="tab" :class="{ active: isActiveRoute('/') }">Login</router-link>
        <router-link to="/register" class="tab" :class="{ active: isActiveRoute('/register') }">Register</router-link>
      </div>

      <input v-model="email" type="email" placeholder="Enter your email" class="input-field" />
      <input v-model="password" type="password" placeholder="Enter your password" class="input-field" />

      <div class="remember-forgot">
        <label>
          <input type="checkbox" />
          Remember Me
        </label>
        <router-link to="/forgot-password">Forgot password?</router-link>
      </div>

      <button class="login-btn" @click="login">Login</button>

      <div class="or-divider">OR</div>

      <button class="google-login" @click="loginWithGoogle">
        <img src="/google_logo.png" alt="Google Logo" class="google-logo" />
        Sign in with Google
      </button>

      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

// Keycloak Configuration
const KEYCLOAK_CONFIG = {
  url: "http://localhost:8080",
  realm: "page",
  clientId: "page-app",
};

const email = ref("");
const password = ref("");
const errorMessage = ref("");
const router = useRouter();

// Login Function
const login = async () => {
  if (!email.value || !password.value) {
    errorMessage.value = "Please enter both email and password.";
    return;
  }

  try {
    const response = await axios.post(
      `${KEYCLOAK_CONFIG.url}/realms/${KEYCLOAK_CONFIG.realm}/protocol/openid-connect/token`,
      new URLSearchParams({
        client_id: KEYCLOAK_CONFIG.clientId,
        grant_type: "password",
        username: email.value,
        password: password.value,
      }),
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    const token = response.data.access_token;
    localStorage.setItem("token", token); // Store token

    router.push("/workspace"); // Redirect after login
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    errorMessage.value = "Invalid credentials. Please try again.";
  }
};

// Google Login via Keycloak
const loginWithGoogle = () => {
  window.location.href = `${KEYCLOAK_CONFIG.url}/realms/${KEYCLOAK_CONFIG.realm}/protocol/openid-connect/auth?client_id=${KEYCLOAK_CONFIG.clientId}&redirect_uri=${window.location.origin}/workspace&response_type=code&scope=openid&kc_idp_hint=google`;
};

// Check active route for styling
const isActiveRoute = (route) => {
  return router.currentRoute.value.path === route;
};

// Redirect if already logged in
if (localStorage.getItem("token")) {
  router.push("/workspace");
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Arial, sans-serif;
}

.branding {
  width: 40%;
  background-color: #581845;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  text-align: center;
  height: 100vh;
}

.left-btn {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #0cf704;
  color: black;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s ease-in-out;
}

.left-btn:hover {
  background-color: #09c402;
}

.login-form {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  height: 100vh;
}

.tabs {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 20px;
  border-bottom: 2px solid #ccc;
  padding-bottom: 5px;
  width: 100%;
  max-width: 300px;
}

.tab {
  text-decoration: none;
  font-size: 1rem;
  color: black;
  padding: 10px 15px;
  transition: all 0.3s ease-in-out;
}

.active {
  font-weight: bold;
  border-bottom: 3px solid #0cf704;
}

.input-field {
  width: 100%;
  max-width: 300px;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.remember-forgot {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 300px;
  font-size: 0.9rem;
  margin-bottom: 15px;
}

.remember-forgot a {
  color: #f13809;
  text-decoration: none;
}

.login-btn {
  width: 100%;
  max-width: 300px;
  padding: 12px;
  background-color: #581845;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.or-divider {
  margin: 10px 0;
  font-size: 0.9rem;
  color: gray;
}

.google-login {
  width: 100%;
  max-width: 300px;
  padding: 12px;
  background-color: white;
  color: black;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 1rem;
  font-weight: bold;
}

.google-logo {
  width: 20px;
  height: 20px;
}

.error-message {
  color: red;
  margin-top: 10px;
  font-size: 0.9rem;
}
</style>
