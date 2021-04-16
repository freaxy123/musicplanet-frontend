<template>
  <div class="flex flex-col min-h-screen">
    <NavbarTop />
    <Content />
  </div>
</template>

<script setup>
import NavbarTop from './components/NavbarTop.vue'
import Content from './components/Content.vue'



</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
