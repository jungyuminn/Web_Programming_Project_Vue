<script setup lang="ts">
import { useBaseStore } from '@/stores/base'
import { computed } from 'vue'
import '@/assets/ir.css'

const baseStore = useBaseStore()
const btnIcon = computed(() => (baseStore.visibleMenu ? 'fa-angle-up' : 'fa-angle-down'))

const onBtn = (e: MouseEvent) => {
  e.preventDefault()
  baseStore.setVisibleMenu(!baseStore.visibleMenu)
}
</script>

<template>
  <div class="component-wrapper">
    <h2>Web Programming Portfolio</h2>
    <a href="#" @click="onBtn">
      <i :class="`fa ${btnIcon}`" />
      <span class="su">전체메뉴 보기</span>
    </a>
  </div>
</template>

<style scoped>
.component-wrapper {
  text-align: center;
  position: relative;

  & h2 {
    font-family: 'Abel', sans-serif;
    font-size: 39px;
    color: #0093bd;
    padding: 5px 0;
  }

  & a {
    position: absolute;
    right: 0;
    top: 5px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    background: #3192bf;
    color: #fff;
    font-size: 35px;
    border-radius: 50%;
    transition: all 0.3s ease;

    &:hover {
      box-shadow:
        0 0 0 3px rgba(71, 154, 191, 0.9) inset,
        0 0 0 100px rgba(0, 0, 0, 0.1) inset;
    }
  }

  @media only screen and (max-width: 1220px) {
    & a {
      right: 10px;
    }
  }

  @media only screen and (max-width: 600px) {
    & a {
      display: none;
    }
  }
}
</style>
