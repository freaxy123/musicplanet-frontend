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
    components: {},
    data(){
      return{
        songs: [],
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

    }
}
</script>

<style scoped>

</style>
