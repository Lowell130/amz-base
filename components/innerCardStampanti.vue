<template>
    <div>
      <h3 class="text-gray-600 text-2xl font-medium my-10">Potrebbero interessarti</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        <div
          v-for="productz in dfilteredProducts"
          :key="productz.id"
          class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <div>
            <nuxt-link :to="`/products/cartucce/${productz.id}`">
              <img
                class="p-8 max-w-[15rem] h-[15rem] object-contain mx-auto"
                :src="productz.image"
                :alt="productz.title ? productz.title : ''"
              />
            </nuxt-link>
          </div>
          <div class="px-5 pb-5">
            <nuxt-link
              :to="`/products/cartucce/${productz.id}`"
              :title="productz.title"
            >
              <h2
                class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
              >
                {{ truncateText(productz.title, 30) }}
              </h2>
            </nuxt-link>
            <p>{{ productz.rank }}</p>
            <div class="flex items-center justify-between">
              <span class="text-3xl font-bold text-gray-900 dark:text-white">
                {{ productz.price }}
              </span>
              <a
                href="#"
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
  
  const { data: portatiliProducts } = useFetch(
    "https://eu-central-1.aws.data.mongodb-api.com/app/data-xdnek/endpoint/cartucce",
    {
      lazy: false,
      transform: (productzs) => {
        return productzs.map((productz) => ({
          id: productz._id,
          title: productz.Title,
          image: productz.Thumbnail,
          brand: productz.Brand,
          asin: productz.ASIN,
          price: productz.Price,
          rank: productz.SalesRank,
        }));
      },
    }
  );
  
  // Function to shuffle an array
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  
    return array;
  }
  
  const dfilteredProducts = computed(() => {
    if (!portatiliProducts.value) {
      return [];
    }
    const filtered = portatiliProducts.value.filter(
      (productz) => parseFloat(productz.price) > 0 && productz.rank !== 0
    );
    const shuffled = shuffle(filtered);
    return shuffled.slice(0, 8); // Restituisce 8 prodotti casuali
  });
  </script>
  