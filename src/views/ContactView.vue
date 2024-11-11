<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");

const submitForm = () => {
  alert("Pesan berhasil dikirim!");
};
</script>

<template>
  <div
    class="contact-page p-8 bg-gradient-to-r from-green-200 to-green-500 min-h-screen"
  >
    <h1 class="text-4xl font-extrabold text-center mb-8 text-green-900">
      Hubungi Kami
    </h1>

    <!-- Informasi Kontak -->
    <div
      class="contact-info bg-white p-8 rounded-lg shadow-xl mb-12 text-gray-800 space-y-6"
    >
      <p class="flex items-center text-brown-600">
        <i class="fas fa-map-marker-alt text-green-700 mr-3 text-lg"></i>
        <strong>Alamat:</strong> Jl. Mawar No. 10, Jakarta
      </p>
      <p class="flex items-center text-brown-600">
        <i class="fas fa-phone-alt text-green-700 mr-3 text-lg"></i>
        <strong>Telepon:</strong> (021) 1234-5678
      </p>
      <p class="flex items-center text-brown-600">
        <i class="fas fa-envelope text-green-700 mr-3 text-lg"></i>
        <strong>Email:</strong> info@orimoza.com
      </p>
      <p class="flex items-center text-brown-600">
        <i class="fas fa-clock text-green-700 mr-3 text-lg"></i>
        <strong>Jam Operasional:</strong> Senin - Jumat, 09:00 - 17:00
      </p>
    </div>

    <!-- Formulir Kontak -->
    <form
      class="contact-form bg-white p-8 rounded-lg shadow-xl space-y-6"
      @submit.prevent="submitForm"
    >
      <div>
        <label class="block text-brown-600 font-semibold mb-2">Nama</label>
        <input
          type="text"
          v-model="name"
          class="w-full p-4 border border-brown-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          placeholder="Nama Anda"
        />
      </div>
      <div>
        <label class="block text-brown-600 font-semibold mb-2">Email</label>
        <input
          type="email"
          v-model="email"
          class="w-full p-4 border border-brown-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          placeholder="Email Anda"
        />
      </div>
      <div>
        <label class="block text-brown-600 font-semibold mb-2">Subjek</label>
        <input
          type="text"
          v-model="subject"
          class="w-full p-4 border border-brown-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          placeholder="Subjek Pesan"
        />
      </div>
      <div>
        <label class="block text-brown-600 font-semibold mb-2">Pesan</label>
        <textarea
          v-model="message"
          class="w-full p-4 border border-brown-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          rows="5"
          placeholder="Tulis pesan Anda di sini"
        ></textarea>
      </div>
      <button
        type="submit"
        class="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Kirim Pesan
      </button>
    </form>
  </div>
</template>

<style scoped>
.text-brown-600 {
  color: #6b4f2b; /* Warna coklat */
}
.border-brown-500 {
  border-color: #6b4f2b; /* Warna coklat */
}
</style>
