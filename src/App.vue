<template>
    <NavbarTop />
    <div class="fixed h-full w-full">
      <router-view/>
    </div>
</template>

<script setup>
import NavbarTop from './components/NavbarTop.vue'
import Content from './components/Content.vue'



</script>

<style>
</style>
