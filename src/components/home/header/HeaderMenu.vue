<script setup lang="ts"></script>

<template>
  <div class="component-wrapper">
    <a href="https://blog.naver.com/jungym0419">Blog</a>
    <a href="https://github.com/YuMinGod">Github</a>
    <a href="https://www.instagram.com/yu_min00/">Instagram</a>
  </div>
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
