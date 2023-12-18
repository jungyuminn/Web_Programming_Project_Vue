<script setup lang="ts">
import '@/assets/main.css'
</script>

<template>
  <figure class="image-style">
    <img
      src="https://github.com/YuMinGod/react/blob/main/public/%EC%A0%9C%EB%AA%A9%20%EC%97%86%EB%8A%94%20%EB%94%94%EC%9E%90%EC%9D%B8.png?raw=true"
      alt="image3"
    />
    <figcaption>
      <h3><em>TOES</em>+<em>HSK</em></h3>
    </figcaption>
  </figure>
</template>

<style scoped>
.image-style {
  position: relative;
  background: #000;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover img {
    opacity: 0.4;
  }

  & figcaption {
    position: absolute;
    left: 50%;
    top: 50%;
    color: #fff;
    text-align: center;
    opacity: 0;
    text-transform: uppercase;
    transition: all 0.3s ease;
    transform: translate(350%, -50%) rotate(180deg);

    & h3 {
      font-size: 16px;
    }

    & em {
      display: block;
      font-weight: bold;
    }

    &:after {
      content: '';
      width: 100px;
      height: 100px;
      background: #000;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      top: 50%;
      z-index: -1;
      transform: translate(-50%, -50%);
    }
  }

  &:hover figcaption {
    transform: translate(-50%, -50%) rotate(0deg);
    opacity: 1;
  }
}
</style>
