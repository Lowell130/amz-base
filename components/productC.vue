<template>
    <div>
    <h2 class="text-gray-600 text-2xl font-medium">Prodotti in evidenza</h2> 
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
    >
      <div
        v-for="productc in cfilteredProducts"
        :key="productc.id"
        class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <div>
          <nuxt-link :to="`/products/tablet/${productc.id}`">
            <img
              class="p-8 max-w-[15rem] h-[15rem] object-contain mx-auto"
              :src="productc.image"
              :alt="productc.title ? productc.title : ''"
            />

            <!-- <img class="p-8 max-w-[15rem] h-[15rem] object-contain mx-auto" :src="productc.image" :alt="productc.title ? productc.title : ''"/> -->
          </nuxt-link>
        </div>
        <div class="px-5 pb-5">
          <nuxt-link
            :to="`/products/tablet/${productc.id}`"
            :title="productc.title"
          >
            <h2
              class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
            >
              {{ truncateText(productc.title, 30) }}
            </h2>
          </nuxt-link>
          <p>{{ productc.rank }}</p>

          <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">{{
              productc.price
            }}</span>
            <a
            target="_blank" :href="productc.AffiateLink + `nuxt-dev-21`"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >Acquista</a
            >
          </div>
        </div>
      </div>
    </div>
</div>
</template>


<script setup>
const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  } else {
    return text;
  }
};






// TABLET API

// const { pending, data: tabletProducts } = useFetch(
    const { data: tabletProducts } = useFetch(
  "https://eu-central-1.aws.data.mongodb-api.com/app/data-xdnek/endpoint/tablet",
  {
    lazy: false,
    transform: (productcs) => {
      return productcs.map((productc) => ({
        id: productc._id,
        title: productc.Title,
        image: productc.Thumbnail,
        brand: productc.Brand,
        asin: productc.ASIN,
        price: productc.Price,
        rank: productc.SalesRank,
        AffiateLink: productc.AffiateLink
      }));
    },
  }
);


const cfilteredProducts = computed(() => {
  if (!tabletProducts.value) {
    return [];
  }
  const filtered = tabletProducts.value.filter(
    (productc) => parseFloat(productc.price) > 0 && productc.rank !== 0
  );
  return filtered.slice(0, 8); // Restituisce solo i primi 4 prodotti
});




</script>
