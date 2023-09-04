<script lang="ts" setup>
const { awesome } = useAppConfig()
definePageMeta({ layout: 'page' })
useHead({ titleTemplate: '', title: awesome?.name || 'Nuxt 3 Awesome Starter' })
</script>

<template>
  <div class="index_all">
    <div><nuxt-link to="/post">goto post</nuxt-link></div>
    <div><nuxt-link to="/my">goto my page</nuxt-link></div>
  </div>
</template>
