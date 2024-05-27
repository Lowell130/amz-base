<template>
   <div class="md:px-6 pt-28">
    <!-- <p>id product: {{ id }}</p> -->
    <!-- <button @click="router.go(-1)" class="cpx-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
      <p>Back</p>
    </button> -->

 

    <div v-if="pending">
      <p>loading...</p>
    </div>

 
    <div class="p-6 lg:max-w-7xl max-w-4xl mx-auto">


<!-- Breadcrumb -->
<nav class="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
    <li class="inline-flex items-center">
      <a href="/" class="inline-flex items-center text-xs uppercase text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </svg>
        <!-- Home -->
      </a>
    </li>
    <li>
      <div class="flex items-center">
        <svg class="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <a href="#" @click="router.go(-1)" class="ms-1 text-xs uppercase text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">tutti i portatili</a>
      </div>
    </li>
  
  </ol>
</nav>

  



  </div>
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
              <a target="_blank" :href="product.AffiateLink + `nuxt-dev-21`">    <img
                  :src="product.Thumbnail"
                  :alt="product.Title"
                  class="w-full max-h-96 object-contain"
                /></a> 
              </div>
            </div>


          
          </div>

          <div class="lg:col-span-2">
            <small>{{ product.Marca }}</small>
            <h2 class="text-2xl font-normal text-[#333]">
             <a target="_blank" :href="product.AffiateLink + `nuxt-dev-21`">{{ product.Title }}</a> 
            </h2>
            <div class="flex flex-wrap gap-4 mt-4">
              <p class="text-[#333] text-3xl font-bold">{{ product.Price }}</p>
            </div>

              

            <div class="flex flex-wrap gap-4 mt-10">
              <button
                type="button"
                class="min-w-[200px] px-4 py-3 bg-[#333] hover:bg-[#111] text-white text-sm font-semibold rounded"
              >
              <a target="_blank" :href="product.AffiateLink + `nuxt-dev-21`">Acquista</a> 
              </button>
            
            </div>
          </div>
        </div>

        <div class="mt-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-6">
          <!-- <h3 class="text-lg font-bold text-[#333]">Recensioni ({{product.ReviewCount}})</h3> -->
          <h3 class="text-lg font-bold text-[#333]">Recensioni</h3>
          <div class="mt-6">
            <div v-if="productReviews(product).length > 0">
      <div v-for="review in productReviews(product)" :key="review.id">
              <div class="flex items-start mb-10">
                <img src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg" class="w-12 h-12 rounded-full border-2 border-white" />
                <div class="ml-3">
                  <!-- <h4 class="text-sm font-bold text-[#333] my-5">{{ review.author }}</h4> -->
                  <p class="text-sm text-[#333]">{{ review.text }}</p>
                </div>
              
              
              
              </div>

           

           
            </div>

     

          </div>
          <div v-else>
      <p class="text-[#333]">Non sono disponibili recensioni.</p>
    </div>

          <button
                type="button"
                class="w-full mt-10 px-4 py-2.5 bg-transparent hover:bg-gray-50 border border-[#333] text-[#333] font-bold rounded"
              >
              <a target="_blank" :href="product.AffiateLink + `nuxt-dev-21`">Altre recensioni...</a>
              </button>

        </div>
        
      </div>

