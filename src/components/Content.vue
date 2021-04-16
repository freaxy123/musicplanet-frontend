<template lang="">
  <!-- Center -->
  <div class="flex flex-row flex-grow text-xl">
    <NavbarLeft />
    
    <!-- Main Content -->
    <div class="flex-grow p-10">
      <a class="font-bold text-3xl">Login</a>
      
      <!-- Line -->
      <div class="bg-black bg-opacity-10 h-0.5 rounded my-2"></div>

      <!-- Begin Content -->
        <LoginForm />
      <!-- End Content -->
    </div>
  </div>
</template>

<script>
import NavbarLeft from './NavbarLeft.vue'
import LoginForm from './LoginForm.vue'

export default {
  name: 'App',
  components: {
    NavbarLeft,
    LoginForm
  }
}
</script>

<style lang="">
    
</style>