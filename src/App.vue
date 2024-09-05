<template>
  <div>
    <Navbar/>
    
  <transition name="fade" mode="out-in">
    <router-view/>
  </transition>
  <Loading/>
  <Collaborate/>  
  <hr class="text-slate"/>
  <Footer/>
  <hr class="text-slate mx-16">
  <h1 class="text-black text-center py-2">Copyright © 2024 Pixels and Brands. All Rights Reserved.</h1>

</div>
</template>
<script>
import Collaborate from './components/Collaborate.vue';
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar/Navbar.vue';
import Loading from './components/Loader.vue';
export default{
   components:{Navbar, Collaborate,Footer,Loading}
}
</script>

<style>
@font-face {
  font-family: 'Certia';

  src: url('../src/assets/fonts/certia-font-family-1723532044-0/Certia-Regular-BF657672ec3ede3.otf') format('truetype');


  font-weight: normal;
  font-style: normal;
}

body {
  font-family: 'Certia', sans-serif;
}
</style>
