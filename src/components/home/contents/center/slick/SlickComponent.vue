<script setup lang="ts">
import '@/assets/block-frame.css'
import BlockFrame from '@/components/home/contents/frame/BlockFrame.vue'
import ImageSlider from './ImageSlider.vue'
</script>

<template>
  <article class="block-wrapper">
    <BlockFrame
      col_title="Projects"
      col_desc="현재까지 완성한 프로젝트 목록입니다. 각 프로젝트는 GitHub에서 확인할 수 있습니다."
    >
      <ImageSlider />
    </BlockFrame>
  </article>
</template>

<style scoped>
.block-wrapper {
  @media only screen and (max-width: 768px) {
    border-top: 1px solid #dbdbdb;
  }
}
</style>
