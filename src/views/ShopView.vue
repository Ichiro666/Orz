<template>
  <div class="px-8 py-12">
    <h2 class="text-3xl font-semibold text-center mb-8">
      Shop Women's Clothing
    </h2>

    <!-- Filter Jenis Pakaian -->
    <div class="mb-6 flex justify-center gap-4">
      <button
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        All
      </button>
      <button
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Rok
      </button>
      <button
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Celana
      </button>
      <button
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Blouse
      </button>
      <button
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Jaket
      </button>
      <button
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Tunik
      </button>
    </div>

    <!-- Products Grid -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <!-- Contoh Produk -->
      <div class="bg-white p-4 rounded-lg shadow-lg">
        <img
          src="@/assets/images/products/Rok-1.jpg"
          alt="Rok"
          class="w-full h-40 object-cover rounded-md mb-4"
        />
        <h3 class="text-lg font-semibold">Rok Cantik</h3>
        <p class="text-gray-700 mt-2">Rp150,000</p>
        <button
          class="w-full bg-green-500 text-white py-2 mt-4 rounded hover:bg-green-600 transition duration-300"
        >
          Add to Cart
        </button>
      </div>
      <!-- Ulangi komponen ini untuk setiap jenis pakaian -->
    </div>
  </div>
</template>
