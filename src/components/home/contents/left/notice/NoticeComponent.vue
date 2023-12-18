<script setup lang="ts">
import '@/assets/block-frame.css'
import BlockFrame from '@/components/home/contents/frame/BlockFrame.vue'
import OneLineNotice from './OneLineNotice.vue'
import TwoLineNotice from './TwoLineNotice.vue'
</script>

<template>
  <article class="block-wrapper">
    <BlockFrame col_title="Stack" col_desc="Python, Java, Spring Boot, JavaScript, TypeScript">
      <OneLineNotice />
      <TwoLineNotice />
    </BlockFrame>
  </article>
</template>

<style scoped>
.block-wrapper {
  @media only screen and (max-width: 600px) {
    background: #fff;
  }
}
</style>
