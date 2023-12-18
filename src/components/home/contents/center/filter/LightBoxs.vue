<script setup lang="ts">
import { defineProps } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'

const props = defineProps({
  visible: {
    type: Boolean,
    required: true
  },
  setVisible: {
    type: Function,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  setIndex: {
    type: Function,
    required: true
  }
})

const images: string[] = [
  'https://github.com/YuMinGod/react/blob/main/123.PNG?raw=true',
  'https://user-images.githubusercontent.com/125354965/284475054-5dbfcae9-c512-4f68-9d21-c9d1c43e8c51.png',
  'https://github.com/YuMinGod/images_repos/blob/main/python%20editor.gif?raw=true',
  'https://github.com/YuMinGod/images_repos/blob/main/2419BE505626FF412E.png?raw=true',
  'https://github.com/YuMinGod/Dice_Game/blob/main/images/Dice_Game.gif?raw=true'
]

const movePrev = () => {
  props.setIndex(idx.value + images.length - 1) % images.length
}

const moveNext = () => {
  props.setIndex(idx.value + 1) % images.length
}

const closeLightbox = () => {
  props.setVisible(false)
}
</script>

<template>
  <div>
    <vue-easy-lightbox
      :visible="props.visible"
      :imgs="images"
      :index="props.index"
      @hide="closeLightbox"
      @prev="movePrev"
      @next="moveNext"
    />
  </div>
</template>
