<script setup lang="ts">
import '@/assets/ir.css'
import { Slick, Filter, VideoBlock } from './'
</script>

<template>
  <section class="component-wrapper">
    <h3><span class="su">프로젝트 가운데 컨텐츠</span></h3>
    <Slick />
    <Filter />
    <VideoBlock />
  </section>
</template>

<style scoped>
.component-wrapper {
  min-height: 1350px;
  overflow: hidden;
  margin-right: 250px;
  border-right: 1px solid #dbdbdb;
  border-left: 1px solid #dbdbdb;

  @media only screen and (max-width: 960px) {
    margin-right: 0;
    border-right: 0;
  }

  @media only screen and (max-width: 768px) {
    border-left: 0;
  }
}
</style>
