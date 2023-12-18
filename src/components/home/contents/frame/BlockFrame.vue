<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  col_title: {
    type: String,
    required: true
  },
  col_desc: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h4>{{ col_title }}</h4>
  <p>{{ col_desc }}</p>
  <slot />
</template>

<style scoped>
.component-wrapper {
  text-align: right;

  & a {
    color: #fff;
    padding: 8px 0 6px 10px;
    display: inline-block;
    transition: color 0.3s ease;
    font-family: 'Abel', sans-serif;

    &:hover {
      color: #ccc;
    }

    @media only screen and (max-width: 1220px) {
      padding-right: 15px;
    }
  }
}
</style>
