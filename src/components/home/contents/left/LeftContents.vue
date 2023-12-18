<script setup lang="ts">
import '@/assets/ir.css'
import { Menu, Notice, Blog } from './'
</script>

<template>
  <section class="component-wrapper">
    <h3><span class="su">프로젝트 왼쪽 컨텐츠</span></h3>
    <Menu />
    <Notice />
    <Blog />
  </section>
</template>

<style scoped>
.component-wrapper {
  float: left;
  width: 250px;

  @media only screen and (max-width: 768px) {
    float: none;
    width: 100%;
  }
}
</style>