<div class="mt-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-6">
  <h3 class="text-lg font-bold text-[#333]">Informazioni prodotto</h3>

  <ul class="mt-6 space-y-6 text-[#333]">
    <li class="text-sm" v-if="product.Features1">
    <span class="font-bold">Caratteristica 1</span>
    <span style="display: block;">{{ product.Features1 }}</span>
  </li>
  <li class="text-sm" v-if="product.Features2">
    <span class="font-bold">Caratteristica 2</span>
    <span style="display: block;">{{ product.Features2 }}</span>
  </li>
  <li class="text-sm" v-if="product.Features3">
    <span class="font-bold">Caratteristica 3</span>
    <span style="display: block;">{{ product.Features3 }}</span>
  </li>
  <li class="text-sm" v-if="product.Features4">
    <span class="font-bold">Caratteristica 4</span>
    <span style="display: block;">{{ product.Features4 }}</span>
  </li>
  <li class="text-sm" v-if="product.Features5">
    <span class="font-bold">Caratteristica 5</span>
    <span style="display: block;">{{ product.Features5 }}</span>
  </li>
  <li class="text-sm" v-if="product.Marca">
    <span class="font-bold">Marca</span>
    <span style="display: block;">{{ product.Marca }}</span>
  </li>
  <li class="text-sm" v-if="product.Produttore">
    <span class="font-bold">Produttore</span>
    <span style="display: block;">{{ product.Produttore }}</span>
  </li>
  <li class="text-sm" v-if="product.serie">
    <span class="font-bold">Serie</span>
    <span style="display: block;">{{ product.serie }}</span>
  </li>
  <li class="text-sm" v-if="product.colore">
    <span class="font-bold">Colore</span>
    <span style="display: block;">{{ product.colore }}</span>
  </li>
  <li class="text-sm" v-if="product['Dimensioni del collo']">
    <span class="font-bold">Dimensioni del collo</span>
    <span style="display: block;">{{ product['Dimensioni del collo'] }}</span>
  </li>
  <li class="text-sm" v-if="product['Numero modello articolo']">
    <span class="font-bold">Numero modello articolo</span>
    <span style="display: block;">{{ product['Numero modello articolo'] }}</span>
  </li>
  <li class="text-sm" v-if="product['Marchio processore']">
    <span class="font-bold">Marchio processore</span>
    <span style="display: block;">{{ product['Marchio processore'] }}</span>
  </li>
  <li class="text-sm" v-if="product['Tipo processore']">
    <span class="font-bold">Tipo processore</span>
    <span style="display: block;">{{ product['Tipo processore'] }}</span>
  </li>
  <li class="text-sm" v-if="product['Velocità processore']">
    <span class="font-bold">Velocità processore</span>
    <span style="display: block;">{{ product['Velocità processore'] }}</span>
  </li>
  <li class="text-sm" v-if="product['Numero processori']">
    <span class="font-bold">Numero processori</span>
    <span style="display: block;">{{ product['Numero processori'] }}</span>
  </li>
  <li class="text-sm" v-if="product['Dimensioni RAM']">
    <span class="font-bold">Dimensioni RAM</span>
    <span style="display: block;">{{ product['Dimensioni RAM'] }}</span>
  </li>
  <li class="text-sm" v-if="product['Tecnologia di memoria']">
    <span class="font-bold">Tecnologia di memoria</span>
    <span style="display: block;">{{ product['Tecnologia di memoria'] }}</span>
  </li>
  <li class="text-sm" v-if="product['Memoria massima supportata']">
    <span class="font-bold">Memoria massima supportata</span>
    <span style="display: block;">{{ product['Memoria massima supportata'] }}</span>
  </li>
  <li class="text-sm" v-if="product['Descrizione Hard-Disk']">
    <span class="font-bold">Descrizione Hard-Disk</span>
    <span style="display: block;">{{ product['Descrizione Hard-Disk'] }}</span>
  </li>
  <li class="text-sm" v-if="product['Interfaccia Hard-Disk']">
    <span class="font-bold">Interfaccia Hard-Disk</span>
    <span style="display: block;">{{ product['Interfaccia Hard-Disk'] }}</span>
  </li>
  <li class="text-sm" v-if="product['Coprocessore grafico']">
    <span class="font-bold">Coprocessore grafico</span>
    <span style="display: block;">{{ product['Coprocessore grafico'] }}</span>
  </li>
  <li class="text-sm" v-if="product['Grafica Chipset Brand']">
    <span class="font-bold">Grafica Chipset Brand</span>
    <span style="display: block;">{{ product['Grafica Chipset Brand'] }}</span>
  </li>
  <li class="text-sm" v-if="product['Descrizione scheda grafica']">
    <span class="font-bold">Descrizione scheda grafica</span>
    <span style="display: block;">{{ product['Descrizione scheda grafica'] }}</span>
  </li>
  <li class="text-sm" v-if="product['Tipo memoria scheda grafica']">
    <span class="font-bold">Tipo memoria scheda grafica</span>
    <span style="display: block;">{{ product['Tipo memoria scheda grafica'] }}</span>
  </li>
  <li class="text-sm" v-if="product['Interfaccia scheda grafica']">
    <span class="font-bold">Interfaccia scheda grafica</span>
    <span style="display: block;">{{ product['Interfaccia scheda grafica'] }}</span>
  </li>
  <li class="text-sm" v-if="product['Dimensioni schermo']">
    <span class="font-bold">Dimensioni schermo</span>
    <span style="display: block;">{{ product['Dimensioni schermo'] }}</span>
  </li>
  <li class="text-sm" v-if="product['Tipo display']">
    <span class="font-bold">Tipo display</span>
    <span style="display: block;">{{ product['Tipo display'] }}</span>
  </li>
  <li class="text-sm" v-if="product.Materiale">
    <span class="font-bold">Materiale</span>
    <span style="display: block;">{{ product.Materiale }}</span>
  </li>
  <li class="text-sm" v-if="product['Capacità della memoria']">
    <span class="font-bold">Capacità della memoria</span>
    <span style="display: block;">{{ product['Capacità della memoria'] }}</span>
  </li>
  <li class="text-sm" v-if="product['Peso articolo']">
    <span class="font-bold">Peso articolo</span>
    <span style="display: block;">{{ product['Peso articolo'] }}</span>
  </li>
  <li class="text-sm" v-if="product.Wattaggio">
    <span class="font-bold">Wattaggio</span>
    <span style="display: block;">{{ product.Wattaggio }}</span>
  </li>
  <li class="text-sm" v-if="product['Sorgente di alimentazione']">
    <span class="font-bold">Sorgente di alimentazione</span>
    <span style="display: block;">{{ product['Sorgente di alimentazione'] }}</span>
  </li>
  <li class="text-sm" v-if="product['Tipo di connettività']">
    <span class="font-bold">Tipo di connettività</span>
    <span style="display: block;">{{ product['Tipo di connettività'] }}</span>
  </li>
  <li class="text-sm" v-if="product['Tipo wireless']">
    <span class="font-bold">Tipo wireless</span>
    <span style="display: block;">{{ product['Tipo wireless'] }}</span>
  </li>
  <li class="text-sm" v-if="product['Tipologia di periferica ottica']">
    <span class="font-bold">Tipologia di periferica ottica</span>
    <span style="display: block;">{{ product['Tipologia di periferica ottica'] }}</span>
  </li>
  <li class="text-sm" v-if="product['Piattaforma Hardware']">
    <span class="font-bold">Piattaforma Hardware</span>
    <span style="display: block;">{{ product['Piattaforma Hardware'] }}</span>
  </li>
  <li class="text-sm" v-if="product['Sistema operativo']">
    <span class="font-bold">Sistema operativo</span>
    <span style="display: block;">{{ product['Sistema operativo'] }}</span>
  </li>
  <li class="text-sm" v-if="product['Capacità della batteria al litio']">
    <span class="font-bold">Capacità della batteria al litio</span>
    <span style="display: block;">{{ product['Capacità della batteria al litio'] }}</span>
  </li>
  <li class="text-sm" v-if="product['Pile']">
    <span class="font-bold">Pile</span>
    <span style="display: block;">{{ product['Pile'] }}</span>
  </li>
  <li class="text-sm" v-if="product['Le batterie sono incluse']">
    <span class="font-bold">Le batterie sono incluse</span>
    <span style="display: block;">{{ product['Le batterie sono incluse'] }}</span>
  </li>
  <li class="text-sm" v-if="product['Confezione della batteria al litio']">
    <span class="font-bold">Confezione della batteria al litio</span>
    <span style="display: block;">{{ product['Confezione della batteria al litio'] }}</span>
  </li>
  <li class="text-sm" v-if="product['Numero delle celle agli ioni di litio']">
    <span class="font-bold">Numero delle celle agli ioni di litio</span>
    <span style="display: block;">{{ product['Numero delle celle agli ioni di litio'] }}</span>
  </li>
  <li class="text-sm" v-if="product['Fascia d\'età (descrizione)']">
    <span class="font-bold">Fascia d'età (descrizione)</span>
    <span style="display: block;">{{ product['Fascia d\'età (descrizione)'] }}</span>
  </li>
  <li class="text-sm" v-if="product['Aggiornamenti software garantiti fino a']">
    <span class="font-bold">Aggiornamenti software garantiti fino a</span>
    <span style="display: block;">{{ product['Aggiornamenti software garantiti fino a'] }}</span>
  </li>
 
</ul>




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
  "https://eu-central-1.aws.data.mongodb-api.com/app/data-xdnek/endpoint/portatili",
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



// Funzione per ottenere le recensioni del prodotto
const productReviews = (product) => {
  const reviews = [];
  for (let i = 1; i <= 8; i++) {
    if (product[`Review${i}`]) {
      reviews.push({ id: i, author: `User ${i}`, text: product[`Review${i}`] });
    }
  }
  return reviews;
};

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

