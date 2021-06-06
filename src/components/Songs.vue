<template>
  <div class="flex justify-between items-center border-b-2 p-2"
              v-for="(song, index) in songs"
              :key="index"
          >
            {{ song.title }}
  </div>
</template>

<script>
import SongService from "../services/SongService";

export default {
name: "Songs",
    data(){
      return{
        songs: [],
        artists: [],
      }
    },
    mounted() {
      this.retrieveSongs();
      //this.retrieveArtists();
    },
    methods: {
      retrieveSongs(){
        SongService.getAll()
            .then(response => {
              this.songs = response.data;
              console.log(response.data);
            })
            .catch(e => {
              console.log(e);
            });
    },
    retrieveArtists(){
      ArtistService.getAll()
          .then(response => {
              this.artists = response.data;
              console.log(response.data);
          })
          .catch(e => {
              console.log(e);
          });
      console.log(this.artists);
    },
  }
}
</script>

<style scoped>

</style>
