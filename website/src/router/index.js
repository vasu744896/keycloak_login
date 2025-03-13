import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../components/LoginRegister.vue";
import RegisterPage from "../components/Register.vue";
import ForgotPassword from "../components/ForgotPassword.vue";
import Workspace from "../components/Workspace.vue";
import CallbackPage from "../components/CallbackPage.vue"; // New page to handle Keycloak callback
import { getToken, processAuthCallback } from "../services/keycloak"; // Ensure processAuthCallback is imported

const routes = [
  { path: "/", component: LoginPage },
  { path: "/register", component: RegisterPage },
  { path: "/forgot-password", component: ForgotPassword },
  {
    path: "/workspace",
    component: Workspace,
    meta: { requiresAuth: true }, // Protect this route with authentication
  },
  // Add a new route for handling the Keycloak authentication callback
  { path: "/callback", component: CallbackPage }, 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guard to check authentication
router.beforeEach((to, from, next) => {
  const token = getToken(); // Use the Keycloak token check

  if (to.meta.requiresAuth && !token) {
    // If the route requires authentication but no token is found, redirect to login
    next("/"); 
  } else {
    next(); // Proceed if authenticated or route doesn't require auth
  }
});

export default router;
