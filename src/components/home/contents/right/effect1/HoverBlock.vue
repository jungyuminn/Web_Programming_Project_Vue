<script setup lang="ts">
import '@/assets/main.css'
</script>

<template>
  <div class="effect-component-wrapper-1">
    <figure class="image-style">
      <img
        src="https://github.com/YuMinGod/react/blob/main/public/image.png?raw=true"
        alt="image1"
      />
    </figure>
    <div class="back">
      <img
        src="https://mblogthumb-phinf.pstatic.net/MjAxNzEyMzFfNDMg/MDAxNTE0NjY1NzkyMTQ5.KDTeBZ1zPldTP7sCtx-1F3iYUieH3U2hevdB86jOLNUg.gZQmxAa9yvrN2eKt0wjZXYc3BIk354eQ27q15J3szngg.JPEG.sukkyung70/Screenshot_2017-02-27-01-17-56.jpg?type=w800"
        alt="image1"
        width="220"
        height="295"
      />
    </div>
  </div>
</template>

<style scoped>
.effect-component-wrapper-1 {
  position: relative;
  perspective: 600px;
  display: block;

  &:hover .front {
    transform: rotateY(180deg);
  }

  &:hover .back {
    transform: rotateY(0deg);
    z-index: 1;
  }
}

.front {
  transform-style: preserve-3d;
  transform: rotateY(0deg);
  transition: all 0.5s ease-in-out;
  backface-visibility: hidden;
}

.back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  transform-style: preserve-3d;
  color: #fff;
  background: #4038dc;
  transform: rotateY(-180deg);
  transition: all 0.5s ease-in-out;
  backface-visibility: hidden;

  & i {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 60px;
  }
}
</style>
