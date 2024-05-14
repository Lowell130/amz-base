<template>
  <div>
    <div v-if="pending">
      <p>Loading ...</p>
    </div>


    <div v-else class="flex flex-wrap justify-center mt-10">
      <div class="p-4 max-w-sm" v-for="product in paginatedProducts" :key="product.id">
        <div class="flex rounded-lg h-full p-8 flex-col">
            <div class="flex items-center mb-3">
                <div
                    class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                </div>
                <h2 class="text-dark dark:text-white text-lg font-medium">{{product.brand}}</h2>
            </div>
            <div class="flex flex-col justify-between flex-grow">
              <img :src="product.image">
                <p class="leading-relaxed text-base text-dark dark:text-gray-300">
                  {{ product.title }}
                </p>
                <a href="#" class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">{{product.price}}
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
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
        price: product.Price,
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
