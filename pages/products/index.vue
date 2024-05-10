<template>
  <div v-if="pending">
    <p>Loading ...</p>
  </div>
  <div v-else class="grid grid-cols-5 gap-4 px-6">
    <div v-for="product in products" :key="product.id">
      <div class="flex flex-col shadow-md bg-white p-6 rounded-md">
        <nuxt-link :to="`/products/${product.id}`">
          <h2 class="text-black mt-auto text-sm">{{ product.title }}</h2>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
 <script setup>
const { pending, data: products } = useFetch(
  "https://eu-central-1.aws.data.mongodb-api.com/app/data-xdnek/endpoint/schedevideo",
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
</script>
  