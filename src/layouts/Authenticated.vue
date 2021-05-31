<template>
    <Navbar />

      <!-- Center -->
    <div class="flex flex-row flex-grow text-xl h-screen pb-14">
        <NavbarLeft />
        
        <!-- Main Content -->
        <div class="flex-grow p-10">
        <a class="font-bold text-3xl">Testing</a>
        
        <!-- Line -->
        <div class="bg-black bg-opacity-10 h-0.5 rounded my-2"></div>

        <!-- Begin Content -->
        <button @click="test">test</button><br>
        <router-view></router-view>
        <!-- End Content -->
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import NavbarLeft from '../components/NavbarLeft.vue'
import axios from 'axios';

export default {
    components: {Navbar, NavbarLeft},
    methods: {
        test () {
        let token = JSON.parse(localStorage.getItem('user')).jwt;
        axios.get('http://localhost:8080/test', {
            headers: {            
            'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'authorization': 'Bearer ' + token,
            }
        })
        .then((res) => {
            console.log(res.data)
        })
        .catch((error) => {
            console.error(error)
        })
        },
    }
}
</script>

<style>
    
</style>