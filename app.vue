<template>
   <div class="max-w-[80rem] flex flex-col mx-auto size-full">
    <header>
      <SiteHeader />
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
