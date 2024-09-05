<template>
    <div>
      <vue-marquee-slider
        id="marquee-slider"
        :speed="1000"
        :width="'50%'"
      >
        <img src="/images/Card.png" alt="Image 1" />
        <img src="/images/Card (1).png" alt="Image 2" />
        <img src="/images/Card (2).png" alt="Image 3" />
        <img src="/images/Card (3).png" alt="Image 4" />
        <img src="/images/Card (4).png" alt="Image 5" />
        <img src="/images/Card (5).png" alt="Image 6" />
      </vue-marquee-slider>
    </div>
  </template>
  
  <script>
  import VueMarqueeSlider from 'vue-marquee-text-component'; // Ensure this is correct
  export default {
    components: {
      VueMarqueeSlider
    }
  }
  </script>
  
  <style scoped>
  img {
    height: 100px; /* Adjust the height as needed */
    margin-right: 20px; /* Adjust the spacing between images */
  }
  </style>
  