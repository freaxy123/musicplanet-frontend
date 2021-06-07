<template>

  <div>
    <div class="flex flex-grow justify-around p-2 text-sm mr-5">
      <a>Title</a>
      <a>Artist</a>
    </div>

    <div  class="flex hover:bg-gray-100 border-b-2 p-2 items-center text-center"
          v-for="(song, index) in songs"
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

          <button @click="showMenu = !showMenu" class="relative right-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>   
    </div>
  </div>

  <div class="flex h-full w-full bg-black bg-opacity-50 absolute inset-0 items-center justify-center" v-if="showMenu" @click="showMenu = false">
        <div class="mx-auto">
          
          <div class="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
            <a> Add to playlist </a>
          </div>
        
        </div>
  </div>
</template>

<script>
import SongService from "../services/SongService";
import ArtistService from "../services/ArtistService";

export default {
name: "Songs",
    data(){
      return{
        songs: [],
        artists: [],
        showMenu: false,
      }
    },
    mounted() {
      this.retrieveSongs();
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
      /*
      ArtistService.getAll()
          .then(response => {
              this.artists = response.data;
              console.log(response.data);
          })
          .catch(e => {
              console.log(e);
          });
      console.log(this.artists);
      */
    },
  }
}
</script>

<style scoped>

</style>
