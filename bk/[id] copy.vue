<template>
  <div class="px-6 py-10">
    <!-- <p>id product: {{ id }}</p> -->
    <div @click="router.go(-1)" class="cursor-pointer">
      <p>Back</p>
    </div>
    <div v-if="pending">
      <p>Loading ...</p>
    </div>
    <div v-else class="px-6 py-10">
      <div v-for="product in products" :key="product.id">
        <div
          v-if="product._id == id"
          class="p-6 rounded-md grid grid-cols-2 gap-20 max-w-7xl mx-auto"
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



const { pending, data: products } = useFetch(
  "https://eu-central-1.aws.data.mongodb-api.com/app/data-xdnek/endpoint/schedemadri",
  {
    lazy: false,
    transform: (products) => {
        return products;
    },
  }
);
</script>

