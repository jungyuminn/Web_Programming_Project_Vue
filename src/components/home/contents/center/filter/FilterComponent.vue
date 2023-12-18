<script setup lang="ts">
import '@/assets/block-frame.css'
import BlockFrame from '@/components/home/contents/frame/BlockFrame.vue'
import Square from './SquareComponent.vue'
</script>

<template>
  <article class="block-wrapper">
    <BlockFrame
      col_title="Development Status"
      col_desc="현재 개발중인 프로젝트 목록입니다. 개발 현황은 GitHub에서 확인할 수 있습니다."
    >
      <Square />
    </BlockFrame>
  </article>
</template>
