<template>
    <nav class="fixed w-full p-6 bg-white border-b border-gray-200 z-40">
      <div class="flex items-center justify-between">
  
        <!-- Header logo -->
        <div>
          <Tailwind />
        </div>
  
        <!-- Mobile toggle -->
        <div class="md:hidden">
          <button @click="drawer">
            <svg 
              class="h-8 w-8 fill-current text-black"
              fill="none" stroke-linecap="round" 
              stroke-linejoin="round" stroke-width="2" 
              viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
  
        <!-- Navbar -->
        <div class="hidden md:block">
          <ul class="flex space-x-8 text-sm font-sans">
            <li><a href="/" class="pb-1 uppercase text-xs">Home</a></li>
            <li>
                <NuxtLink class="pb-1 uppercase text-xs" to="/products/schede-video">schede video</NuxtLink>
            </li>
            <li>
                <NuxtLink class="pb-1 uppercase text-xs" to="/products/schede-madri">schede madri</NuxtLink>
            </li>
            <li>
                <NuxtLink class="pb-1 uppercase text-xs" to="/products/componenti">componenti</NuxtLink>
            </li>
            <li>
                <NuxtLink class="pb-1 uppercase text-xs" to="/products/tablet">tablet</NuxtLink>
            </li>
            <li>
                <NuxtLink class="pb-1 uppercase text-xs" to="/products/portatili">portatili</NuxtLink>
            </li>
            <li>
                <NuxtLink class="pb-1 uppercase text-xs" to="/products/stampanti">stampanti</NuxtLink>
            </li>
            <!-- <li><a href="products/schede-video/" class="">Schede Video</a></li>
            <li><a href="products/schede-madri/" class="">Schede Madri</a></li>
            <li><a href="#" class="">Componenti</a></li>
            <li><a href="#" class="">Tablet</a></li> -->
            <!-- <li><a href="#" class="cta bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded text-white font-semibold">Sign Up</a></li> -->
          </ul>
        </div>
  
        <!-- Dark Background Transition -->
        <transition
          enter-class="opacity-0"
          enter-active-class="ease-out transition-medium"
          enter-to-class="opacity-100"
          leave-class="opacity-100"
          leave-active-class="ease-out transition-medium"
          leave-to-class="opacity-0"
        >
          <div @keydown.esc="isOpen = false" v-show="isOpen" class="z-10 fixed inset-0 transition-opacity">
              <div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
          </div>
        </transition>
  
        <!-- Drawer Menu -->
        <aside class="p-5 transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30" :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
          
          <div class="close">
            <button class="absolute top-0 right-0 mt-4 mr-4" @click=" isOpen = false">
              <svg 
                class="w-6 h-6"
                fill="none" stroke-linecap="round" 
                stroke-linejoin="round" stroke-width="2"
                viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
  
          <span @click="isOpen = false" class="flex w-full items-center p-4 border-b">
            <Tailwind />
          </span>
  
          <ul class="divide-y font-sans">
            <li><a href="/" @click="isOpen = false" class="my-4 inline-block uppercase text-xs">Home</a></li>
            <li><NuxtLink @click="isOpen = false" class="my-4 inline-block uppercase text-xs" to="/products/schede-madri">schede madri</NuxtLink></li>
            <li><NuxtLink @click="isOpen = false" class="my-4 inline-block uppercase text-xs" to="/products/schede-video">schede video</NuxtLink></li>
            <li><NuxtLink @click="isOpen = false" class="my-4 inline-block uppercase text-xs" to="/products/componenti">componenti</NuxtLink></li>
            <li><NuxtLink @click="isOpen = false" class="my-4 inline-block uppercase text-xs" to="/products/tablet">tablet</NuxtLink></li>
            <li><NuxtLink @click="isOpen = false" class="my-4 inline-block uppercase text-xs" to="/products/portatili">portatili</NuxtLink></li>
            <li><NuxtLink @click="isOpen = false" class="my-4 inline-block uppercase text-xs" to="/products/stampanti">stampanti</NuxtLink></li>

          
          </ul>
  
       
  
        </aside>
  
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false
      };
    },
    methods: {
      drawer() {
        this.isOpen = !this.isOpen;
      }
    },
    watch: {
      isOpen: {
        immediate: true,
        handler(isOpen) {
          if (process.client) {
            if (isOpen) document.body.style.setProperty("overflow", "hidden");
            else document.body.style.removeProperty("overflow");
          }
        }
      }
    },
    mounted() {
      document.addEventListener("keydown", e => {
        if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
      });
    }
  };
  </script>