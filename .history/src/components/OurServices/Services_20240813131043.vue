<template>
    <div class="w-full bg-grey">
        <div class="w-full px-16 py-5">
            <div class="flex justify-between items-center w-full p-11">
                <div class="flex flex-col w-4/5">
                    <div class="flex flex-col items-start justify-start">
                       <h1 class="text-start text-3xl font-bold  text-bigtext pt-10">Our Services</h1> 
                       <h1 class="text-start text-texter text-sm font-thin">Pixels & Brands offers a diverse array of expertly crafted services, seamlessly reflecting the unique essence and values of our clients' brands while aligning with their specific business objectives.  </h1>
                    </div>
                  
                </div>
                <div class="flex justify-end items-center w-1/5">
                    <router-link to="/about"><button class="flex items-center bg-white  shadow-md text-sm mt-4 relative border border-solid border-white rounded text-blue-950 px-2 py-2 font-semibold  hover:text-white hover:bg-violet">View All</button></router-link>
                </div>
            </div>
            <div>
                <div class="bg-purecol px-6 rounded-lg">
                    <div class="p-4 bg-purecol rounded-lg mx-8">
                        <div class="flex justify-between items-center w-full">
                            <div class="flex flex-col w-4/5">
                                <div class="flex flex-col items-start justify-start">
                                   <h1 class="text-start text-xl font-bold  text-bigtext">Branding and Design</h1> 
                                   <h1 class="text-start text-texter text-sm font-thin mt-2">Whether you are starting from scratch or looking to revamp your existing brand, we believe in designs that inspire and build a lasting connection with your customers. </h1>
                                </div>
                              
                            </div>
                            <div class="flex justify-end items-center w-1/5">
                                <router-link to="/about"><button class="flex items-center bg-white  shadow-md text-sm mt-4 relative border border-solid border-white rounded text-black px-2 py-2 font-semibold  hover:text-white hover:bg-violet">Learn More</button></router-link>
                            </div> 
                        </div>
                        <div class="flex space-x-4 mt-7">
                            <img src="../../../public/images/cream.png" alt="" class="w-4/12">
                            <img src="../../../public/images/milk.png" alt="" class="w-4/12">
                            <img src="../../../public/images/Image.png" alt="" class="w-4/12">
                            
                        </div>

                    </div>
                    <div class="flex flex-col p-4">
                        <h1 class="text-lg text-left pl-8 font-bold">Services</h1>
                    </div>
                    <div class="flex flex-row space-x-4 justify-between items-center px-11 py-7 text-balance bg-white m-11 rounded-lg mb-11">
                        <div class="flex flex-col p-4 space-y-5">
                            <h1 class="text-3xl font-extrabold leading-3 text-violet text-left">01</h1>
                            <h5 class="text-texter text-sm">Logo Design</h5>
                        </div>
                        <div class="flex flex-col p-4 space-y-5 text-balance">
                            <h1 class="text-3xl font-extrabold leading-3 text-violet text-left">02</h1>
                            <h5 class="text-texter text-sm w-32 text-left">Brand Guideline Development</h5>
                        </div>
                        <div class="flex flex-col p-4 space-y-5">
                            <h1 class="text-3xl font-extrabold leading-3 text-violet text-left">03</h1>
                            <h5 class="text-texter text-sm">Print Design</h5>
                        </div>
                        <div class="flex flex-col p-4 space-y-5">
                            <h1 class="text-3xl font-extrabold leading-3 text-violet text-left">04</h1>
                            <h5 class="text-texter text-sm w-44 text-left">Web Design and Development</h5>
                        </div>
                        <div class="flex flex-col p-4 space-y-5">
                            <h1 class="text-3xl font-extrabold leading-3 text-violet text-left">05</h1>
                            <h5 class="text-texter text-sm">Product Design</h5>
                        </div>

                    </div>
                    <div class="flex space-x-4 w-full">
                        <div>
                            <!-- <div>

                            </div> -->
                            <div class="flex flex-col w-1/2 space-y-4">
                                <div class="flex justify-center items-center">
                                   <img src="../../../public/images/Image Container (1).png" alt="lbl1">
                                </div>
                                <div class="flex flex-col space-y-3 justify-start">
                                    <h1 class="text-start text-2xl ml-11 text-navy">Product Launch</h1>
                                    <h6 class="text-start text-sm ml-11 text-texter">Our dedicated team of designers, strategists and creatives work collaboratively to create compelling narratives and visually striking campaigns that captivate your audience.</h6>
                                </div>
                               
                                <div>
                                    <button class="bg-white text-center border-0 shadow-lg rounded-sm py-3 px-32">
                                        Learn More...
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style>

</style>