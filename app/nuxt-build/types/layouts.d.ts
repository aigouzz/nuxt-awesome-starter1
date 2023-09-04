import { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "page"
declare module "../../../node_modules/.pnpm/registry.npmmirror.com+nuxt@3.7.0_ziueobtllsm7736rb35a7imot4/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}