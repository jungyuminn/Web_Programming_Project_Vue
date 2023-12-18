<script setup lang="ts">
import '@/assets/main.css'
import { HeaderMenu, HeaderTitle, HeaderIcon } from '@/components/home/header'
</script>

<template>
  <header class="wrapper">
    <div class="container">
      <HeaderMenu />
      <HeaderTitle />
      <HeaderIcon />
    </div>
  </header>
</template>

<style scoped>
.wrapper {
  height: 327px;

  @media only screen and (max-width: 600px) {
    height: auto;
  }
}
</style>
