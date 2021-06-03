<template>
    <Navbar />

      <!-- Center -->
    <div class="flex flex-row flex-grow text-xl h-screen pb-14">
        <NavbarLeft />
        
        <!-- Main Content -->
        <div class="flex-grow p-10">
        <a class="font-bold text-3xl">{{this.$route.name}}</a>
        
        <!-- Line -->
        <div class="bg-black bg-opacity-10 h-0.5 rounded my-2"></div>

        <!-- Begin Content -->
        <router-view></router-view>
        <!-- End Content -->
        
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navigation/Navbar.vue'
import NavbarLeft from '../components/Navigation/NavbarLeft.vue'
import axios from 'axios';
import http from "../http-common";

export default {
    components: {Navbar, NavbarLeft},
    methods: {
    }
}
</script>

<style>
    
</style>