<template>
  <div>
    <p>Logging you in...</p>
  </div>
</template>

<script>
import { processAuthCallback } from "../services/keycloak"; // Import the function to process the callback

export default {
  name: "CallbackPage",
  async mounted() {
    try {
      // Process the Keycloak callback
      await processAuthCallback();

      // Redirect to workspace after successful login
      this.$router.push("/workspace");
    } catch (error) {
      console.error("Error during authentication callback:", error);

      // Redirect to login page if authentication fails
      this.$router.push("/");
    }
  },
};
</script>
