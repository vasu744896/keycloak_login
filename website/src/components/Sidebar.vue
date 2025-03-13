<template>
    <div class="sidebar">
      <h2>BaionData</h2>
      <ul>
        <li><router-link to="/workspace">Create</router-link></li>
        <li><a href="#">My Notes</a></li>
        <li><a href="#">AI YouTube</a></li>
        <li><a href="#">AI Chat</a></li>
        <li><a href="#">Tutorial</a></li>
      </ul>
    </div>
  </template>
  
  <style scoped>
  .sidebar {
    width: 250px;
    background: #f8f9fa;
    height: 100vh;
    padding: 20px;
  }
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  .sidebar ul li {
    margin: 15px 0;
  }
  .sidebar ul li a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
  </style>
  