<script setup lang="ts">
import '@/assets/block-frame.css'
import BlockFrame from '@/components/home/contents/frame/BlockFrame.vue'
import MenuList from './MenuList.vue'
</script>

<template>
  <article class="block-wrapper">
    <BlockFrame col_title="Moto" col_desc="다음과 같은 비전을 가지고 있습니다.">
      <MenuList />
    </BlockFrame>
  </article>
</template>

<style scoped>
.block-wrapper {
  padding: 15px;

  @media only screen and (max-width: 600px) {
    padding: 0;
    border-bottom: 0;

    & h4 {
      display: none;
    }

    & p {
      display: none;
    }
  }
}
</style>
