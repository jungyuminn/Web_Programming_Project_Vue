<script setup lang="ts">
import '@/assets/block-frame.css'
import BlockFrame from '@/components/home/contents/frame/BlockFrame.vue'
</script>

<template>
  <article class="block-wrapper">
    <BlockFrame col_title="Video" col_desc="해당 프로젝트 제작 참고 영상입니다.">
      <div class="video-wrapper">
        <iframe
          title="youtube"
          src="https://www.youtube.com/embed/dtBNnijA1QU?si=me1ANu9dTXCyntyu"
          frameBorder="{0}"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen="{true}"
        />
      </div>
    </BlockFrame>
  </article>
</template>

<style scoped>
.block-wrapper {
  border: 0;
}

.video-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 60%;

  & iframe {
    position: absolute;
    width: 100%;
    height: 100%;
  }
}
</style>
