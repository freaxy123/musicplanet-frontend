<template lang="">
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <!-- Username Input -->
        <div class="mb-4">
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username">
        </div>

        <!-- Password Input -->
        <div class="mb-6">
            <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="Password">
            <!-- <p class="text-red text-xs italic">Please choose a password.</p> -->
        </div>

        <!-- Buttons -->
        <div class="flex flex-col justify-between">
            <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker py-3" href="#">
                Forgot Password?
            </a>

            <button class="bg-yellow-400 hover:text-black transition duration-200 text-white font-bold py-2 px-4 rounded" type="button">
                Sign In
            </button>

        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="">
    
</style>