<template>

  <div>
    <div class="flex flex-grow justify-around p-2 text-sm mr-5">
      <a>Title</a>
      <a>Artist</a>
    </div>

    <div  class="flex hover:bg-gray-100 border-b-2 p-2 items-center text-center"
          v-for="(song, index) in songs"
          :key="index"
          @click="selectedSong = song">
          
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

  <transition name="fade">
    
    <div class="flex h-full w-full bg-black bg-opacity-50 absolute inset-0 items-center justify-center" v-if="showMenu" @click="showMenu = false;">
          <div class="mx-auto w-1/2 h-1/2">
            <div class="bg-yellow-400 rounded-lg border shadow-lg p-2 text-center">
              
              <div class="p-4 border-2 border-black">
                <div class="flex flex-grow justify-around p-2 text-sm">
                  <a>Title</a>
                  <a>Artist</a>
                </div>
                <div  class="flex p-2 items-center text-center">
                  <div class="flex flex-grow justify-around">
                    <div class="w-1/2">
                      <a class="">{{ selectedSong.title }}</a>
                    </div>

                    <div class="w-1/2">
                      <div  v-for="(artist, index) in selectedSong.artists"
                            :key="index">
                          <a>{{ artist.name }}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex flex-col justify-items-center content-center text-center p-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <a class="font-bold">Add to playlist: </a>
              </div>
              <button  class="flex w-full hover:bg-gray-100 border-b-2 p-2 items-center text-center"
                    v-for="(playlist, index) in playlists"
                    :key="index"
                    @click="addSongToPlaylist(playlist)">
                  {{playlist.name}}
              </button>
            </div>
          </div>
    </div>
  </transition>
</template>

<script>
import SongService from "../services/SongService";
import ArtistService from "../services/ArtistService";
import PlaylistService from "../services/PlaylistService";

export default {
name: "Songs",
    data(){
      return{
        songs: [],
        artists: [],
        showMenu: false,
        playlists: [],
        selectedSong: null
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
    retrievePlaylists(){
      PlaylistService.getAll()
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
    addSongToPlaylist(playlist){
      playlist.songs.push(this.selectedSong);  
      PlaylistService.update(playlist.id, playlist)
        .then(response => {
            this.playlists = response.data;
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
            console.log("Playlists could not be retrieved");
        });
    }
  }
}
</script>

<style scoped>

</style>
