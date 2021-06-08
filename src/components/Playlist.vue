<template lang="">
    <div>
        {{playlist.name}}
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
import PlaylistService from "../services/PlaylistService";

export default {
    data(){
      return{
        id: "",
        playlist: {
            id: "",
            name: "",
            songs: []
        },
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
    }
}
</script>

<style lang="">
    
</style>