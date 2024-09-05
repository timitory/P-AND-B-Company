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
  src: url('../src/assets/fonts/certia-font-family-1723532044-0/Befonts-License.txt') format('truetype');
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: 'Certia', sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
