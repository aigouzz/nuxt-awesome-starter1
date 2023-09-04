import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "../../../node_modules/.pnpm/registry.npmmirror.com+nuxt@3.7.0_ziueobtllsm7736rb35a7imot4/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}