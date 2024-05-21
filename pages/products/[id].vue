<template>
  <div class="px-6 py-10">
    <!-- <p>id product: {{ id }}</p> -->
    <!-- <button @click="router.go(-1)" class="cpx-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
      <p>Back</p>
    </button> -->

    <button @click="router.go(-1)" class="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <svg class="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
          </svg>
          Back
        </button>



    <div v-if="pending">
    <p>loading...</p>
    </div>

    <div v-else class=" px-6 py-10">
      <div v-for="product in products" :key="product.id">
        <div
          v-if="product._id == id"
          class="flex flex-col md:flex-row p-6 rounded-md gap-20 max-w-7xl mx-auto"
        >
          <img :src="product.Thumbnail" alt="" />
          <div class="">
            <h2 class="text-black text-4xl mb-4">{{ product.Title }}</h2>

            <h3 class="text-black text-3xl mb-4">Price: {{ product.Price }}</h3>
            <p class="text-black text-xl mb-4">Brand: {{ product.Brand }}</p>

            <p class="text-black/50 text-sm">{{ product.Description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const { id } = useRoute().params;
const router = useRouter();

const { pending, data: products } = await useFetch(
  "https://eu-central-1.aws.data.mongodb-api.com/app/data-xdnek/endpoint/schedemadri",
  {
    lazy: false,
    transform: (products) => {
      return products;
    },
  }
);

// Se products è un oggetto, estrai il valore dell'array _rawValue
const productList = products._rawValue || [];

// Trova il prodotto corrispondente all'id specificato nella route
const selectedProduct = productList.find((product) => product._id === id);

// Se il prodotto è stato trovato, stampa il Title nella console
if (selectedProduct) {
  // console.log("Title:", selectedProduct.Title);
  // console.log("Brand:", selectedProduct.Brand); // Log del Brand
} else {
  // console.log("Prodotto non trovato");
}
useServerSeoMeta({
  // ogTitle: () => title,
  title: () => selectedProduct.Title,
  // description: () => productDetails.description,
  // ogDescription: () => productDetails.description,
  // ogImage: () => productDetails.thumbnail,
  // ogImageUrl: () => productDetails.thumbnail,
  // twitterCard: () => 'summary_large_image',
  // twitterTitle: () => title,
  // twitterDescription: () => productDetails.description,
  // twitterImage: () => productDetails.thumbnail
});
</script>

