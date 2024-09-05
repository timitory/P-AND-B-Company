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

  
  font-style: normal;
}

body {
  font-family: 'Certia', sans-serif;
}
</style>
