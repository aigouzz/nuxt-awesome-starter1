<script lang="ts" setup>
const { awesome } = useAppConfig()
definePageMeta({ layout: 'page' })
let keyword = '这是keyword'
setTimeout(() => {
  keyword = '异步的keyword'
})
useHead({
  titleTemplate: '',
  title: '我的页面',
  meta: [
    {
      name: 'description',
      content: '描述，我的描述',
    },
    {
      name: 'keyword',
      content: keyword,
    },
  ],
})
</script>

<template>
  <LayoutPageWrapper>
    <div class="index-my">
      <div class="index_mt">我的页面</div>
    </div>
  </LayoutPageWrapper>
</template>
