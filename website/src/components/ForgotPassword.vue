<template>
    <div class="forgot-password-container">
      <h2>Reset Your Password</h2>
      <p>Enter your email address, and we'll send you a link to reset your password.</p>
      
      <input type="email" v-model="email" placeholder="Enter your email" class="input-field" />
      
      <button @click="sendResetLink" class="reset-btn">Send Reset Link</button>
  
      <p class="back-to-login">
        <router-link to="/">Back to Login</router-link>
      </p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: ''
      };
    },
    methods: {
      sendResetLink() {
        // Implement API call for password reset request
        console.log(`Reset link sent to: ${this.email}`);
        alert("If this email is registered, you will receive a password reset link.");
      }
    }
  };
  </script>
  
  <style scoped>
  .forgot-password-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
  }
  
  .input-field {
    width: 100%;
    max-width: 300px;
    padding: 12px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .reset-btn {
    width: 100%;
    max-width: 300px;
    padding: 12px;
    background-color: #f13809;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    margin-top: 10px;
  }
  
  .back-to-login a {
    color: #f13809;
    text-decoration: none;
    font-size: 0.9rem;
    margin-top: 10px;
    display: inline-block;
  }
  </style>
  