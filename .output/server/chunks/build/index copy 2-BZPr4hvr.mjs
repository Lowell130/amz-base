import { u as useFetch } from './fetch-BTGRzqHs.mjs';
import { ref, computed, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const pageSize = 20;
const _sfc_main = {
  __name: "index copy 2",
  __ssrInlineRender: true,
  setup(__props) {
    const currentPage = ref(1);
    const { pending, data: allProducts } = useFetch(
      "https://eu-central-1.aws.data.mongodb-api.com/app/data-xdnek/endpoint/schedemadri",
      {
        lazy: false,
        transform: (products) => {
          return products.map((product) => ({
            id: product._id,
            title: product.Title,
            image: product.Thumbnail,
            brand: product.Brand,
            asin: product.ASIN,
            price: product.Price
          }));
        }
      },
      "$gjKs7Z10w6"
    );
    const totalPages = computed(() => Math.ceil(allProducts.value.length / pageSize));
    const paginatedProducts = computed(() => {
      const startIndex = (currentPage.value - 1) * pageSize;
      return allProducts.value.slice(startIndex, startIndex + pageSize);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(pending)) {
        _push(`<div><p>Loading ...</p></div>`);
      } else {
        _push(`<div class="flex flex-wrap justify-center mt-10"><!--[-->`);
        ssrRenderList(paginatedProducts.value, (product) => {
          _push(`<div class="p-4 max-w-sm"><div class="flex rounded-lg h-full p-8 flex-col"><div class="flex items-center mb-3"><div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg></div><h2 class="text-dark dark:text-white text-lg font-medium">${ssrInterpolate(product.brand)}</h2></div><div class="flex flex-col justify-between flex-grow"><img${ssrRenderAttr("src", product.image)}><p class="leading-relaxed text-base text-dark dark:text-gray-300">${ssrInterpolate(product.title)}</p><a href="#" class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">${ssrInterpolate(product.price)} <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></a></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`<div class="mt-4 flex justify-center"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"${ssrIncludeBooleanAttr(currentPage.value === 1) ? " disabled" : ""}> Previous </button><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"${ssrIncludeBooleanAttr(currentPage.value === totalPages.value) ? " disabled" : ""}> Next </button></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/index copy 2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index copy 2-BZPr4hvr.mjs.map
