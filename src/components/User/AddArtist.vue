<template lang="">
    <form v-on:submit.prevent="save">
        <div class="p-4">
            <a>Artist name </a>
            <input class="bg-gray-100 shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="text" placeholder="Example: Micheal Jackson" v-model="artist.name" id="artistnameinput">
        </div>

        <div class="text-center p-4">
            <button class="bg-yellow-400 hover:text-white transition duration-200 text-black font-bold py-2 px-4 rounded w-1/6" type="submit" id="addbutton">
                Add
            </button>
        </div>
    </form>
</template>

<script>
import ArtistService from "../../services/ArtistService";

export default {
    name: "Add Artist",
    data() {
        return {
            artist: {
                name: "",
            },
        }
    },
    methods: {
        save() {
            ArtistService.create(this.artist)
                .then(response => {
                    console.log(response.data);
                    console.log('The Artist was created successfully!');
                })
                .catch(e => {
                    console.log(e);
                    console.log("Artist could not be created, please check the fields");
                });
        },
    }
}
</script>

<style lang="">
    
</style>