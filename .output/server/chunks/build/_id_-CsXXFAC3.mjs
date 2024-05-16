import { u as useRouter } from './server.mjs';
import { u as useFetch } from './fetch-BTGRzqHs.mjs';
import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const { id } = useRoute().params;
    useRouter();
    const { pending, data: products } = useFetch(
      "https://eu-central-1.aws.data.mongodb-api.com/app/data-xdnek/endpoint/schedemadri",
      {
        lazy: false,
        transform: (products2) => {
          return products2;
        }
      },
      "$H3OxYP9tuC"
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-6 py-10" }, _attrs))}><div class="cursor-pointer"><p>Back</p></div>`);
      if (unref(pending)) {
        _push(`<div><p>Loading ...</p></div>`);
      } else {
        _push(`<div class="px-6 py-10"><!--[-->`);
        ssrRenderList(unref(products), (product) => {
          _push(`<div>`);
          if (product._id == unref(id)) {
            _push(`<div class="p-6 rounded-md grid grid-cols-2 gap-20 max-w-7xl mx-auto"><img${ssrRenderAttr("src", product.Thumbnail)} alt=""><div class=""><h2 class="text-black text-4xl mb-4">${ssrInterpolate(product.Title)}</h2><h3 class="text-black text-3xl mb-4">Price: ${ssrInterpolate(product.Price)}</h3><p class="text-black text-xl mb-4">Brand: ${ssrInterpolate(product.Brand)}</p><p class="text-black/50 text-sm">${ssrInterpolate(product.Description)}</p></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-CsXXFAC3.mjs.map
