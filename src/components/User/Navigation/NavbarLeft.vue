<template lang="">
    <div class="bg-yellow-400 flex flex-col justify-between text-center w-1/6 py-5">
      <!-- Top part -->
      <div>

        <div class="flex flex-col space-y-2">
          
          <button class="hover:underline"
                v-for="(playlist, index) in playlists"
                :key="index"
                @click="$router.push({ name: 'Playlist', params: {id: playlist.id}})">
              {{playlist.name}}
          </button>

          <button class="hover:text-white transition duration-200 text-black py-2 rounded" @click="addPlaylistMenu = true">Add Playlist</button>
        </div>

        <!-- Line -->
        <div class="bg-black bg-opacity-10 h-0.5 mx-4 rounded my-2"></div>

        <div class="flex flex-col space-y-2">
          <router-link class="hover:underline" to="/addartist">Add Artist</router-link> 
          <router-link class="hover:underline" to="/addsong">Add Song</router-link>
        </div>

        <!-- Line -->
        <div class="bg-black bg-opacity-10 h-0.5 mx-4 rounded my-2"></div>

        <div class="flex flex-col space-y-2">
           <a class="italic">Logged in as {{username}}</a>
          <button @click="logout" class="flex flex-grow hover:underline items-center self-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <a id="logoutbutton">Logout</a>
          </button>
        </div>

      </div>
         
      <!-- Bottom part -->
      <div>
        <a>Settings</a>
      </div>
    </div>


    <!-- Add Playlist -->
    <transition name="fade">
      <div class="flex h-full w-full bg-black bg-opacity-50 absolute inset-0 items-center justify-center" v-if="addPlaylistMenu" >
        <div class="mx-auto w-1/2 h-1/2">
          
          <div class="bg-yellow-400 font-bold rounded-lg border shadow-lg p-4">
            <div class="flex flex-col place-items-center">

              <button class="flex w-full justify-center items-center">
                <a class="text-center pb-4 text-2xl">Add Playlist</a>
                <svg xmlns="http://www.w3.org/2000/svg" class="relative h-6 w-6 inset-1/3 hover:text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor" @click="addPlaylistMenu = false">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div class="flex flex-col w-1/2"> 
                <a class="text-sm p-1">Playlist name:</a>
                <input class="bg-gray-100 shadow appearance-none border rounded py-2 px-3 text-grey-darker" type="text" placeholder="Example: My Favorite Songs" v-model="playlist.name">
                <div class="text-center pt-4">
                  <button @click="addPlaylist" class="bg-black text-white font-semibold text-lg hover:underline w-1/2 text-center rounded p-1">Create Playlist</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </transition>
</template>

<script>
import Authorization from '../../../services/Authorization';
import PlaylistService from "../../../services/PlaylistService";

export default {
  props: ['refreshPlaylistsTrigger'],
  data(){
    return{
      username: "",
      addPlaylistMenu: false,
      playlist: {
        name: "",
        username: ""
      },
      playlists: []
    }
  },
  watch: { 
    refreshPlaylistsTrigger: function(newVal, oldVal) {
      console.log("TRIGGER");
      this.retrievePlaylists();
    }
  } ,  
  mounted(){
    this.getUsername();
    this.retrievePlaylists();
  },
  methods: {
    logout () {
      Authorization.logout();
      //this.$router.push('/login');
      window.location.href = "/login";
    },
    addPlaylist(){
      let self = this;
      this.playlist.username = this.username;
      PlaylistService.create(this.playlist)
        .then(response => {
            console.log(response.data);
            console.log('The playlist was created successfully!');
            self.addPlaylistMenu = false;
        })
        .catch(e => {
            console.log(e);
            console.log("Playlist could not be created, please check the fields");
        });
    },
    retrievePlaylists(){
      PlaylistService.getfromuser(this.username)
        .then(response => {
            this.playlists = response.data;
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
            console.log("Playlists could not be retrieved");
        });
        console.log("playlists");
        console.log(this.playlists);
    },
    getUsername(){
      this.username = this.parseJwt(localStorage.getItem("user")).sub;
      //console.log(this.parseJwt(localStorage.getItem("user")));
    },
    parseJwt (token) {
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      return JSON.parse(jsonPayload);
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
}
</style>