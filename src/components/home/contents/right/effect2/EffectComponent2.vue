<script setup lang="ts">
import '@/assets/block-frame.css'
import BlockFrame from '@/components/home/contents/frame/BlockFrame.vue'
import HoverBlock from './HoverBlock.vue'
</script>

<template>
  <article class="block-wrapper">
    <BlockFrame col_title="License" col_desc="해당 자격증을 보유하고 있습니다.">
      <HoverBlock />
    </BlockFrame>
  </article>
</template>

<style scoped>
.block-wrapper {
  @media only screen and (max-width: 960px) {
    border-right: 1px solid #dbdbdb;
  }
}
</style>
