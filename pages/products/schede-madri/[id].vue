<template>
  <div class="md:px-6 pt-28">
    <!-- <p>id product: {{ id }}</p> -->
    <!-- <button @click="router.go(-1)" class="cpx-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
      <p>Back</p>
    </button> -->

    <button
      @click="router.go(-1)"
      class="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      <svg
        class="w-3.5 h-3.5 me-2 rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 5H1m0 0 4 4M1 5l4-4"
        />
      </svg>
      Back
    </button>

    <div v-if="pending">
      <p>loading...</p>
    </div>

    <!-- <div v-else class=" px-6 py-10">
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
    </div> -->

    <div
      v-for="product in products"
      :key="product.id"
      class="font-sans bg-white"
    >
      <div v-if="product._id == id" class="p-6 lg:max-w-7xl max-w-4xl mx-auto">
        <div
          class="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-6"
        >
          <!-- <div class="lg:col-span-3 w-full lg:sticky top-0 text-center"> -->
          <div class="lg:col-span-3 w-full top-0 text-center">

            <div class="flex items-center justify-center px-4 py-10 relative">
              <div
                class="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
              >
                <img
                  :src="product.Thumbnail"
                  :alt="product.Title"
                  class="w-full max-h-96 object-contain"
                />
              </div>
            </div>

            <!-- <div class="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
              <div class="rounded-xl p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                <img src="https://readymadeui.com/images/laptop2.webp" alt="Product2" class="w-24 cursor-pointer" />
              </div>
              <div class="rounded-xl p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                <img src="https://readymadeui.com/images/laptop3.webp" alt="Product2" class="w-24 cursor-pointer" />
              </div>
              <div class="rounded-xl p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                <img src="https://readymadeui.com/images/laptop4.webp" alt="Product2" class="w-24 cursor-pointer" />
              </div>
              <div class="rounded-xl p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                <img src="https://readymadeui.com/images/laptop5.webp" alt="Product2" class="w-24 cursor-pointer" />
              </div>
            </div> -->
          </div>

          <div class="lg:col-span-2">
            <small>{{ product.Marca }}</small>
            <h2 class="text-2xl font-normal text-[#333]">
              {{ product.Title }}
            </h2>
            <div class="flex flex-wrap gap-4 mt-4">
              <p class="text-[#333] text-3xl font-bold">{{ product.Price }}</p>
            </div>

            <div class="flex space-x-2 mt-4">
              <svg
                class="w-5 fill-[#333]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                />
              </svg>
              <svg
                class="w-5 fill-[#333]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                />
              </svg>
              <svg
                class="w-5 fill-[#333]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                />
              </svg>
              <svg
                class="w-5 fill-[#333]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                />
              </svg>
              <svg
                class="w-5 fill-[#CED5D8]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                />
              </svg>
              <h4 class="text-[#333] text-base">{{ product.ReviewCount }}</h4>
            </div>

            <!-- <div class="mt-10">
              <h3 class="text-lg font-bold text-gray-800">Choose a Color</h3>
              <div class="flex flex-wrap gap-3 mt-4">
                <button
                  type="button"
                  class="w-10 h-10 bg-black border-2 border-white hover:border-gray-800 rounded-full shrink-0"
                ></button>
                <button
                  type="button"
                  class="w-10 h-10 bg-gray-300 border-2 border-white hover:border-gray-800 rounded-full shrink-0"
                ></button>
                <button
                  type="button"
                  class="w-10 h-10 bg-gray-100 border-2 border-white hover:border-gray-800 rounded-full shrink-0"
                ></button>
                <button
                  type="button"
                  class="w-10 h-10 bg-blue-400 border-2 border-white hover:border-gray-800 rounded-full shrink-0"
                ></button>
              </div>
            </div> -->

            <div class="flex flex-wrap gap-4 mt-10">
              <button
                type="button"
                class="min-w-[200px] px-4 py-3 bg-[#333] hover:bg-[#111] text-white text-sm font-semibold rounded"
              >
                Acquista
              </button>
            </div>
          </div>
        </div>

        <div
          class="mt-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-6"
        >
          <h3 class="text-lg font-bold text-[#333]">Product information</h3>
          <ul class="mt-6 space-y-6 text-[#333]">
            <li v-if="product.Marca">
              <span class="text-sm font-bold">Marca</span
              ><span style="display: block">{{ product.Marca }}</span>
            </li>
            <li v-if="product.Produttore">
              <span class="text-sm font-bold">Produttore</span
              ><span style="display: block">{{ product.Produttore }}</span>
            </li>
            <li v-if="product.serie">
              <span class="text-sm font-bold">Serie</span
              ><span style="display: block">{{ product.serie }}</span>
            </li>
            <li v-if="product.colore">
              <span class="text-sm font-bold">Colore</span
              ><span style="display: block">{{ product.colore }}</span>
            </li>
            <li v-if="product['Dimensioni prodotto']">
              <span class="text-sm font-bold">Dimensioni prodotto</span
              ><span style="display: block">{{
                product["Dimensioni prodotto"]
              }}</span>
            </li>
            <li v-if="product['Numero modello articolo']">
              <span class="text-sm font-bold">Numero modello articolo</span
              ><span style="display: block">{{
                product["Numero modello articolo"]
              }}</span>
            </li>
            <li v-if="product.Risoluzione">
              <span class="text-sm font-bold">Risoluzione</span
              ><span style="display: block">{{ product.Risoluzione }}</span>
            </li>
            <li v-if="product['Clock di Memoria']">
              <span class="text-sm font-bold">Clock di Memoria</span
              ><span style="display: block">{{
                product["Clock di Memoria"]
              }}</span>
            </li>
            <li v-if="product['Coprocessore grafico']">
              <span class="text-sm font-bold">Coprocessore grafico</span
              ><span style="display: block">{{
                product["Coprocessore grafico"]
              }}</span>
            </li>
            <li v-if="product['Grafica Chipset Brand']">
              <span class="text-sm font-bold">Grafica Chipset Brand</span
              ><span style="display: block">{{
                product["Grafica Chipset Brand"]
              }}</span>
            </li>
            <li v-if="product['Descrizione scheda grafica']">
              <span class="text-sm font-bold">Descrizione scheda grafica</span
              ><span style="display: block">{{
                product["Descrizione scheda grafica"]
              }}</span>
            </li>
            <li v-if="product['Tipo memoria scheda grafica']">
              <span class="text-sm font-bold">Tipo memoria scheda grafica</span
              ><span style="display: block">{{
                product["Tipo memoria scheda grafica"]
              }}</span>
            </li>
            <li v-if="product['Dimensioni memoria scheda grafica']">
              <span class="text-sm font-bold"
                >Dimensioni memoria scheda grafica</span
              ><span style="display: block">{{
                product["Dimensioni memoria scheda grafica"]
              }}</span>
            </li>
            <li v-if="product['Interfaccia scheda grafica']">
              <span class="text-sm font-bold">Interfaccia scheda grafica</span
              ><span style="display: block">{{
                product["Interfaccia scheda grafica"]
              }}</span>
            </li>
            <li v-if="product.Wattaggio">
              <span class="text-sm font-bold">Wattaggio</span
              ><span style="display: block">{{ product.Wattaggio }}</span>
            </li>
            <li v-if="product['Piattaforma Hardware']">
              <span class="text-sm font-bold">Piattaforma Hardware</span
              ><span style="display: block">{{
                product["Piattaforma Hardware"]
              }}</span>
            </li>
            <li v-if="product['Le batterie sono incluse']">
              <span class="text-sm font-bold">Le batterie sono incluse</span
              ><span style="display: block">{{
                product["Le batterie sono incluse"]
              }}</span>
            </li>
            <li v-if="product['Peso articolo']">
              <span class="text-sm font-bold">Peso articolo</span
              ><span style="display: block">{{
                product["Peso articolo"]
              }}</span>
            </li>
            <li v-if="product['Aggiornamenti software garantiti fino a']">
              <span class="text-sm font-bold"
                >Aggiornamenti software garantiti fino a</span
              ><span style="display: block">{{
                product["Aggiornamenti software garantiti fino a"]
              }}</span>
            </li>
            <li v-if="product.Features1">
              <span class="text-sm font-bold">Features1</span
              ><span style="display: block">{{ product.Features1 }}</span>
            </li>
            <li v-if="product.Features2">
              <span class="text-sm font-bold">Features2</span
              ><span style="display: block">{{ product.Features2 }}</span>
            </li>
            <li v-if="product.Features3">
              <span class="text-sm font-bold">Features3</span
              ><span style="display: block">{{ product.Features3 }}</span>
            </li>
            <li v-if="product.Features4">
              <span class="text-sm font-bold">Features4</span
              ><span style="display: block">{{ product.Features4 }}</span>
            </li>
            <li v-if="product.Features5">
              <span class="text-sm font-bold">Features5</span
              ><span style="display: block">{{ product.Features5 }}</span>
            </li>
          </ul>
        </div>

        <div
          class="mt-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-6"
        >
          <h3 class="text-lg font-bold text-[#333]">Reviews(10)</h3>
          <div class="grid md:grid-cols-2 gap-12 mt-6">
            <div>
              <div class="space-y-3">
                <div class="flex items-center">
                  <p class="text-sm text-[#333] font-bold">5.0</p>
                  <svg
                    class="w-5 fill-[#333] ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                    />
                  </svg>
                  <div class="bg-gray-400 rounded w-full h-2 ml-3">
                    <div class="w-2/3 h-full rounded bg-[#333]"></div>
                  </div>
                  <p class="text-sm text-[#333] font-bold ml-3">66%</p>
                </div>

                <div class="flex items-center">
                  <p class="text-sm text-[#333] font-bold">4.0</p>
                  <svg
                    class="w-5 fill-[#333] ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                    />
                  </svg>
                  <div class="bg-gray-400 rounded w-full h-2 ml-3">
                    <div class="w-1/3 h-full rounded bg-[#333]"></div>
                  </div>
                  <p class="text-sm text-[#333] font-bold ml-3">33%</p>
                </div>

                <div class="flex items-center">
                  <p class="text-sm text-[#333] font-bold">3.0</p>
                  <svg
                    class="w-5 fill-[#333] ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                    />
                  </svg>
                  <div class="bg-gray-400 rounded w-full h-2 ml-3">
                    <div class="w-1/6 h-full rounded bg-[#333]"></div>
                  </div>
                  <p class="text-sm text-[#333] font-bold ml-3">16%</p>
                </div>

                <div class="flex items-center">
                  <p class="text-sm text-[#333] font-bold">2.0</p>
                  <svg
                    class="w-5 fill-[#333] ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                    />
                  </svg>
                  <div class="bg-gray-400 rounded w-full h-2 ml-3">
                    <div class="w-1/12 h-full rounded bg-[#333]"></div>
                  </div>
                  <p class="text-sm text-[#333] font-bold ml-3">8%</p>
                </div>

                <div class="flex items-center">
                  <p class="text-sm text-[#333] font-bold">1.0</p>
                  <svg
                    class="w-5 fill-[#333] ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                    />
                  </svg>
                  <div class="bg-gray-400 rounded w-full h-2 ml-3">
                    <div class="w-[6%] h-full rounded bg-[#333]"></div>
                  </div>
                  <p class="text-sm text-[#333] font-bold ml-3">6%</p>
                </div>
              </div>
            </div>

            <div>
              <div class="flex items-start">
                <img
                  src="https://readymadeui.com/team-2.webp"
                  class="w-12 h-12 rounded-full border-2 border-white"
                />
                <div class="ml-3">
                  <h4 class="text-sm font-bold text-[#333]">John Doe</h4>
                  <div class="flex space-x-1 mt-1">
                    <svg
                      class="w-4 fill-[#333]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                      />
                    </svg>
                    <svg
                      class="w-4 fill-[#333]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                      />
                    </svg>
                    <svg
                      class="w-4 fill-[#333]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                      />
                    </svg>
                    <svg
                      class="w-4 fill-[#CED5D8]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                      />
                    </svg>
                    <svg
                      class="w-4 fill-[#CED5D8]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                      />
                    </svg>
                    <p class="text-xs !ml-2 font-semibold text-[#333]">
                      2 mins ago
                    </p>
                  </div>
                  <p class="text-sm mt-4 text-[#333]">
                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                    eiusmod tempor incidunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>

              <button
                type="button"
                class="w-full mt-10 px-4 py-2.5 bg-transparent hover:bg-gray-50 border border-[#333] text-[#333] font-bold rounded"
              >
                Read all reviews
              </button>
            </div>
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

