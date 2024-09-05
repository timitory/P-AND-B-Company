<template>
  <div>
    <Navbar/>
  <transition name="fade" mode="out-in">
    <router-view/>
  </transition>  
</div>
</template>
<script>
import Navbar from './components/Navbar/Navbar.vue';
export default{
   components:{Navbar}
}
</script>

<style>
@font-face {
  font-family: 'Certia';
  src: url('../src/assets/fonts/certia-font-family-1723532044-0/Certia-Bold-BF657672ec6c8c2.otf') format('truetype');
  src: url('../src/assets/fonts/certia-font-family-1723532044-0/Certia-Black-BF657672ec578e6.otf') format('truetype');
  src: url('../src/assets/fonts/certia-font-family-1723532044-0/Certia-BlackItalic-BF657672eb10a4e.otf') format('truetype');
  src: url('../src/assets/fonts/certia-font-family-1723532044-0/Certia-Light-BF657672ec7805d.otf') format('truetype');
  src: url('../src/assets/fonts/certia-font-family-1723532044-0/Certia-Bold-BF657672ec6c8c2.otf') format('truetype');
  src: url('../src/assets/fonts/certia-font-family-1723532044-0/Certia-Bold-BF657672ec6c8c2.otf') format('truetype');
  src: url('../src/assets/fonts/certia-font-family-1723532044-0/Certia-Bold-BF657672ec6c8c2.otf') format('truetype');
  src: url('../src/assets/fonts/certia-font-family-1723532044-0/Certia-Bold-BF657672ec6c8c2.otf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: 'Certia', sans-serif;
}
</style>
