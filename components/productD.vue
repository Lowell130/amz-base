<template>

<div>
<!-- <h3 class="text-gray-600 text-2xl font-medium">Top Portatili</h3> -->
<div
  class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
>
  <div
    v-for="productd in dfilteredProducts"
    :key="productd.id"
    class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <div>
      <nuxt-link :to="`/products/portatili/${productd.id}`">
        <img
          class="p-8 max-w-[15rem] h-[15rem] object-contain mx-auto"
          :src="productd.image"
          :alt="productd.title ? productd.title : ''"
        />

        <!-- <img class="p-8 max-w-[15rem] h-[15rem] object-contain mx-auto" :src="productd.image" :alt="productd.title ? productd.title : ''"/> -->
      </nuxt-link>
    </div>
    <div class="px-5 pb-5">
      <nuxt-link
        :to="`/products/portatili/${productd.id}`"
        :title="productd.title"
      >
        <h2
          class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
        >
          {{ truncateText(productd.title, 30) }}
        </h2>
      </nuxt-link>
      <p>{{ productd.rank }}</p>

      <div class="flex items-center justify-between">
        <span class="text-3xl font-bold text-gray-900 dark:text-white">{{
          productd.price
        }}</span>
        <a
        target="_blank" :href="productd.AffiateLink + `nuxt-dev-21`"
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


const {  data: portatiliProducts } = useFetch(
  "https://eu-central-1.aws.data.mongodb-api.com/app/data-xdnek/endpoint/portatili",
  {
    lazy: false,
    transform: (productds) => {
      return productds.map((productd) => ({
        id: productd._id,
        title: productd.Title,
        image: productd.Thumbnail,
        brand: productd.Brand,
        asin: productd.ASIN,
        price: productd.Price,
        rank: productd.SalesRank,
        AffiateLink: productd.AffiateLink
      }));
    },
  }
);


const dfilteredProducts = computed(() => {
  if (!portatiliProducts.value) {
    return [];
  }
  const filtered = portatiliProducts.value.filter(
    (productd) => parseFloat(productd.price) > 0 && productd.rank !== 0
  );
  return filtered.slice(0, 8); // Restituisce solo i primi 4 prodotti
});


</script>