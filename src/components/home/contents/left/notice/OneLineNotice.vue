<script setup lang="ts">
import { default as More } from './MoreComponent.vue'
</script>

<template>
  <div class="notice-component-wrapper-1">
    <h5>Education</h5>
    <ul>
      <li>Gachon University (2021 ~)<br />Computer Engineering</li>
    </ul>
    <More />
  </div>
</template>

<style scoped>
.notice-component-wrapper-1 {
  position: relative;

  & h5 {
    font-size: 14px;
    color: #2f7fa6;
    padding-bottom: 5px;
  }

  & li {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    padding-left: 8px;

    &:before {
      content: '';
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background: #449ce2;
      position: absolute;
      left: 0;
      top: 8px;
    }
  }
}
</style>
