<template lang="">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col" v-on:submit.prevent="register">
        <div class="m-4 space-y-4">
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username" v-model="user.username">

            <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="email" type="text" placeholder="Email" v-model="user.email">

            <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="Password" v-model="user.password">
        </div>

        <div class="flex flex-col justify-between">
            <button class="bg-yellow-400 hover:text-black transition duration-200 text-white font-bold py-2 px-4 rounded" type="submit">
                Register
            </button>
        </div>
    </form>
</template>

<script>
import Authorization from '../services/Authorization';

export default {
    data () {
      return {
          user: [
            {username: ""},
            {email: ""},
            {password: ""}
          ],
      }
    },    
    methods: {
      register () {
        Authorization.register(this.user).then(
          user => {
            console.log("User succesfully registrered");
            this.$router.push('/login');
          },
          error => {
            alert("Invalid input");
          });
      },
    }
}
</script>

<style lang="">
    
</style>