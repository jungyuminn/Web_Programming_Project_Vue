<script setup lang="ts">
import '@/assets/main.css'
import FooterList from '@/containers/home/footer/HomeFooterList.vue'
</script>

<template>
  <footer class="wrapper">
    <div class="container">
      <FooterList />
    </div>
  </footer>
</template>

<style scoped>
.wrapper {
  border-top: 1px solid rgb(219, 219, 219);
}
</style>
