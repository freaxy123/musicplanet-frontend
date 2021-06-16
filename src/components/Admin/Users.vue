<template lang="">
    <div>
        <div class="flex flex-grow justify-around p-2 text-sm mr-10">
            <a>Username</a>
            <a>Roles</a>
        </div>

        <div  class="flex hover:bg-gray-100 border-b-2 p-2 items-center text-center"
                v-for="(user, index) in users"
                :key="index"
                @click="">
                
                <div class="flex flex-grow  justify-around">
                    <div class="w-1/2">
                        <a class="">{{ user.username }}</a>
                    </div>

                    <div class="flex place-content-center w-1/2">
                        <div v-for="(role, index) in user.roles"
                            :key="index">
                            <a> {{ role.name }}/</a>
                        </div>
                    </div>
                </div>

                <button @click="" class="relative right-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                </button>   
        </div>
    </div>
</template>

<script>
import UserService from "../../services/UserService";

export default {
    data(){
        return{
            users: [],
        }
    },
    mounted(){
        this.getUsers();
    },
    methods: {
        getUsers(){
            UserService.getAll()
            .then(response => {
              this.users = response.data;
            })
            .catch(e => {
              console.log(e);
            });
        }
    },
}
</script>

<style lang="">
    
</style>