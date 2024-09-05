<template>
    <div>
        <vue-marquee-slider
        id="marquee-slider"
        :speed="1000"
        :width="50"
      >
       
      </vue-marquee-slider>
        <img src="../../../public/images/Card.png" alt="Image 1" />
        <img src="../../../public/images/Card (1).png" alt="Image 1" />
        <img src="../../../public/images/Card (2).png" alt="Image 1" />
        <img src="../../../public/images/Card (3).png" alt="Image 1" />
        <img src="../../../public/images/Card (4).png" alt="Image 1" />
        <img src="../../../public/images/Card (5).png" alt="Image 1" />
      </marquee-text>
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
  