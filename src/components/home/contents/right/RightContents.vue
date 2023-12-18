<script setup lang="ts">
import '@/assets/ir.css'
import { Effect1, Effect2, Effect3 } from './'
</script>

<template>
  <section class="component-wrapper">
    <h3><span class="su">프로젝트 오른쪽 컨텐츠</span></h3>
    <Effect1 />
    <Effect2 />
    <Effect3 />
  </section>
</template>

<style scoped>
.component-wrapper {
  width: 250px;
  position: absolute;
  top: 0;
  right: 0;

  @media only screen and (max-width: 960px) {
    position: static;
    width: 100%;
    border-top: 1px solid #dbdbdb;
    display: flex;
  }
}
</style>
