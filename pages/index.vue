<template>  
    <main class="pt-28">
        <div class="container mx-auto px-6">
            <h1 class="text-center my-4 text-2xl font-bold text-[#333]">Benvenuto nel nostro e-commerce</h1>
            <div class="h-64 rounded-md overflow-hidden bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1627281796892-39e266ee50be?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')">
                <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
                    <div class="px-10 max-w-xl">
                        <h2 class="text-2xl text-white font-semibold">Schede Madri</h2>
                        <p class="mt-2 text-gray-400">Scopri la nostra selezione di schede madri per il tuo PC.</p>
                        <nuxt-link class="pb-1 uppercase underline text-white text-xs" to="/products/schede-madri">Scopri di più</nuxt-link>
                    </div>
                </div>
            </div>

            <div class="md:flex mt-8 md:-mx-4">
                <div class="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2" style="background-image: url('https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?q=80&w=1953&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')">
                    <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
                        <div class="px-10 max-w-xl">
                            <h2 class="text-2xl text-white font-semibold">Schede Video</h2>
                            <p class="mt-2 text-gray-400">Esplora la nostra gamma di schede video ad alte prestazioni.</p>
                            <nuxt-link class="pb-1 uppercase text-xs underline text-white" to="/products/schede-video">Scopri di più</nuxt-link>
                        </div>
                    </div>
                </div>
                <div class="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2" style="background-image: url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')">
                    <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
                        <div class="px-10 max-w-xl">
                            <h2 class="text-2xl text-white font-semibold">PC Games</h2>
                            <p class="mt-2 text-gray-400">Trova i migliori giochi per PC nella nostra selezione.</p>
                            <nuxt-link class="pb-1 uppercase text-xs underline text-white" to="/products">Scopri di più</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-16">
                <productC />
            </div>

            <div class="mt-16">
                <productD />
            </div>

           
           


            <div class="mt-16">
                <h2 class="text-2xl font-bold text-[#333]">Scopri il mondo dell'informatica con noi!</h2>
                <p class="text-sm text-[#333] mb-10">Nel mondo moderno, l'informatica è diventata parte integrante della nostra vita quotidiana. Dai computer portatili ai tablet, dalle schede madri alle schede video, questi dispositivi ci accompagnano nelle nostre attività quotidiane, dal lavoro all'intrattenimento.
               Perché acquistare i nostri prodotti informatici? La risposta è semplice: offriamo prodotti di alta qualità che soddisfano le tue esigenze sia che tu sia un professionista impegnato in progetti complessi, uno studente che cerca di imparare e crescere, o un appassionato di gaming che cerca la migliore esperienza di gioco possibile.
                Non importa se sei un professionista del settore, un appassionato di tecnologia o un utente occasionale, siamo qui per fornirti le soluzioni migliori per le tue esigenze informatiche.</p>
            </div>

         
        </div>
    </main>   
</template>


<script setup>
useServerSeoMeta({
    ogTitle: () => "Scopri i Nostri Prodotti",
    title: () => "Scopri i Nostri Prodotti",
    description: () => "Benvenuti nel nostro e-commerce! Scopri una vasta gamma di prodotti tecnologici di alta qualità: schede video, schede madri, tablet e portatili. Trova le migliori offerte per soddisfare tutte le tue esigenze.",
    ogDescription: () => "Benvenuti nel nostro e-commerce! Scopri una vasta gamma di prodotti tecnologici di alta qualità: schede video, schede madri, tablet e portatili. Trova le migliori offerte per soddisfare tutte le tue esigenze.",
    ogImage: () => "https://example.com/og-image.jpg",
    ogImageUrl: () => "https://example.com/og-image.jpg",
    twitterCard: () => 'summary_large_image',
    twitterTitle: () => "Scopri i Nostri Prodotti",
    twitterDescription: () => "Benvenuti nel nostro e-commerce! Scopri una vasta gamma di prodotti tecnologici di alta qualità: schede video, schede madri, tablet e portatili. Trova le migliori offerte per soddisfare tutte le tue esigenze.",
    twitterImage: () => "https://example.com/twitter-image.jpg"
});
</script>