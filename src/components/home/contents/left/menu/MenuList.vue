<script setup lang="ts">
const menu: string[] = ['innovative', 'Creativity', 'Continuous', 'sustainability', 'Communication']
</script>

<template>
  <div class="menu-component-wrapper">
    <ul>
      <li v-for="val in menu" :key="val">
        <a href="#">{{ val }}<i className="fa fa-angle-double-right" aria-hidden="true" /></a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.menu-component-wrapper {
  & li {
    position: relative;
  }

  & li a {
    font-size: 16px;
    text-transform: uppercase;
    color: #878787;
    border-bottom: 1px solid #dbdbdb;
    padding: 10px;
    display: block;
    transition:
      box-shadow 0.34s ease,
      background 0.34s ease;

    &:hover {
      box-shadow: inset 180px 0 0 0 rgba(36, 130, 174, 0.7);
      color: #fff;
      background: rgba(36, 130, 174, 0.9);
    }
  }

  & li a i {
    position: absolute;
    right: 10px;
    top: 15px;
  }

  @media only screen and (max-width: 600px) {
    & ul {
      overflow: hidden;
    }

    & li {
      width: 33.3333%;
      float: left;
      text-align: center;
      border-right: 1px solid #dbdbdb;
      box-sizing: border-box;

      &:nth-child(3n) {
        border-right: 0;
      }

      &:nth-child(n + 4) a {
        border-bottom: 0;
      }
    }

    & li a {
      color: #fff;
      text-shadow: 0 0 5px rgba(0, 0, 0, 0.7);

      &:hover {
        box-shadow: 0;
        background: rgba(36, 130, 174, 0.3);
      }
    }

    & li a i {
      display: none;
    }
  }
}
</style>
