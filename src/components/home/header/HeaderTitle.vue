<script setup lang="ts"></script>

<template>
  <div class="component-wrapper">
    <h1 class="title">PROFILE / Jung Yu Min</h1>
    <br />
    <a class="git-link" href="https://github.com/YuMinGod">github.com/YuMinGod</a>
  </div>
</template>

<style scoped>
.component-wrapper {
  text-align: center;
  text-transform: uppercase;
  margin-top: 55px;
  font-family: 'Abel', sans-serif;

  @media only screen and (max-width: 600px) {
    display: none;
  }
}

.title {
  font-size: 30px;
  color: #fff;
  background: #51b0dc;
  display: inline-block;
  padding: 5px 30px;
  letter-spacing: 2px;
  font-weight: 900;
  transition: box-shadow 0.4s ease-in-out;

  &:hover {
    box-shadow:
      inset -10em 0 0 0 #257fac,
      inset 10em 0 0 0 #257fac;
  }
}

.git-link {
  font-size: 16px;
  color: #fff;
  background: #4a9abf;
  display: inline-block;
  padding: 10px 20px;
  margin-top: -7px;
  transition: box-shadow 0.4s ease-in-out;

  &:hover {
    box-shadow:
      inset 0 0 0 5px rgba(75, 154, 191, 0.9),
      inset 0 0 0 100px rgba(0, 0, 0, 0.1);
  }
}
</style>
