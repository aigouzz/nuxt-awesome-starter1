import { getRequestDependencies, getPreloadLinks, getPrefetchLinks, createRenderer } from 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+vue-bundle-renderer@2.0.0/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { eventHandler, setResponseHeader, send, getResponseStatus, setResponseStatus, setResponseHeaders, getQuery, createError, appendResponseHeader, getResponseStatusText } from 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+h3@1.8.1/node_modules/h3/dist/index.mjs';
import { stringify, uneval } from 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+devalue@4.3.2/node_modules/devalue/index.js';
import { joinURL, withoutTrailingSlash } from 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+ufo@1.3.0/node_modules/ufo/dist/index.mjs';
import { renderSSRHead } from 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+@unhead+ssr@1.5.0/node_modules/@unhead/ssr/dist/index.mjs';
import { u as useNitroApp, a as useRuntimeConfig, b as useStorage, g as getRouteRules } from './nitro/nitro-prerenderer.mjs';
import { version, unref } from 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+vue@3.3.4/node_modules/vue/index.mjs';
import { createServerHead as createServerHead$1 } from 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+unhead@1.5.0/node_modules/unhead/dist/index.mjs';
import { defineHeadPlugin } from 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+@unhead+shared@1.5.0/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+node-fetch-native@1.4.0/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+ofetch@1.3.3/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+destr@2.0.1/node_modules/destr/dist/index.mjs';
import 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+unenv@1.7.4/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+scule@1.0.0/node_modules/scule/dist/index.mjs';
import 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+klona@2.0.6/node_modules/klona/dist/index.mjs';
import 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+defu@6.1.2/node_modules/defu/dist/defu.mjs';
import 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+ohash@1.1.3/node_modules/ohash/dist/index.mjs';
import 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+unstorage@1.9.0/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+unstorage@1.9.0/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+unstorage@1.9.0/node_modules/unstorage/drivers/memory.mjs';
import 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+unstorage@1.9.0/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+unstorage@1.9.0/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+radix3@1.1.0/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+pathe@1.1.1/node_modules/pathe/dist/index.mjs';
import 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+shiki-es@0.14.0/node_modules/shiki-es/dist/shiki.node.mjs';
import 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+unenv@1.7.4/node_modules/unenv/runtime/npm/consola.mjs';
import 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+unified@11.0.2/node_modules/unified/index.js';
import 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+mdast-util-to-string@3.2.0/node_modules/mdast-util-to-string/index.js';
import 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+micromark@4.0.0/node_modules/micromark/index.js';
import 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+unist-util-stringify-position@3.0.3/node_modules/unist-util-stringify-position/index.js';
import 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+micromark-util-character@2.0.1/node_modules/micromark-util-character/index.js';
import 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+micromark-util-chunked@2.0.0/node_modules/micromark-util-chunked/index.js';
import 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+micromark-util-resolve-all@2.0.0/node_modules/micromark-util-resolve-all/index.js';
import 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+micromark-util-sanitize-uri@2.0.0/node_modules/micromark-util-sanitize-uri/index.js';
import 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+slugify@1.6.6/node_modules/slugify/slugify.js';
import 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+remark-parse@10.0.2/node_modules/remark-parse/index.js';
import 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+remark-rehype@10.1.0/node_modules/remark-rehype/index.js';
import 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+remark-mdc@2.0.0/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+hast-util-to-string@3.0.0/node_modules/hast-util-to-string/index.js';
import 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+github-slugger@2.0.0/node_modules/github-slugger/index.js';
import 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+detab@3.0.2/node_modules/detab/index.js';
import 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+remark-emoji@4.0.0/node_modules/remark-emoji/index.js';
import 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+remark-gfm@3.0.1/node_modules/remark-gfm/index.js';
import 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+rehype-external-links@2.1.0/node_modules/rehype-external-links/index.js';
import 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+rehype-sort-attribute-values@5.0.0/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+rehype-sort-attributes@5.0.0/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+rehype-raw@6.1.1/node_modules/rehype-raw/index.js';
import 'file:///Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+unist-util-visit@5.0.0/node_modules/unist-util-visit/index.js';

