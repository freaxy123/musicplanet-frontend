<template>
    <div class="fixed h-full w-full">
      <transition name="fade">
        <router-view/>
      </transition>
    </div>
</template>

<script>



</script>

<style>
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
}
</style>
