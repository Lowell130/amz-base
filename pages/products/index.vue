<template>
    <main class="pt-28">
      <div class="container mx-auto px-6">
        <h1 class="text-2xl font-bold text-[#333]">Scopri i Nostri Prodotti</h1>
        <p class="text-sm text-[#333]">
          Benvenuti nel nostro e-commerce! Qui troverete una vasta gamma di
          prodotti di alta qualità per soddisfare tutte le vostre esigenze
          tecnologiche. Scegliete tra le nostre categorie principali e scoprite le
          offerte migliori.
        </p>
  
        <div class="md:flex mt-8 md:-mx-4 mb-4">
          <div class="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2">
            <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
              <div class="px-10 max-w-xl">
                <h2 class="text-2xl text-white font-semibold">Schede Video</h2>
                <button class="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                  <span>
                      <nuxt-link :to="`/products/schede-video/`">Acquista</nuxt-link>
                  </span>
                  <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
  
          <div class="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2">
            <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
              <div class="px-10 max-w-xl">
                <h2 class="text-2xl text-white font-semibold">Schede Madri</h2>
                <button class="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                  <span>
                      <nuxt-link :to="`/products/schede-madri/`">Acquista</nuxt-link>
                  </span>
                  <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
  
          <div class="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2">
            <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
              <div class="px-10 max-w-xl">
                <h2 class="text-2xl text-white font-semibold">Tablet</h2>
                <button class="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                  <span>
                      <nuxt-link :to="`/products/tablet`">Acquista</nuxt-link>
                  </span>
                  <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
  
          <div class="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2">
            <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
              <div class="px-10 max-w-xl">
                <h2 class="text-2xl text-white font-semibold">Portatili</h2>
                <button class="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                  <span>
                      <nuxt-link :to="`/products/portatili/`">Acquista</nuxt-link>
                  </span>
                  <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
  
        <h2 class="text-2xl font-bold text-[#333]">Schede Video</h2>
        <p class="text-l text-[#333]">
          Potenzia le tue Esperienze di Gioco e Lavoro con le Migliori Schede
          Video
        </p>
        <p class="text-sm text-[#333] mb-10">
          Le nostre <nuxt-link class="underline" :to="`/products/schede-video/`">schede video</nuxt-link> sono selezionate tra le migliori marche sul
          mercato per garantirti prestazioni eccezionali. Che tu sia un
          appassionato di gaming, un professionista del design grafico o un
          creatore di contenuti, troverai la scheda video perfetta per le tue
          esigenze. Offriamo una vasta gamma di modelli, dalle schede grafiche di
          fascia alta per il gaming 4K alle opzioni più economiche per migliorare
          il tuo PC. Scopri le nostre offerte e potenzia il tuo sistema con le
          ultime novità in termini di tecnologia grafica.
        </p>
  
        <h2 class="text-2xl font-bold text-[#333]">Schede Madri</h2>
        <p class="text-l text-[#333]">
          La Base Perfetta per il Tuo Sistema con le Nostre Schede Madri
        </p>
        <p class="text-sm text-[#333] mb-10">
          Le <nuxt-link class="underline" :to="`/products/schede-madri/`">schede madri</nuxt-link> sono il cuore del tuo computer, e nel nostro e-commerce
          troverai una selezione delle migliori opzioni disponibili. Offriamo
          schede madri compatibili con tutti i principali processori, con
          funzionalità avanzate come supporto per la memoria RAM ad alta velocità,
          connettività Wi-Fi integrata, e porte multiple per espansione. Sia che
          tu stia costruendo un nuovo PC da zero o aggiornando il tuo sistema
          attuale, le nostre schede madri ti forniranno la stabilità e le
          prestazioni di cui hai bisogno.
        </p>
  
        <h2 class="text-2xl font-bold text-[#333]">Tablet</h2>
        <p class="text-l text-[#333]">
          Scopri la Mobilità e la Versatilità con i Nostri Tablet
        </p>
        <p class="text-sm text-[#333] mb-10">
          I <nuxt-link class="underline" :to="`/products/tablet`">tablet</nuxt-link> sono diventati uno strumento indispensabile per chi cerca
          mobilità e versatilità. Nel nostro negozio, troverai una vasta gamma di
          tablet adatti a tutte le esigenze, dai modelli di alta gamma per
          professionisti e creativi ai tablet più accessibili per l'uso quotidiano
          e l'intrattenimento. Offriamo dispositivi con schermi di alta qualità,
          lunga durata della batteria, e potenza sufficiente per gestire qualsiasi
          applicazione. Scegli il tablet perfetto per te e scopri le ultime
          offerte.
        </p>
  
        <h2 class="text-2xl font-bold text-[#333]">Portatili</h2>
        <p class="text-l text-[#333]">
          Trova il Portatile Perfetto per Lavoro, Studio e Divertimento
        </p>
        <p class="text-sm text-[#333] mb-10">
          La nostra selezione di <nuxt-link class="underline" :to="`/products/portatili/`">portatili</nuxt-link> copre ogni esigenza, dai notebook
          ultraleggeri per la massima portabilità ai potenti laptop da gaming.
          Scegli tra i migliori marchi e modelli, con caratteristiche come display
          ad alta risoluzione, processori veloci, ampio spazio di archiviazione e
          design eleganti. Che tu abbia bisogno di un portatile per lavorare in
          movimento, studiare, o semplicemente per divertirti, troverai l'opzione
          ideale nel nostro e-commerce. Esplora le nostre offerte e trova il
          portatile perfetto per te.
        </p>
  
        <h2 class="text-2xl font-bold text-[#333]">FAQ</h2>
        <p class="text-l text-[#333]">Domande Frequenti</p>
        <ul class="list-disc pl-5 space-y-2">
          <li class="text-sm text-[#333]">
            <p class="font-semibold">
              Quali sono le marche disponibili per le schede video?
            </p>
            <p>
              Offriamo <nuxt-link class="underline" :to="`/products/schede-video/`">schede video</nuxt-link> dai migliori produttori come NVIDIA, AMD, e
              altre marche leader del settore.
            </p>
          </li>
          <li class="text-sm text-[#333]">
            <p class="font-semibold">
              Posso trovare schede madri compatibili con processori Intel e AMD?
            </p>
            <p>
              Sì, abbiamo una vasta gamma di <nuxt-link class="underline" :to="`/products/schede-madri/`">schede madri</nuxt-link> compatibili sia con
              processori Intel che AMD.
            </p>
          </li>
          <li class="text-sm text-[#333]">
            <p class="font-semibold">
              Quali sono i vantaggi di acquistare un tablet da voi?
            </p>
            <p>
              I nostri <nuxt-link class="underline" :to="`/products/tablet`">tablet</nuxt-link> sono selezionati per offrire la massima qualità, con
              garanzie estese e supporto post-vendita.
            </p>
          </li>
          <li class="text-sm text-[#333]">
            <p class="font-semibold">Avete portatili per studenti?</p>
            <p>
              Certamente! Offriamo <nuxt-link class="underline" :to="`/products/portatili/`">portatili</nuxt-link> con sconti speciali per studenti e
              caratteristiche ideali per lo studio.
            </p>
          </li>
        </ul>
      </div>
    </main>
  </template>
  
  <script setup>
  useServerSeoMeta({
      ogTitle: () => "Scopri i Nostri Prodotti",
      title: () => "Scopri i Nostri Prodotti",
      description: () => "Benvenuti nel nostro e-commerce! Scopri una vasta gamma di prodotti tecnologici di alta qualità: schede video, schede madri, tablet e portatili. Trova le migliori offerte per soddisfare tutte le tue esigenze.",
      ogDescription: () => "Benvenuti nel nostro e-commerce! Scopri una vasta gamma di prodotti tecnologici di alta qualità: schede video, schede madri, tablet e portatili. Trova le migliori offerte per soddisfare tutte le tue esigenze.",
      // ogImage: () => "https://example.com/og-image.jpg",
      // ogImageUrl: () => "https://example.com/og-image.jpg",
      twitterCard: () => 'summary_large_image',
      twitterTitle: () => "Scopri i Nostri Prodotti",
      twitterDescription: () => "Benvenuti nel nostro e-commerce! Scopri una vasta gamma di prodotti tecnologici di alta qualità: schede video, schede madri, tablet e portatili. Trova le migliori offerte per soddisfare tutte le tue esigenze.",
      // twitterImage: () => "https://example.com/twitter-image.jpg"
  });
  </script>
  