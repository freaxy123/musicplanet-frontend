<template lang="">
    <div>
        <div class="flex flex-grow place-content-center">
            <a class=" text-5xl p-2">{{artist.name}}</a>
        </div>


        <div class="flex justify-between items-center border-b-2 p-2 hover:bg-gray-100"
                    v-for="(song, index) in songs"
                    :key="index"
                >
                <a>{{ song.title }}</a>

                <button @click="showMenu = !showMenu">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
                </button>   
        </div>
    </div>
</template>

<script>
import ArtistService from "../../services/ArtistService";
import SongService from "../../services/SongService";

export default {
    data(){
      return{
        id: "",
        artist: {
            id: "",
            name: "",
        },
        songs: []
      }
    },
    created () {
        console.log(this.$route.params);
        console.log(this.$route.params.id);
        this.id = this.$route.params.id;
        this.getArtist();
        this.retrieveSongsFromArtist();
    },
    methods: {
        getArtist(){
             ArtistService.get(this.id)
                .then(response => {
                    this.artist = response.data;
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
            console.log(this.artist);
        },
        retrieveSongsFromArtist(){
            SongService.findByArtistId(this.id)
                .then(response => {
                this.songs = response.data;
                console.log(response.data);
                })
                .catch(e => {
                console.log(e);
                });
        },
    }
}
</script>

<style lang="">
    
</style>