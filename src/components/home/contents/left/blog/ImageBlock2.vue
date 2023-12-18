<script setup lang="ts"></script>

<template>
  <div class="blog-component-wrapper-2">
    <div class="img-retina" />
  </div>
</template>

<style scoped>
.blog-component-wrapper-2 {
  margin-top: 15px;

  & p {
    padding-top: 5px;
  }
}

.img-retina {
  & h5 {
    color: #fff;
    text-align: center;
    padding: 30px 30px;
    text-transform: uppercase;
  }

  height: 220px;
  background: no-repeat center / cover
    url('https://user-images.githubusercontent.com/41350459/81813031-ea178e00-9561-11ea-942b-7a1339af213d.jpg');

  @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 2dppx) {
    background-image: url('https://user-images.githubusercontent.com/41350459/81813038-ec79e800-9561-11ea-8b49-1a01dd585468.jpg');
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 3),
    only screen and (min-device-pixel-ratio: 3),
    only screen and (min-resolution: 3dppx) {
    background-image: url('https://user-images.githubusercontent.com/41350459/81813048-eedc4200-9561-11ea-8a68-88a43a135312.jpg');
  }
}
</style>
