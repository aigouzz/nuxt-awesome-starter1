
import { updateAppConfig } from '#app'
import { defuFn } from '/Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/node_modules/.pnpm/registry.npmmirror.com+defu@6.1.2/node_modules/defu/dist/defu.mjs'

const inlineConfig = {}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}

import cfg0 from "/Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/app/app.config.ts"
import cfg1 from "/Users/aigouzz/Documents/nuxt-awesome/nuxt-awesome-starter1/app.config.ts"

export default /* #__PURE__ */ defuFn(cfg0, cfg1, inlineConfig)
