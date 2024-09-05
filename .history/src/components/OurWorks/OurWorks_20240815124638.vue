<template>
    <div class="w-full">
            <div class="w-full bg-grey">
                <div class="w-full px-16 py-5">
                    <div class="flex justify-between items-center w-full pl-7 pr-9"> 
                        <div class="flex flex-col w-4/5">
                            <div class="flex flex-col items-start justify-start">
                               <h1 class="text-start text-3xl font-bold  text-bigtext pt-10">Our Works</h1> 
                               <h1 class="text-start text-texter text-sm font-thin">Explore a gallery of our proudest achievements and witness the seamless fusion and technology in each of projects within this diverse portfolio</h1>
                            </div>
                          
                        </div>
                        <div class="flex justify-end items-center w-1/5">
                            <router-link to="/about"><button class="flex items-center bg-white  shadow-md text-sm mt-4 relative border border-solid border-white rounded text-blue-950 px-2 py-2 font-semibold  hover:text-white hover:bg-violet">View All</button></router-link>
                        </div>
                    </div>
                    <div>
                        <div class="px-6 rounded-lg">
                            <div class="p-4 rounded-lg mx-8">
                                <!-- <div class="flex justify-between items-center w-full">
                                    <div class="flex flex-col w-4/5">
                                        <div class="flex flex-col items-start justify-start">
                                           <h1 class="text-start text-xl font-bold  text-dark">Branding and Design</h1> 
                                           <h1 class="text-start text-texter text-sm font-thin mt-2">Whether you are starting from scratch or looking to revamp your existing brand, we believe in designs that inspire and build a lasting connection with your customers. </h1>
                                        </div>
                                      
                                    </div>
                                    <div class="flex justify-end items-center w-1/5">
                                        <router-link to="/about"><button class="flex items-center bg-white  shadow-md text-sm mt-4 relative border border-solid border-white rounded text-black px-2 py-2 font-semibold  hover:text-white hover:bg-violet">Learn More</button></router-link>
                                    </div> 
                                </div> -->
                                <!-- <div class="flex space-x-4 mt-7">
                                    <img src="../../../public/images/cream.png" alt="" class="w-4/12">
                                    <img src="../../../public/images/milk.png" alt="" class="w-4/12">
                                    <img src="../../../public/images/Image.png" alt="" class="w-4/12">
                                    
                                </div> -->
        
                            </div>
                            <!-- <div class="flex flex-col p-4">
                                <h1 class="text-lg text-left pl-8 font-bold">Services</h1>
                            </div> -->
                            <!-- <div class="flex flex-row space-x-4 justify-between items-center px-11 py-7 text-balance bg-white m-11 rounded-lg mb-11">
                                <div class="flex flex-col p-4 space-y-5">
                                    <h1 class="text-3xl font-extrabold leading-3 text-dark text-left">01</h1>
                                    <h5 class="text-texter text-sm">Logo Design</h5>
                                </div>
                                <div class="flex flex-col p-4 space-y-5 text-balance">
                                    <h1 class="text-3xl font-extrabold leading-3 text-dark text-left">02</h1>
                                    <h5 class="text-texter text-sm w-32 text-left">Brand Guideline Development</h5>
                                </div>
                                <div class="flex flex-col p-4 space-y-5">
                                    <h1 class="text-3xl font-extrabold leading-3 text-dark text-left">03</h1>
                                    <h5 class="text-texter text-sm">Print Design</h5>
                                </div>
                                <div class="flex flex-col p-4 space-y-5">
                                    <h1 class="text-3xl font-extrabold leading-3 text-dark text-left">04</h1>
                                    <h5 class="text-texter text-sm w-44 text-left">Web Design and Development</h5>
                                </div>
                                <div class="flex flex-col p-4 space-y-5">
                                    <h1 class="text-3xl font-extrabold leading-3 text-dark text-left">05</h1>
                                    <h5 class="text-texter text-sm">Product Design</h5>
                                </div>
        
                            </div> -->
                            <div class="flex flex-row space-x-4 pb-5">
                                <div class="flex gap-7 flex-row">
                                    <!-- <div>
        
                                    </div> -->
                                    <div class="flex flex-col w-1/2 space-y-4 bg-purecol py-11 shadow-lg">
                                        <div class="flex flex-col space-y-3 justify-start w-full">
                                            <h1 class="text-start text-2xl ml-11 text-dark font-bold">Product Launch</h1>
                                            <h6 class="text-start text-sm ml-11 text-texter pr-11">Our dedicated team of designers, strategists and creatives work collaboratively to create compelling narratives and visually striking campaigns that captivate your audience.</h6>
                                        </div>
                                        <div class="flex justify-center items-center pt-2">
                                            <img src="../../../public/images/Image Container (1).png" alt="lbl1">
                                         </div>
                                       
                                        <div class="flex justify-center items-center pt-3">
                                        
                                            <button class="flex bg-white text-center border-0 shadow-sm rounded-sm py-3 px-52 hover:bg-dark hover:text-white">
                                           <router-link to="/about"><div class="flex justify-center items-center gap-2">
                                            Learn More <span><svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.16667 1.5835L12.25 5.66683M12.25 5.66683L8.16667 9.75016M12.25 5.66683L1.75 5.66683" stroke="#0E113E" ho stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg></span>
                                           </div></router-link> 
                                            </button>
                                         
                                        </div>
                                    </div>
                                    <div class="flex flex-col w-1/2 space-y-4 bg-purecol py-11 shadow-lg">
                                        <div class="flex flex-col space-y-3 justify-start w-full">
                                            <h1 class="text-start text-2xl ml-11 text-dark font-bold">Marketing</h1>
                                            <h6 class="text-start text-sm ml-11 text-texter pr-11">In the ever-evolving landscape of marketing, standing out is crucial. Pixels & Brands offers a suite of comprehensive digital marketing services designed to amplify your brand's reach.</h6>
                                        </div>
                                        <div class="flex justify-center items-center pt-2">
                                            <img src="../../../public/images/Image Container.png" alt="lbl1">
                                         </div>
                                        <div class="flex justify-center items-center pt-3">
                                         
                                            <button class="items-center bg-white text-center border-0 shadow-sm rounded-sm py-3 px-52 hover:bg-dark hover:text-white">
                                         <router-link to="/about"> Learn More...</router-link>     
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
    </div>
</template>
<style>
</style>