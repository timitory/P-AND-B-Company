<template>
    <div class="w-full bg-white max-h-72">
        <div class="w-full">
            <div class="flex flex-col space-y-3 p-32">
                <h4 class="flex text-lg text-blue-950 text-center items-center justify-center antialised">You Deserve More...</h4>
                <h1 class="leading-4 text-4xl text-center items-center justify-center  antialiased font-bold"> Let’s <span style="color:blueviolet">Design </span> your idea, <span style="color:blueviolet"> Brand</span> your <br><br><br> Vision & <span style="color:blueviolet"> Market </span> your Products.</h1>
                <div>
                    <div class="flex justify-center items-center space-x-5 mt-16">
                        <router-link to="/signup"><button class="items-center flex text-sm mt-4 relative border border-solid border-blue-950 rounded text-blue-950 px-2 py-2 font-semibold  hover:text-white hover:bg-blue-950">Get Started</button></router-link>
                          <router-link to="/login"><button class="items-center flex text-sm mt-4 relative border border-solid border-blue-950 rounded text-blue-950 px-2 py-2 font-semibold hover:text-white hover:bg-blue-950">Contact Us</button></router-link>
                        </div>
                </div>
                
            </div>
            <div class="mt-">
                <Banner/>
            </div>
            <div class="w-full flex justify-center items-center mt-16">
                <img src="../../../public/images/Frame 147.png" alt="" class="w-full object-cover"> 
            </div>
           
        </div>
    </div>
</template>

<script>
import Maquee from './Maquee.vue';
export default{
    components:{Maquee}
}
</script>

<style>

</style>