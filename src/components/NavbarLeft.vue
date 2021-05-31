<template lang="">
    <div class="bg-yellow-400 flex flex-col justify-between text-center w-1/6 py-5">
      <!-- Top part -->
      <div>
        <a>Playlist</a>
        
        <!-- Line -->
        <div class="bg-black bg-opacity-10 h-0.5 mx-4 rounded my-2"></div>
        
        <button @click="logout">Logout</button>
      </div>
         
      <!-- Bottom part -->
      <div>
        <a>Settings</a>
      </div>
    </div>
</template>

<script>
import Authorization from '../services/Authorization';

export default {
  methods: {
      logout () {
        Authorization.logout();
        this.$router.push('/login');
      },
    }
    
}
</script>

<style lang="">
    
</style>