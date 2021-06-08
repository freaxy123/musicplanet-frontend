<template lang="">
    <form v-on:submit.prevent="save" class="p-4 space-y-6">
        <div class="">
            <a>Songtitle</a>
            <input class="bg-gray-100 shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="title" type="text" placeholder="Example: Billie Jean" v-model="song.title">
        </div>

        <div class="flex flex-col">
            <a>Artist</a>
            <select v-model="selectedArtist" class="border">
                <option value="" selected>None</option>
                <option v-for="artist in artists" :value="artist">{{artist.name}}</option>
            </select>
        </div>

        <div class="text-center p-4">
            <button class="bg-yellow-400 hover:text-white transition duration-200 text-black font-bold py-2 px-4 rounded w-1/6" type="submit">
                Add
            </button>
        </div>
    </form>
</template>

<script>
import SongService from "../services/SongService";
import ArtistService from "../services/ArtistService";

export default {
    name: "Add Song",
    data() {
        return {
            song: {
                title: "",
                artists: [{
                    id: ""
                }]
            },
            artists: [],
            selectedArtist: "",
        }
    },
    watch:{
        selectedArtist: "changeSelected"
    },
    mounted(){
        this.retrieveArtists();
    },
    methods: {
        save() {
            if(this.selectedArtist == ""){
                SongService.create(this.song)
                .then(response => {
                    console.log(response.data);
                    console.log('The Song was created successfully!');
                })
                .catch(e => {
                    console.log(e);
                    console.log("Song could not be created, please check the fields");
                });
            }
            else{ 	
                //this.selectedArtist.songs.push(this.song);
                this.song.artists[0].id = this.selectedArtist.id;
                console.log(this.song);
                //ArtistService.update(this.selectedArtist.id, this.selectedArtist)
                
                SongService.create(this.song)
                    .then(response => {
                        console.log(response.data);
                        console.log('The Song was created successfully!');
                    })
                    .catch(e => {
                        console.log(e);
                        console.log("Song could not be created, please check the fields");
                    });
                    Object.assign(this.$data, this.$options.data()); //Reset component variables
                    this.retrieveArtists();
            }
        },
        retrieveArtists(){
            ArtistService.getAll()
                .then(response => {
                    this.artists = response.data;
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                    console.log("Artists could not be retrieved");
                });
                console.log(this.artists);
        },
        changeSelected(){
            console.log(this.selectedArtist);
        }
    }
}
</script>

<style lang="">

    
</style>