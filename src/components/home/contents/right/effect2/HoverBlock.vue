<script setup lang="ts">
import '@/assets/main.css'
</script>

<template>
  <div class="effect-component-wrapper-2">
    <figure class="image-style front">
      <img
        src="https://github.com/YuMinGod/react/blob/main/public/Major%20(1).png?raw=true"
        alt="image2"
      />
      <figcaption>Major</figcaption>
    </figure>
    <figure class="image-style back">
      <img
        src="https://github.com/YuMinGod/react/blob/main/public/Non%20-%20Major.png?raw=true"
        alt="image2"
      />
      <figcaption>Non-Major</figcaption>
    </figure>
  </div>
</template>

<style scoped>
.effect-component-wrapper-2 {
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

  figcaption {
    width: 60%;
    color: #fff;
    font-size: 25px;
    font-family: 'Abel', sans-serif;
    font-weight: bold;
    background: rgba(0, 0, 0, 0.6);
    padding: 3px 10px;
  }
}

.front {
  transform-style: preserve-3d;
  transform: rotateY(0deg);
  transition: all 0.5s ease-in-out;
  backface-visibility: hidden;

  & figcaption {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) translateZ(100px);
    display: block;
    text-align: center;
  }
}

.back {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transform-style: preserve-3d;
  transform: rotateY(-180deg);
  transition: all 0.5s ease-in-out;
  backface-visibility: hidden;

  & figcaption {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) translateZ(100px);
    display: block;
    text-align: center;
  }
}
</style>
