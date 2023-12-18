<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
</script>

<template>
  <div class="slick-component-wrapper">
    <carousel>
      <slide key="1">
        <figure>
          <img
            src="https://github.com/YuMinGod/react/blob/main/public/asc.PNG?raw=true"
            alt="image1"
          />
          <figcaption>
            <em>discord_score_bot.py</em>
            <span>참가자들의 점수 집계를 도와주는 디스코드 전용 봇입니다.</span>
          </figcaption>
        </figure>
      </slide>
      <slide key="2">
        <figure>
          <img
            src="https://github.com/YuMinGod/react/blob/main/public/Bazzi.gif?raw=true"
            alt="image2"
          />
          <figcaption>
            <em>Simple_Char_Move.py</em>
            <span>원하는 사진을 방향키로 움직일 수 있는 프로그램입니다.</span>
          </figcaption>
        </figure>
      </slide>
      <slide key="3">
        <figure>
          <img
            src="https://github.com/YuMinGod/react/blob/main/public/keylogger.png?raw=true"
            alt="image3"
          />
          <figcaption>
            <em>Key_logger.py</em>
            <span>Python을 이용한 Keylogger 프로그램입니다.</span>
          </figcaption>
        </figure>
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<style scoped>
.slick-component-wrapper {
  & .carousel__slide--active {
    & figcaption em,
    span {
      opacity: 1;
      transform: translateX(0);
    }
  }

  & figure {
    position: relative;

    & img {
      width: 100%;
      height: 333px;
    }
  }

  & figcaption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    font-size: 18px;

    & em {
      display: block;
      font-weight: bold;
      font-size: 28px;
      text-transform: uppercase;
      font-family: 'Abel', sans-serif;
      opacity: 0;
      transition: all 0.84s ease;
      transform: translateX(50px);
    }

    & span {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      opacity: 0;
      transition: all 0.84s 0.2s ease;
      transform: translateX(50px);
    }
  }

  @media only screen and (max-width: 768px) {
    & figcaption {
      padding: 10px;

      & em {
        font-size: 18px;
      }

      & span {
        font-size: 14px;
      }
    }

    & figure {
      & img {
        height: 300px;
      }
    }
  }
}
</style>
