import { _ as __nuxt_component_0 } from './nuxt-link-P6SDANQl.mjs';
import { u as useFetch } from './fetch-BTGRzqHs.mjs';
import { ref, computed, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
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
  __name: "index copy",
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
            asin: product.ASIN
          }));
        }
      },
      "$ug32O8fZEP"
    );
    const totalPages = computed(() => Math.ceil(allProducts.value.length / pageSize));
    const paginatedProducts = computed(() => {
      const startIndex = (currentPage.value - 1) * pageSize;
      return allProducts.value.slice(startIndex, startIndex + pageSize);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(pending)) {
        _push(`<div><p>Loading ...</p></div>`);
      } else {
        _push(`<div class="grid grid-cols-5 gap-4 px-6"><!--[-->`);
        ssrRenderList(paginatedProducts.value, (product) => {
          _push(`<div><div class="flex flex-col shadow-md bg-white p-6 rounded-md"><img${ssrRenderAttr("src", product.image)}>`);
          _push(ssrRenderComponent(_component_nuxt_link, {
            to: `/products/${product.id}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<h2 class="text-black mt-auto text-sm"${_scopeId}>${ssrInterpolate(product.title)}</h2>`);
              } else {
                return [
                  createVNode("h2", { class: "text-black mt-auto text-sm" }, toDisplayString(product.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/index copy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index copy-DdOZ9Vjt.mjs.map
