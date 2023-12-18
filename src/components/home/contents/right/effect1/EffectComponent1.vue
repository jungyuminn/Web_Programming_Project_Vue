<script setup lang="ts">
import '@/assets/block-frame.css'
import BlockFrame from '@/components/home/contents/frame/BlockFrame.vue'
import HoverBlock from './HoverBlock.vue'
</script>

<template>
  <article class="block-wrapper">
    <BlockFrame col_title="Intro" col_desc="웹 개발자 정유민입니다.">
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
