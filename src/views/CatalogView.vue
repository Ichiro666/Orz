<template>
  <div class="px-8 py-12">
    <h2 class="text-3xl font-semibold text-center mb-8">
      Shop Women's Clothing
    </h2>

    <!-- Filter Jenis Pakaian -->
    <div class="mb-6 flex justify-center gap-4">
      <button
        @click="filterCategory('All')"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        All
      </button>
      <button
        @click="filterCategory('Rok')"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Rok
      </button>
      <button
        @click="filterCategory('Celana')"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Celana
      </button>
      <button
        @click="filterCategory('Blouse')"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Blouse
      </button>
      <button
        @click="filterCategory('Jaket')"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Jaket
      </button>
      <button
        @click="filterCategory('Tunik')"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Tunik
      </button>
    </div>

    <!-- Products Grid -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
      >
        <img
          :src="product.image"
          :alt="product.name"
          class="w-full h-64 object-cover rounded-md mb-4"
        />
        <h3 class="text-lg font-semibold">{{ product.name }}</h3>
        <p class="text-gray-700 mt-2">{{ product.price }}</p>
        <button
          class="w-full bg-green-500 text-white py-2 mt-4 rounded hover:bg-green-600 transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  setup() {
    const products = ref([
      {
        id: 1,
        name: "Orimoza Rok Jeans Skirt Theana",
        category: "Rok",
        price: "Rp150,000",
        image: "@/assets/images/products/Rok-1.jpg",
      },
      {
        id: 1,
        name: "Orimoza Rok Span Knit Hornet Wanita Renna",
        category: "Rok",
        price: "Rp150,000",
        image: "@/assets/images/products/Rok-2.jpg",
      },
      {
        id: 1,
        name: "Orimoza Skirt Rainbow Rok Korean Knit Hornet Kaniak",
        category: "Rok",
        price: "Rp150,000",
        image: "@/assets/images/products/Rok-3.jpg",
      },
      {
        id: 1,
        name: "Rok Cantik",
        category: "Rok",
        price: "Rp150,000",
        image: "@/assets/images/products/Rok-1.jpg",
      },
      {
        id: 1,
        name: "Rok Cantik",
        category: "Rok",
        price: "Rp150,000",
        image: "@/assets/images/products/Rok-1.jpg",
      },
      {
        id: 1,
        name: "Rok Cantik",
        category: "Rok",
        price: "Rp150,000",
        image: "@/assets/images/products/Rok-1.jpg",
      },
      {
        id: 1,
        name: "Rok Cantik",
        category: "Rok",
        price: "Rp150,000",
        image: "@/assets/images/products/Rok-1.jpg",
      },
      {
        id: 1,
        name: "Rok Cantik",
        category: "Rok",
        price: "Rp150,000",
        image: "@/assets/images/products/Rok-1.jpg",
      },
      {
        id: 2,
        name: "Celana Trendy",
        category: "Celana",
        price: "Rp200,000",
        image: "@/assets/images/products/Rok-1.jpg",
      },
      {
        id: 2,
        name: "Celana Trendy",
        category: "Celana",
        price: "Rp200,000",
        image: "@/assets/images/products/Rok-1.jpg",
      },
      {
        id: 2,
        name: "Celana Trendy",
        category: "Celana",
        price: "Rp200,000",
        image: "@/assets/images/products/Rok-1.jpg",
      },
      {
        id: 2,
        name: "Celana Trendy",
        category: "Celana",
        price: "Rp200,000",
        image: "@/assets/images/products/Rok-1.jpg",
      },
      {
        id: 2,
        name: "Celana Trendy",
        category: "Celana",
        price: "Rp200,000",
        image: "@/assets/images/products/Rok-1.jpg",
      },
      {
        id: 2,
        name: "Celana Trendy",
        category: "Celana",
        price: "Rp200,000",
        image: "@/assets/images/products/Rok-1.jpg",
      },
      {
        id: 2,
        name: "Celana Trendy",
        category: "Celana",
        price: "Rp200,000",
        image: "@/assets/images/products/Rok-1.jpg",
      },
      {
        id: 2,
        name: "Celana Trendy",
        category: "Celana",
        price: "Rp200,000",
        image: "@/assets/images/products/Rok-1.jpg",
      },
      {
        id: 3,
        name: "Blouse Modern",
        category: "Blouse",
        price: "Rp180,000",
        image: "@/assets/images/products/Rok-1.jpg",
      },
      {
        id: 3,
        name: "Blouse Modern",
        category: "Blouse",
        price: "Rp180,000",
        image: "@/assets/images/products/Rok-1.jpg",
      },
      {
        id: 3,
        name: "Blouse Modern",
        category: "Blouse",
        price: "Rp180,000",
        image: "@/assets/images/products/Rok-1.jpg",
      },
      {
        id: 3,
        name: "Blouse Modern",
        category: "Blouse",
        price: "Rp180,000",
        image: "@/assets/images/products/Rok-1.jpg",
      },
      {
        id: 3,
        name: "Blouse Modern",
        category: "Blouse",
        price: "Rp180,000",
        image: "@/assets/images/products/Rok-1.jpg",
      },
      {
        id: 3,
        name: "Blouse Modern",
        category: "Blouse",
        price: "Rp180,000",
        image: "@/assets/images/products/Rok-1.jpg",
      },
      {
        id: 3,
        name: "Blouse Modern",
        category: "Blouse",
        price: "Rp180,000",
        image: "@/assets/images/products/Rok-1.jpg",
      },
      {
        id: 3,
        name: "Blouse Modern",
        category: "Blouse",
        price: "Rp180,000",
        image: "@/assets/images/products/Rok-1.jpg",
      },
      {
        id: 4,
        name: "Jaket Stylish",
        category: "Jaket",
        price: "Rp250,000",
        image: "@/assets/images/products/Rok-1.jpg",
      },
      {
        id: 4,
        name: "Jaket Stylish",
        category: "Jaket",
        price: "Rp250,000",
        image: "@/assets/images/products/Rok-1.jpg",
      },
      {
        id: 4,
        name: "Jaket Stylish",
        category: "Jaket",
        price: "Rp250,000",
        image: "@/assets/images/products/Rok-1.jpg",
      },
      {
        id: 4,
        name: "Jaket Stylish",
        category: "Jaket",
        price: "Rp250,000",
        image: "@/assets/images/products/Rok-1.jpg",
      },
      {
        id: 4,
        name: "Jaket Stylish",
        category: "Jaket",
        price: "Rp250,000",
        image: "@/assets/images/products/Rok-1.jpg",
      },
      {
        id: 4,
        name: "Jaket Stylish",
        category: "Jaket",
        price: "Rp250,000",
        image: "@/assets/images/products/Rok-1.jpg",
      },
      {
        id: 4,
        name: "Jaket Stylish",
        category: "Jaket",
        price: "Rp250,000",
        image: "@/assets/images/products/Rok-1.jpg",
      },
      {
        id: 4,
        name: "Jaket Stylish",
        category: "Jaket",
        price: "Rp250,000",
        image: "@/assets/images/products/Rok-1.jpg",
      },
      {
        id: 5,
        name: "Tunik Elegan",
        category: "Tunik",
        price: "Rp230,000",
        image: "@/assets/images/products/Rok-1.jpg",
      },
      {
        id: 5,
        name: "Tunik Elegan",
        category: "Tunik",
        price: "Rp230,000",
        image: "@/assets/images/products/Rok-1.jpg",
      },
      {
        id: 5,
        name: "Tunik Elegan",
        category: "Tunik",
        price: "Rp230,000",
        image: "@/assets/images/products/Rok-1.jpg",
      },
      {
        id: 5,
        name: "Tunik Elegan",
        category: "Tunik",
        price: "Rp230,000",
        image: "@/assets/images/products/Rok-1.jpg",
      },
      {
        id: 5,
        name: "Tunik Elegan",
        category: "Tunik",
        price: "Rp230,000",
        image: "@/assets/images/products/Rok-1.jpg",
      },
      {
        id: 5,
        name: "Tunik Elegan",
        category: "Tunik",
        price: "Rp230,000",
        image: "@/assets/images/products/Rok-1.jpg",
      },
      {
        id: 5,
        name: "Tunik Elegan",
        category: "Tunik",
        price: "Rp230,000",
        image: "@/assets/images/products/Rok-1.jpg",
      },
      {
        id: 5,
        name: "Tunik Elegan",
        category: "Tunik",
        price: "Rp230,000",
        image: "@/assets/images/products/Rok-1.jpg",
      },
      // Tambahkan produk lainnya sesuai kebutuhan
    ]);

    const selectedCategory = ref("All");

    const filterCategory = (category) => {
      selectedCategory.value = category;
    };

    const filteredProducts = computed(() => {
      if (selectedCategory.value === "All") {
        return products.value;
      }
      return products.value.filter(
        (product) => product.category === selectedCategory.value
      );
    });

    return {
      products,
      selectedCategory,
      filterCategory,
      filteredProducts,
    };
  },
};
</script>

<style scoped>
/* Tambahkan styling sesuai kebutuhan */
</style>
