<template>
  <div class="login-container">
      <div class="branding">
        <h1 class="logo">BaionData</h1>
        <p class="tagline">BaionData add some words</p>
        <p class="description">
          BaionData add contant
        </p>
    </div>

    <!-- Right Side - Register Form -->
    <div class="login-form">
      <div class="tabs">
        <router-link to="/" class="tab" exact-active-class="active">Login</router-link>
        <router-link to="/register" class="tab" exact-active-class="active">Register</router-link>
      </div>

      <input type="text" placeholder="Enter your name" class="input-field" />
      <input type="email" placeholder="Enter your email" class="input-field" />
      <input type="password" placeholder="Create a password" class="input-field" />
      <input type="password" placeholder="Confirm your password" class="input-field" />

      <button class="login-btn">Register</button>

      <div class="or-divider">OR</div>

      <button class="google-login">
        <img src="/google_logo.png" alt="Google Logo" class="google-logo" />
        Sign up with Google
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Container */
.login-container {
  display: flex;
  height: 100vh;
  font-family: Arial, sans-serif;
}

/* Branding Section */
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
}

.logo {
  font-size: 2rem;
  font-weight: bold;
}

.tagline {
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 10px;
}

.description {
  margin-top: 10px;
  font-size: 1rem;
  line-height: 1.5;
}

/* Login Form */
.login-form {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
}

.tabs {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.tab {
  text-decoration: none;
  font-size: 1rem;
  color: black;
  padding-bottom: 5px;
}

.active {
  font-weight: bold;
  border-bottom: 2px solid #0cf704;
}

/* Input Fields */
.input-field {
  width: 100%;
  max-width: 300px;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* Login Button */
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

/* Google Button */
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
</style>
