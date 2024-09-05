<template>
    <div>
        <vue-marquee-slider
        id="marquee-slider"
        :speed="1000"
        :width="50"
      >
       
      </vue-marquee-slider>
        
      
    </div>
  </template>
  
  <script>
  import MarqueeText from 'vue-marquee-text-component';
  
  export default {
    components: {
      MarqueeText,
    },
  };
  </script>
  
  <style scoped>
  img {
    height: 100px; /* Adjust the height as needed */
    margin-right: 20px; /* Adjust the spacing between images */
  }
  </style>
  