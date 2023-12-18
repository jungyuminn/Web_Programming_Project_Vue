<script setup lang="ts">
import '@/assets/main.css'
import '@/assets/ir.css'
import { MenuList } from '@/components/home/menu'
</script>

<template>
  <nav class="wrapper">
    <div class="container">
      <h2><span class="su">전체 메뉴</span></h2>
      <MenuList />
    </div>
  </nav>
</template>

<style scoped>
.wrapper {
  background-color: #f6fdff;
}
</style>
