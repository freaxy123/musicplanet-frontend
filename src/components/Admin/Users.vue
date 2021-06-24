<template lang="">
    <div>
        <div class="flex flex-grow justify-around p-2 text-sm mr-40">
            <a>Username/Email</a>
            <a>Roles</a>
        </div>

        <div  class="flex hover:bg-gray-100 border-b-2 p-2 items-center text-center"
                v-for="(user, index) in users"
                :key="index"
                @click="selectedUser = user">
                
                <div class="flex flex-grow  justify-around">
                    <div class="w-1/2">
                        <a class="">{{ user.username }}/{{ user.email}}</a>
                    </div>

                    <div class="flex place-content-center w-1/2">
                        <div v-for="(role, index) in user.roles"
                            :key="index">
                            <a> {{ role.name }}/</a>
                        </div>
                    </div>
                </div>

                <button @click="showMenu = !showMenu; retrieveRoles()" class="relative right-2 bg-red-600 p-2 rounded hover:text-white">
                    Change Roles
                </button>   
        </div>
    </div>

    <transition name="fade">
    <div class="flex h-full w-full bg-black bg-opacity-50 absolute inset-0 items-center justify-center" v-if="showMenu" @click="showMenu = false;">
          <div class="mx-auto w-1/2 h-1/2">
            <div class="bg-white rounded-lg border shadow-lg p-2 text-center">
              
              <div class="p-4 border-2 border-black">
                <div class="flex flex-grow justify-around p-2 text-sm mr-5">
                  <a>Username/Email</a>
                  <a>Roles</a>
                </div>
                <div  class="flex p-2 items-center text-center">
                  <div class="flex flex-grow justify-around">
                    <div class="w-1/2">
                      <a class="">{{ selectedUser.username }}/{{ selectedUser.email}}</a>
                    </div>

                    <div class="w-1/2">
                      <div  v-for="(role, index) in selectedUser.roles"
                            :key="index">
                          <a>{{ role.name }}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            <div class="flex w-full justify-around">
                <div class="w-1/2 p-2">
                    <div class="flex flex-col justify-items-center content-center text-center p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                        <a class="font-bold">Remove Role: </a>
                    </div>
                    <button  class="flex hover:bg-gray-100 border-b-2 p-2 items-center text-center w-full"
                            v-for="(role, index) in selectedUser.roles"
                            :key="index"
                            @click="RemoveUserRole(role)">
                        {{role.name}}
                    </button>
                </div>

                <div class="w-1/2 p-2">
                    <div class="flex flex-col justify-items-center content-center text-center p-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                        <a class="font-bold">Give Role: </a>
                    </div>
                    <button  class="flex hover:bg-gray-100 border-b-2 p-2 items-center text-center w-full"
                            v-for="(role, index) in roles"
                            :key="index"
                            @click="GiveUserRole(role)">
                        {{role.name}}
                    </button>
                </div>
            </div>
        </div>
        </div>
    </div>
  </transition>
</template>

<script>
import UserService from "../../services/UserService";

export default {
    data(){
        return{
            users: [],
            showMenu: false,
            roles: [],
            selectedUser: null
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
        },
        retrieveRoles(){
            UserService.getAllRoles()
                .then(response => {
                    this.roles = response.data;
                })
                .catch(e => {
                    console.log(e);
                    console.log("Roles could not be retrieved");
                });
                console.log(this.roles);
        },
        GiveUserRole(role){
            this.selectedUser.roles.push(role);  
            
            UserService.update(this.selectedUser.id, this.selectedUser)
                .then(response => {
                    this.getUsers();
                })
                .catch(e => {
                    console.log(e);
                    console.log("User could not be updated");
                });     
        },
        RemoveUserRole(role){  
            let index = this.selectedUser.roles.indexOf(role);
            if (index > -1) {
                this.selectedUser.roles.splice(index, 1);
            }
            console.log(this.selectedUser.roles);
            
            UserService.update(this.selectedUser.id, this.selectedUser)
                .then(response => {
                    this.getUsers();
                })
                .catch(e => {
                    console.log(e);
                    console.log("User could not be updated");
                });     
                
        },
    }
}
</script>

<style lang="">
    
</style>