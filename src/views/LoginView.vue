<template>
  <div class="flex justify-center items-center h-screen bg-gray-100">
    <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
      <div class="flex items-center justify-center">
        <img
          src="@/assets/images/logo/orimoza.png"
          alt="Logo"
          class="w-10 mb-5"
        />
      </div>
      <h2 class="text-2xl font-semibold text-center text-gray-800 mb-6">
        Login
      </h2>

      <!-- Form Login -->
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label for="email" class="block text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            placeholder="Email"
          />
        </div>

        <div class="mb-6">
          <label for="password" class="block text-gray-700">Password:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            placeholder="Password"
          />
        </div>

        <a
          href="/home"
          class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 text-center inline-block"
        >
          Login
        </a>
      </form>

      <!-- Register Link -->
      <p class="mt-6 text-center text-gray-600">
        Don't have an account?
        <a href="/register" class="text-blue-500 hover:underline">Register</a>
      </p>
    </div>
  </div>
</template>

<script setup>
// Define reactive variables and methods
import { ref } from "vue";

const email = ref("");
const password = ref("");

const handleLogin = () => {
  // Simulate login logic here
  console.log("Email:", email.value);
  console.log("Password:", password.value);
  alert("Login submitted!");
};
</script>
