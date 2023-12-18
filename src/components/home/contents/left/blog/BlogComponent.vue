<script setup lang="ts">
import '@/assets/block-frame.css'
import BlockFrame from '@/components/home/contents/frame/BlockFrame.vue'
import ImageBlock1 from './ImageBlock1.vue'
import ImageBlock2 from './ImageBlock2.vue'
</script>

<template>
  <article class="block-wrapper">
    <BlockFrame col_title="Contact" col_desc="">
      <ImageBlock1 />
    </BlockFrame>
  </article>
</template>

<style scoped>
.block-wrapper {
  border: 0;
}
</style>
