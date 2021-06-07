<template lang="">
<div class="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
  <div class="relative z-30 p-5 text-2xl text-white">
    
    <body class="font-sans h-full text-gray-700">

    <div class="container mx-auto p-8 flex">
        <div class="max-w-md w-full mx-auto">
            <div class="bg-gray-400 bg-opacity-50 rounded-lg overflow-hidden shadow-2xl">
                <div class="p-8">
                    <h1 class="text-4xl text-center mb-12 text-black font-bold">Musicworld</h1>
                    <form class="flex flex-col" v-on:submit.prevent="login">

                        <div class="m-4 space-y-4">
                            <input class="bg-gray-100 shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username" v-model="user.username">
                            <input class="bg-gray-100 shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="Password" v-model="user.password">
                        </div>

                        <div class="flex flex-col justify-between">
                            <a class="inline-block align-baseline font-bold text-sm text-black hover:underline py-3" href="#">
                                Forgot Password?
                            </a>

                            <button class="bg-yellow-400 hover:text-white transition duration-200 text-black font-bold py-2 px-4 rounded" type="submit">
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
                
                <div class="flex justify-between p-8 text-sm border-t">
                    <button @click="$router.push('/register')" class="text-black font-semibold text-lg hover:underline">Create account</button>

                    <!-- <a href="#" class="text-black font-semibold text-lg hover:underline">Forgot password?</a> -->
                </div>
            </div>

        </div>
    </div>
    </body>



  </div>
  <video autoplay loop muted class="absolute z-10 w-auto min-w-full min-h-full max-w-none">
    <source src="../assets/background.mp4" type="video/mp4" />Your browser does not support the video tag.
  </video>
</div>
    



</template>

<script>
import Authorization from '../services/Authorization';

export default {
    data () {
      return {
          user: [
            {username: ""},
            {password: ""}
          ],
      }
    },    
    methods: {
      login () {
        Authorization.login(this.user).then(
          user => {
            console.log("User succesfully logged in");
            this.$router.push('/');
          },
          error => {
            alert("Invalid credentails");
          });
      },
    }
}
</script>

<style lang="">
    
</style>