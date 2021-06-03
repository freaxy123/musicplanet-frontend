<template lang="">
  <!-- Top Navigation Bar --> 
  <div class="bg-gray-400 p-2 flex text-2xl ">
    <div class="flex items-center px-2 space-x-4">
      <img class="h-10" src="https://previews.123rf.com/images/koksikoks/koksikoks1610/koksikoks161000611/68155553-ball-of-the-notes-note-music-planet-vector.jpg">
      <a class="font-bold text-white" href="#">Music Planet</a>
    </div>
    
    <div class="flex justify-around flex-grow items-center">
      <router-link class="hover:text-yellow-400 transition duration-200" to="/">Home</router-link>
      <a class="hover:text-yellow-400 transition duration-200" href="#">Library</a>
      <a class="hover:text-yellow-400 transition duration-200" href="#">Search</a>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>


<style lang="">
    
</style>    