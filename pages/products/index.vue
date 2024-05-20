<template>
    <div>
      <div class="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        <div v-for="product in paginatedProducts" :key="product.id" class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div>
            <nuxt-link :to="`/products/${product.id}`">
              <img class="p-8 max-w-[15rem] h-[15rem] object-contain mx-auto" :src="product.image" :alt="product.title ? product.title : ''"/>
            </nuxt-link>
          </div>
          <div class="px-5 pb-5">
            <nuxt-link :to="`/products/${product.id}`" :title="product.title">
              <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {{ truncateText(product.title, 30) }}
              </h5>
            </nuxt-link>
          </div>
        </div>
      </div>
  
      <div class="mt-4 flex justify-center">
        <button 
          :class="{ 'opacity-50 cursor-not-allowed': currentPage === 1 }"
          :disabled="currentPage === 1"
          @click="prevPage"  
          class="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <svg class="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
          </svg>
          Previous
        </button>
        <button 
          :class="{ 'opacity-50 cursor-not-allowed': currentPage === totalPages }"
          :disabled="currentPage === totalPages"
          @click="nextPage" 
          class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
          <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </button>      
      </div>
    </div>
  </template>
  
  <script setup>

  import { ref, computed, watchEffect } from "vue";
  import { useRoute, useRouter } from 'vue-router';

  definePageMeta({
  title: 'My Page Title'
})

  // Aggiungi il filtro per limitare il numero di caratteri nel titolo
const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  } else {
    return text;
  }
};

  
  const route = useRoute();
  const router = useRouter();
  
  const pageSize = 20;
  const currentPage = ref(parseInt(route.query.page) || 1);
  
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
  
  const filteredProducts = computed(() => {
    return allProducts.value.filter(product => parseFloat(product.price) > 0);
  });
  
  const totalPages = computed(() => 
    Math.ceil(filteredProducts.value.length / pageSize)
  );
  
  const paginatedProducts = computed(() => {
    const startIndex = (currentPage.value - 1) * pageSize;
    return filteredProducts.value.slice(startIndex, startIndex + pageSize);
  });
  
  function nextPage() {
    if (currentPage.value < totalPages.value) {
      currentPage.value++;
      updateURL();
      scrollToTop();
    }
  }
  
  function prevPage() {
    if (currentPage.value > 1) {
      currentPage.value--;
      updateURL();
      scrollToTop();
    }
  }
  
  function updateURL() {
    router.push({ query: { page: currentPage.value } });
  }
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  
  // Watch for changes in the route query and update currentPage
  watchEffect(() => {
    const page = parseInt(route.query.page);
    if (page) {
      currentPage.value = page;
    }
  });
  </script>
  