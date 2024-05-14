<template>
  <div>
    <div v-if="pending">
      <p>Loading ...</p>
    </div>
    <div v-else class="grid grid-cols-5 gap-4 px-6">
      <div v-for="product in paginatedProducts" :key="product.id">
        <div class="flex flex-col shadow-md bg-white p-6 rounded-md">
          <img :src="product.image">
          <nuxt-link :to="`/products/${product.id}`">
            <h2 class="text-black mt-auto text-sm">{{ product.title }}</h2>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="mt-4 flex justify-center">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        :disabled="currentPage === 1"
        @click="prevPage"
      >
        Previous
      </button>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
        :disabled="currentPage === totalPages"
        @click="nextPage"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const pageSize = 20;
const currentPage = ref(1);

const { pending, data: allProducts } = useFetch(
  "https://eu-central-1.aws.data.mongodb-api.com/app/data-xdnek/endpoint/schedemadri",
  {
    lazy: false,
    transform: (products) => {
      return products.map((product) => ({
        id: product._id,
        title: product.Title,
        image: product.Thumbnail,
        brand: product.Brand,
        asin: product.ASIN,
      }));
    },
  }
);

const totalPages = computed(() => Math.ceil(allProducts.value.length / pageSize));

const paginatedProducts = computed(() => {
  const startIndex = (currentPage.value - 1) * pageSize;
  return allProducts.value.slice(startIndex, startIndex + pageSize);
});

function nextPage() {
  currentPage.value++;
}

function prevPage() {
  currentPage.value--;
}
</script>
