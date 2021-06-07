<template lang="">
    <div>
        <div class="flex flex-grow place-content-center">
            <a class=" text-5xl p-2">{{artist.name}}</a>
        </div>

        <div>
            <div class="flex flex-grow justify-around"
                v-for="(song, index) in artist.songs"
                :key="index">
                <a>{{ song.title }}</a>
            </div>
        </div>
    </div>
</template>

<script>
import ArtistService from "../services/ArtistService";

export default {
    data(){
      return{
        id: "",
        artist: {
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
        this.getArtist();
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
    }
}
</script>

<style lang="">
    
</style>