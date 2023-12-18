<script setup lang="ts">
import '@/assets/block-frame.css'
import BlockFrame from '@/components/home/contents/frame/BlockFrame.vue'
import HoverBlock from './HoverBlock.vue'
</script>

<template>
  <article class="block-wrapper">
    <BlockFrame col_title="Language" col_desc="해당 언어를 구사할 수 있습니다.">
      <HoverBlock />
    </BlockFrame>
  </article>
</template>

<style scoped>
.block-wrapper {
  border: 0;
}
</style>
