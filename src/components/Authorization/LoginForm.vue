<template lang="">
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">

        <div class="m-4 space-y-4">
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username" v-model="user.username">

            <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="Password" v-model="user.password">
        </div>

        <!-- Buttons -->
        <div class="flex flex-col justify-between">
            <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker py-3" href="#">
                Forgot Password?
            </a>

            <button @click="login" class="bg-yellow-400 hover:text-black transition duration-200 text-white font-bold py-2 px-4 rounded" type="button">
                Sign In
            </button>

        </div>
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
        console.log(Authorization.login(this.user));
      },
    }
}
</script>

<style lang="">
    
</style>