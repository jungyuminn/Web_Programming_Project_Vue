<script setup lang="ts">
import '@/assets/main.css'
import '@/assets/ir.css'
import { LeftContents, CenterContents, RightContents } from '@/components/home/contents'
</script>

<template>
  <main class="wrapper">
    <div class="container">
      <h2><span class="su">반응형 웹사이트 프로젝트</span></h2>
      <LeftContents />
      <CenterContents />
      <RightContents />
    </div>
  </main>
</template>

<style scoped>
.wrapper {
  .container {
    border-left: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;

    @media only screen and (max-width: 1220px) {
      border: 0;
    }
  }
}
</style>
