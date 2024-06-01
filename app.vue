<template>
  <div class="mx-auto size-full">
    <header>
      <NavBar />
    </header>

    <!-- Qui includi il contenuto dinamico delle pagine -->
    <main>
      <NuxtPage />
    </main>

    <footer>
      <!-- Includi qui il tuo footer -->
      <SiteFooter />
    </footer>
  </div>
</template>

<script>
export default {
  head() {
    return {
      meta: [
        {
          name: "google-site-verification",
          content: "Q-VK_2Se54rJT10RvyOYgD3xX9uieENzzQ7vPsh64F0",
        },
      ],
    };
  },
};
</script>