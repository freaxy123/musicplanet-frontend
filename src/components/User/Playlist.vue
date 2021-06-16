<template lang="">
    <div>
        <div class="flex p-2 items-center place-content-center">
            <div v-if="!editName">
                <a class="text-3xl pr-4">{{playlist.name}}</a>
                <button class="hover:text-yellow-400" @click="editName = !editName">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                </button>
            </div>
            <div class="flex" v-if="editName">
                <input class="pr-4 bg-gray-100 shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Playlist Name" v-model="playlist.name">
                <button class="bg-black text-white hover:text-yellow-400 ml-6 px-4" @click="editPlaylist">Confirm</button>
            </div>
        </div>

            <div>
                <div class="flex flex-grow justify-around p-2 text-sm mr-5">
                <a>Title</a>
                <a>Artist</a>
                </div>

                <div  class="flex hover:bg-gray-100 border-b-2 p-2 items-center text-center"
                    v-for="(song, index) in playlist.songs"
                    :key="index">
                    
                    <div class="flex flex-grow  justify-around">
                        <div class="w-1/2">
                        <a class="">{{ song.title }}</a>
                        </div>

                        <div class="w-1/2">
                        <div  v-for="(artist, index) in song.artists"
                                :key="index">
                            <button class="hover:underline" @click="$router.push({ name: 'Artist', params: {id: artist.id}})">{{ artist.name }}</button>
                        </div>
                        </div>
                    </div>

                    <button @click="showMenu = !showMenu; retrievePlaylists()" class="relative right-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                    </button>   
                </div>
            </div>
    </div>
</template>

<script>
import PlaylistService from "../../services/PlaylistService";

export default {
    data(){
      return{
        id: "",
        playlist: {
            id: "",
            name: "",
            songs: []
        },
        editName: false
      }
    },
    created () {
        console.log(this.$route.params);
        console.log(this.$route.params.id);
        this.id = this.$route.params.id;
        this.getPlaylist();
    },
    methods: {
        getPlaylist(){
             PlaylistService.get(this.id)
                .then(response => {
                    this.playlist = response.data;
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
            console.log(this.playlist);
        },
        editPlaylist(){
            PlaylistService.update(this.playlist.id, this.playlist)
                .then(response => {
                    console.log(response.data);
                    this.editName = false;
                    this.getPlaylist();
                })
                .catch(e => {
                    console.log(e);
                    console.log("Playlists could not be retrieved");
                });
                this.$emit("refreshPlaylists");
        },
    }
}
</script>

<style lang="">
    
</style>