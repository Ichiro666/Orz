<script setup>
// Placeholder untuk script jika dibutuhkan
</script>

<template>
  <div
    class="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-10"
  >
    <!-- Container Login -->
    <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-lg mt-16 mb-16">
      <div class="flex items-center justify-center">
        <img
          src="@/assets/images/logo/orimoza.png"
          alt="Logo"
          class="w-10 mb-5"
        />
      </div>
      <h2 class="text-2xl font-semibold text-center text-gray-800 mb-6">
        Register
      </h2>

      <!-- Form Login -->
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label for="username" class="block text-gray-700">Username:</label>
          <input
            type="text"
            id="username"
            v-model="username"
            class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            placeholder="Username"
          />
        </div>

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

        <div class="mb-4">
          <label for="phone" class="block text-gray-700">Nomor HP:</label>
          <input
            type="tel"
            id="phone"
            v-model="phone"
            class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            placeholder="Nomor"
          />
        </div>

        <div class="mb-4">
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

        <div class="mb-6">
          <label for="confirm-password" class="block text-gray-700"
            >Confirm Password:</label
          >
          <input
            type="password"
            id="confirm-password"
            v-model="confirmPassword"
            class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            placeholder="Password"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Register
        </button>
      </form>

      <!-- Register Link -->
      <p class="mt-6 text-center text-gray-600">
        Do you have account?
        <a href="/login" class="text-blue-500 hover:underline">Login</a>
      </p>
    </div>
  </div>
</template>
