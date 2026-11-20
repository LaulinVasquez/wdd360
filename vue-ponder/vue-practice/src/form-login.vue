<script setup lang="ts">
import { ref } from 'vue';

const email = ref<string>('');
const password = ref<string>('');
const message = ref<string>('');

function handleSubmit() {
    if (!email.value.trim() || !password.value.trim()) {
        message.value = "Please fill in all fields";
    } else {
        message.value = "Login submitted successfully!";
    }
}
</script>

<template>
  <div class="login-form">
    <h2>Login Form</h2>

    <form>
      <label for="email">Email</label>
      <input
        id="email"
        type="email"
        v-model="email"
        placeholder="Enter your email"
      />

      <label for="password">Password</label>
      <input
        id="password"
        type="password"
        v-model="password"
        placeholder="Enter your password"
      />

      <button type="submit" v-on:submit.prevent="handleSubmit">Login</button>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<style scoped>
.login-form {
  max-width: 400px;
  margin: 60px auto;
  padding: 35px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

h2 {
  text-align: center;
  margin-bottom: 25px;
  color: #1f2937;
  font-size: 26px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

label {
  font-weight: 600;
  color: #374151;
  font-size: 14px;
}

input {
  padding: 12px 14px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 15px;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

input:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
}

button {
  margin-top: 15px;
  padding: 13px;
  background-color: #2563eb;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #1d4ed8;
}

button:active {
  transform: scale(0.98);
}
</style>