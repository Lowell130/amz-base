<template>
  <div>
    <div v-if="pending">
    <div class="pt-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
  >
<div role="status" v-for="product in paginatedProducts" :key="product.id" class="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
  <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
      <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
      </svg>
  </div>
  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
  <div class="flex items-center mt-4">
     <svg class="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
      </svg>
      <div>
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
          <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      </div>
  </div>
  <span class="sr-only">Loading...</span>
</div>
    </div>

  </div>
    <div v-else class="pt-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      <div v-for="product in paginatedProducts" :key="product.id" class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div>
          <nuxt-link :to="`/products/schede-madri/${product.id}`">
            <img class="p-8 max-w-[15rem] h-[15rem] object-contain mx-auto" :src="product.image" :alt="product.title ? product.title : ''"/>
          </nuxt-link>
        </div>
        <div class="px-5 pb-5">
          <nuxt-link :to="`/products/schede-madri/${product.id}`" :title="product.title">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {{ truncateText(product.title, 30) }}
            </h5>
          </nuxt-link>
          <p>{{ product.rank }}</p>
          <div class="flex items-center mt-2.5 mb-5">
          <div class="flex items-center space-x-1 rtl:space-x-reverse">
            <svg
              class="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
              />
            </svg>
            <svg
              class="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
              />
            </svg>
            <svg
              class="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
              />
            </svg>
            <svg
              class="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
              />
            </svg>
            <svg
              class="w-4 h-4 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
              />
            </svg>
          </div>
          <span
            class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3"
            >5.0</span
          >
        </div>
        <div class="flex items-center justify-between">
          <span class="text-3xl font-bold text-gray-900 dark:text-white"
            >{{product.price}}</span
          >
          <a
          target="_blank" :href="product.AffiateLink + `nuxt-dev-21`"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >Acquista</a
          >
        </div>
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
import { useRoute, useRouter } from 'vue-router';

// definePageMeta({
//   title: 'My Page Title'
// })

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
        rank: product.SalesRank,
        AffiateLink: product.AffiateLink
      }));
    },
  }
);

const filteredProducts = computed(() => {
  if (!allProducts.value) {
    return [];
  }
  return allProducts.value.filter(product => parseFloat(product.price) > 0 && product.rank !== 0);
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


useServerSeoMeta({
  ogTitle: () => "Schede Madri per PC - Trova la Scheda Madre Perfetta",
  title: () => "Schede Madri per PC | Migliori Modelli Disponibili",
  description: () => "Esplora la nostra selezione di schede madri per PC. Trova la scheda madre ideale per il tuo sistema, con supporto per le ultime tecnologie e prestazioni affidabili.",
  ogDescription: () => "Scopri le migliori schede madri per PC disponibili sul nostro sito. Scegli tra una vasta gamma di modelli con le ultime innovazioni tecnologiche per ogni esigenza.",
  // ogImage: () => "/path/to/your/og-motherboards-image.jpg",
  // ogImageUrl: () => "/path/to/your/og-motherboards-image.jpg",
  twitterCard: () => "summary_large_image",
  twitterTitle: () => "Schede Madri per PC | Migliori Modelli Disponibili",
  twitterDescription: () => "Trova la scheda madre perfetta per il tuo PC. Esplora la nostra vasta gamma di schede madri con supporto per le ultime tecnologie e prestazioni eccellenti.",
  // twitterImage: () => "/path/to/your/twitter-motherboards-image.jpg"
});


</script>
