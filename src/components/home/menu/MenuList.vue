<script setup lang="ts">
import { useBaseStore } from '@/stores/base'

const list1: string[] = [
  'HTML 태그(Tag)',
  '블록 요소/인라인 요소',
  'DTD 선언',
  '언어 속성 설정',
  'HTML <title>',
  'HTML <meta>',
  '특수문자',
  '하이퍼 링크',
  'HTML <style>',
  'HTML <html>',
  'HTML <head>',
  'HTML <div>',
  'HTML <colgroup>',
  'HTML <caption>'
]

const list2: string[] = [
  'CSS 선택자',
  'CSS 단위',
  'CSS 색상',
  'CSS 선언 방법',
  '상대주소와 절대주소',
  'CSS float',
  '이미지 표현 방법',
  '이미지 스프라이트',
  'IR 효과',
  '이미지 최적화',
  'background-color',
  'border-style',
  'font-size',
  'text-align'
]

const list3: string[] = [
  '반응형사이트',
  '미디어쿼리',
  'CSS3',
  '웹 접근성 연구소',
  '네이버 널리',
  '다음 다룸',
  'Webstandard'
]

const baseStore = useBaseStore()
</script>

<template>
  <div :class="`component-wrapper ${baseStore.visibleMenu ? 'active' : ''}`">
    <div class="block">
      <h3 class="title">HTML Reference</h3>
      <ol class="list">
        <li v-for="tag in list1" :key="tag">
          <a href="#">{{ tag }}</a>
        </li>
      </ol>
    </div>
    <div class="block">
      <h3 class="title">CSS Reference</h3>
      <ol class="list">
        <li v-for="tag in list2" :key="tag">
          <a href="#">{{ tag }}</a>
        </li>
      </ol>
    </div>
    <div class="block">
      <h3 class="title">Responsive</h3>
      <ol class="list">
        <li v-for="tag in list3" :key="tag">
          <a href="#">{{ tag }}</a>
        </li>
      </ol>
    </div>
  </div>
</template>

<style scoped>
.component-wrapper {
  max-height: 0;
  padding: 0;
  transition: all 0.5s ease;
  overflow: hidden;

  &.active {
    max-height: 200px;
    padding: 30px 10px;
  }

  @media only screen and (max-width: 960px) {
    max-height: 0;

    &.active {
      max-height: 560px;
    }
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
}

.block {
  float: left;
  width: 40%;

  &:last-child {
    width: 20%;

    & ol li {
      width: 100%;
    }
  }

  @media only screen and (max-width: 960px) {
    float: none;
    width: 100%;

    &:last-child {
      width: 100%;

      & ol li {
        width: 33.333333%;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    &:last-child {
      & ol li {
        width: 50%;
      }
    }
  }
}

.title {
  font-size: 18px;
  color: #25a2d0;
  font-weight: bold;
  margin-bottom: 4px;
}

.list {
  overflow: hidden;

  & li {
    float: left;
    width: 50%;
    position: relative;
    padding-left: 8px;
    box-sizing: border-box;

    &:before {
      content: '';
      width: 3px;
      height: 3px;
      background-color: #25a2d0;
      border-radius: 50%;
      position: absolute;
      left: 0;
      top: 8px;
    }

    & a {
      position: relative;

      &:after {
        content: '';
        display: inline-block;
        width: 0;
        height: 1px;
        background: #25aad0;
        transition: all 0.2s ease-in-out;
        position: absolute;
        bottom: 0;
        left: 0;
      }

      &:hover {
        color: #25a2d0;

        &:after {
          width: 100%;
        }
      }
    }
  }

  @media only screen and (max-width: 960px) {
    margin-bottom: 10px;

    & li {
      width: 33.333333%;
    }
  }

  @media only screen and (max-width: 600px) {
    & li {
      width: 50%;
    }
  }
}
</style>
