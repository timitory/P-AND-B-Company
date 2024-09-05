<template>
    <div class="w-full bg-white pt-8 border-solid">
        <div class="w-full">
            <div class="flex flex-col space-y-3 p-16">
                <h4 class="flex text-4xl text-dark text-center items-center justify-center antialised font-bold">Let's Collaborate</h4>
                <h1 class="leading-4 text-sm text-center text-gray items-center justify-center antialiased font-bold">Ready to start project or have questions? I'm just a message away. Let's discuss your ideas and bring them to life. Register or Reach out for a free consultation.</h1>
                <div>
                    <div class="flex justify-center items-center space-x-5 mt-8">
                        <router-link to="/signup"><button class="items-center flex text-sm mt-4 relative border border-solid border-blue-950 rounded text-blue-950 px-2 py-2 font-semibold  hover:text-white hover:bg-dark">Get Started</button></router-link>
                          <router-link to="/contact"><button class="items-center flex text-sm mt-4 relative border border-solid border-blue-950 rounded text-blue-950 px-2 py-2 font-semibold hover:text-white hover:bg-dark">Contact Us</button></router-link>
                        </div>
                </div>
                
            </div>
          
            <!-- <div class="mt-8 mx-16">
                <Maquee/>
            </div> -->
            <!-- <div class="w-full flex justify-center items-center mt-16">
                <img src="../../../public/images/Frame 147.png" alt="" class="w-full object-cover"> 
            </div>
            -->
        </div>
    </div>
</template>

<script>

export default{
    components:{}
}
</script>

<style>

</style>