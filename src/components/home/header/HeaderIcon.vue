<script setup lang="ts">
const onFacebook = (e: MouseEvent) => {
  e.preventDefault()

  window.open(
    'https://www.facebook.com/sharer/sharer.php?u=' +
      encodeURIComponent(document.URL) +
      '&t=' +
      encodeURIComponent(document.title),
    'facebooksharedialog',
    'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600'
  )
}

const onTwitter = (e: MouseEvent) => {
  e.preventDefault()

  window.open(
    'https://twitter.com/intent/tweet?text=[%EA%B3%B5%EC%9C%A0]%20' +
      encodeURIComponent(document.URL) +
      '%20-%20' +
      encodeURIComponent(document.title),
    'twittersharedialog',
    'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600'
  )
}
</script>

<template>
  <div class="component-wrapper">
    <ul>
      <li>
        <a class="icon" href="https://blog.naver.com/jungym0419"
          ><i className="fa fa-blog" aria-hidden="true" /><span>Blog</span></a
        >
      </li>
      <li>
        <a class="icon" href="https://github.com/YuMinGod"
          ><i className="fab fa-github" aria-hidden="true" /><span>Github</span></a
        >
      </li>
      <li>
        <a class="icon" href="#" @click="onFacebook"
          ><i className="fab fa-facebook-square" aria-hidden="true" /><span>Facebook</span></a
        >
      </li>
      <li>
        <a class="icon" href="#" @click="onTwitter"
          ><i className="fab fa-twitter" aria-hidden="true"></i><span>twitter</span></a
        >
      </li>
    </ul>
  </div>
</template>

<style scoped>
.component-wrapper {
  text-align: center;
  margin: 40px 0 45px 0;

  & ul li {
    display: inline;
    margin: 0 4px;
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
}

.icon {
  display: inline-block;
  background-color: #3192bf;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  color: #fff;
  font-size: 35px;
  line-height: 60px;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    box-shadow:
      0 0 0 3px rgba(75, 154, 191, 0.9) inset,
      0 0 0 100px rgba(0, 0, 0, 0.1) inset;
  }

  &:hover span {
    opacity: 1;
    top: -33px;
  }

  & span {
    position: absolute;
    left: 50%;
    top: -40px;
    transform: translate(-50%);
    font-size: 12px;
    line-height: 1.6;
    background: #3192bf;
    padding: 3px 9px;
    border-radius: 6px 0;
    opacity: 0;
    transition: all 0.3s ease;

    &:before {
      content: '';
      position: absolute;
      left: 50%;
      bottom: -5px;
      border-top: 5px solid #3192bf;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
    }
  }
}
</style>