function defineRenderHandler(handler) {
  return eventHandler(async (event) => {
    if (event.path.endsWith("/favicon.ico")) {
      setResponseHeader(event, "Content-Type", "image/x-icon");
      send(
        event,
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      );
      return;
    }
    const response = await handler(event);
    if (!response) {
      const _currentStatus = getResponseStatus(event);
      setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
      return send(
        event,
        "No response returned from render handler: " + event.path
      );
    }
    const nitroApp = useNitroApp();
    await nitroApp.hooks.callHook("render:response", response, { event });
    if (response.headers) {
      setResponseHeaders(event, response.headers);
    }
    if (response.statusCode || response.statusMessage) {
      setResponseStatus(event, response.statusCode, response.statusMessage);
    }
    return typeof response.body === "string" ? response.body : JSON.stringify(response.body);
  });
}

function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const publicBase = useRuntimeConfig().app.cdnURL || useRuntimeConfig().app.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
}

const Vue3 = version.startsWith("3");

function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref, lastKey = "") {
  if (ref instanceof Promise)
    return ref;
  const root = resolveUnref(ref);
  if (!ref || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}

const VueReactivityPlugin = defineHeadPlugin({
  hooks: {
    "entries:resolve": function(ctx) {
      for (const entry of ctx.entries)
        entry.resolvedInput = resolveUnrefHeadInput(entry.input);
    }
  }
});

const headSymbol = "usehead";
function vueInstall(head) {
  const plugin = {
    install(app) {
      if (Vue3) {
        app.config.globalProperties.$unhead = head;
        app.config.globalProperties.$head = head;
        app.provide(headSymbol, head);
      }
    }
  };
  return plugin.install;
}
function createServerHead(options = {}) {
  const head = createServerHead$1(options);
  head.use(VueReactivityPlugin);
  head.install = vueInstall(head);
  return head;
}

const unheadPlugins = [];

const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"}],"link":[],"style":[],"script":[],"noscript":[]};

const appRootId = "__nuxt";

const appRootTag = "div";

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const getClientManifest = () => import('./app/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getSSRStyles = lazyCachedFunction(() => import('./app/styles.mjs').then((r) => r.default || r));
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const spaTemplate = await import('./rollup/_virtual_spa-template.mjs').then((r) => r.template).catch(() => "");
  const options = {
    manifest,
    renderToString: () => `<${appRootTag}${` id="${appRootId}"` }>${spaTemplate}</${appRootTag}>`,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig();
    ssrContext.modules = ssrContext.modules || /* @__PURE__ */ new Set();
    ssrContext.payload = {
      _errors: {},
      serverRendered: false,
      data: {},
      state: {}
    };
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
const payloadCache = useStorage("internal:nuxt:prerender:payload") ;
useStorage("internal:nuxt:prerender:island") ;
useStorage("internal:nuxt:prerender:island-props") ;
const PAYLOAD_URL_RE = /\/_payload(\.[a-zA-Z0-9]+)?.json(\?.*)?$/ ;
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery(event) : null;
  if (ssrError && ssrError.statusCode) {
    ssrError.statusCode = parseInt(ssrError.statusCode);
  }
  if (ssrError && !("__unenv__" in event.node.req)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const islandContext = void 0;
  let url = ssrError?.url || islandContext?.url || event.path;
  const isRenderingPayload = PAYLOAD_URL_RE.test(url) && !islandContext;
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event._path = url;
    event.node.req.url = url;
    if (await payloadCache.hasItem(url)) {
      return payloadCache.getItem(url);
    }
  }
  const routeOptions = getRouteRules(event);
  const head = createServerHead({
    plugins: unheadPlugins
  });
  const headEntryOptions = { mode: "server" };
  head.push(appHead, headEntryOptions);
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(),
    noSSR: !!true   ,
    head,
    error: !!ssrError,
    nuxt: void 0,
    /* NuxtApp */
    payload: ssrError ? { error: ssrError } : {},
    _payloadReducers: {},
    islandContext
  };
  const _PAYLOAD_EXTRACTION = !ssrContext.noSSR && !islandContext;
  const payloadURL = _PAYLOAD_EXTRACTION ? joinURL(useRuntimeConfig().app.baseURL, url, "_payload.json" ) : void 0;
  {
    ssrContext.payload.prerenderedAt = Date.now();
  }
  const renderer = await getSPARenderer() ;
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response2 = renderPayloadResponse(ssrContext);
    {
      await payloadCache.setItem(url, response2);
    }
    return response2;
  }
  if (_PAYLOAD_EXTRACTION) {
    appendResponseHeader(event, "x-nitro-prerender", joinURL(url, "_payload.json" ));
    await payloadCache.setItem(withoutTrailingSlash(url), renderPayloadResponse(ssrContext));
  }
  const inlinedStyles = Boolean(islandContext) ? await renderInlineStyles(ssrContext.modules ?? ssrContext._registeredComponents ?? []) : [];
  const NO_SCRIPTS = routeOptions.experimentalNoScripts;
  const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
  if (_PAYLOAD_EXTRACTION) {
    head.push({
      link: [
        { rel: "preload", as: "fetch", crossorigin: "anonymous", href: payloadURL } 
      ]
    }, headEntryOptions);
  }
  head.push({
    link: Object.values(styles).map(
      (resource) => ({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file) })
    ),
    style: inlinedStyles
  }, headEntryOptions);
  if (!NO_SCRIPTS) {
    head.push({
      link: getPreloadLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      link: getPrefetchLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      script: _PAYLOAD_EXTRACTION ? renderPayloadJsonScript({ id: "__NUXT_DATA__", ssrContext, data: splitPayload(ssrContext).initial, src: payloadURL })  : renderPayloadJsonScript({ id: "__NUXT_DATA__", ssrContext, data: ssrContext.payload }) 
    }, {
      ...headEntryOptions,
      // this should come before another end of body scripts
      tagPosition: "bodyClose",
      tagPriority: "high"
    });
  }
  if (!routeOptions.experimentalNoScripts) {
    head.push({
      script: Object.values(scripts).map((resource) => ({
        type: resource.module ? "module" : null,
        src: renderer.rendererContext.buildAssetsURL(resource.file),
        defer: resource.module ? null : true,
        crossorigin: ""
      }))
    }, headEntryOptions);
  }
  const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(head);
  const htmlContext = {
    island: Boolean(islandContext),
    htmlAttrs: [htmlAttrs],
    head: normalizeChunks([headTags, ssrContext.styles]),
    bodyAttrs: [bodyAttrs],
    bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
    body: [_rendered.html],
    bodyAppend: [bodyTags]
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: getResponseStatus(event),
    statusMessage: getResponseStatusText(event),
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
  return response;
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  return chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html>
<html ${joinAttrs(html.htmlAttrs)}>
<head>${joinTags(html.head)}</head>
<body ${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body>
</html>`;
}
async function renderInlineStyles(usedModules) {
  const styleMap = await getSSRStyles();
  const inlinedStyles = /* @__PURE__ */ new Set();
  for (const mod of usedModules) {
    if (mod in styleMap) {
      for (const style of await styleMap[mod]()) {
        inlinedStyles.add(style);
      }
    }
  }
  return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}
function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers) ,
    statusCode: getResponseStatus(ssrContext.event),
    statusMessage: getResponseStatusText(ssrContext.event),
    headers: {
      "content-type": "application/json;charset=utf-8" ,
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadJsonScript(opts) {
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  const payload = {
    type: "application/json",
    id: opts.id,
    innerHTML: contents,
    "data-ssr": !(true )
  };
  if (opts.src) {
    payload["data-src"] = opts.src;
  }
  return [
    payload,
    {
      innerHTML: `window.__NUXT__={};window.__NUXT__.config=${uneval(opts.ssrContext.config)}`
    }
  ];
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}

export { renderer as default };
//# sourceMappingURL=renderer.mjs.map
