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
  // Configurazione, se necessario
}
</script>
