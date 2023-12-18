<script setup lang="ts">
import { ref } from 'vue'
import LightBoxs from './LightBoxs.vue'

const images = [
  {
    src: 'https://github.com/YuMinGod/react/blob/main/yt_button.png?raw=true',
    effect: 'YT Downloader'
  },
  {
    src: 'https://github.com/YuMinGod/react/blob/main/python.png?raw=true',
    effect: 'Login Tool'
  },
  {
    src: 'https://github.com/YuMinGod/images_repos/blob/main/2911230.png?raw=true',
    effect: 'Text Editor'
  },
  {
    src: 'https://raw.githubusercontent.com/YuMinGod/react/dcea666c5917a5d3e44aa7af4f203d393a64a428/penguin-removebg-preview.png',
    effect: 'Penguin Game'
  },
  {
    src: 'https://github.com/YuMinGod/react/blob/main/1200px-2-Dice-Icon.svg.png?raw=true',
    effect: 'Dice Game'
  }
]

const idx = ref(0)
const visible = ref(false)
</script>

<template>
  <div class="filter-component-wrapper">
    <div v-for="(image, i) in images" :key="i" class="box">
      <img
        :src="image.src"
        :alt="`img${i}`"
        @click="
          () => {
            idx = i
            visible = true
          }
        "
      />
      <em>{{ image.effect }}</em>
    </div>
    <LightBoxs
      :visible="visible"
      :setVisible="(value: boolean) => (visible = value)"
      :index="idx"
      :setIndex="(value: number) => (idx = value)"
    />
  </div>
</template>

<style scoped>
.filter-component-wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow: hidden;
}

.box {
  width: 18%;
  margin: 1%;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:hover em {
    bottom: 0;
  }

  &:nth-child(1):hover img {
    filter: brightness(50%);
  }

  &:nth-child(2):hover img {
    filter: brightness(50%);
  }

  &:nth-child(3):hover img {
    filter: brightness(50%);
  }

  &:nth-child(4):hover img {
    filter: brightness(50%);
  }

  &:nth-child(5):hover img {
    filter: brightness(50%);
  }

  & img {
    width: 100%;
    display: block;
  }

  & em {
    position: absolute;
    left: 0;
    bottom: -30px;
    width: 100%;
    text-align: center;
    background: rgba(0, 0, 0, 0.57);
    color: #fff;
    transition: all 0.3s ease;
    text-transform: capitalize;
  }

  @media only screen and (max-width: 1220px) {
    width: 23%;

    &:nth-child(5n) {
      display: none;
    }
  }

  @media only screen and (max-width: 1024px) {
    width: 31%;

    &:nth-child(5) {
      display: block;
    }
  }

  @media only screen and (max-width: 600px) {
    width: 48%;

    &:nth-child(5n) {
      display: none;
    }
  }
}
</style>
