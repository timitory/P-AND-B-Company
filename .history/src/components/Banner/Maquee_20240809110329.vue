<template>
    <div class="mt-9 bg-gray-100">
      <vue-marquee-slider
        id="marquee-slider"
        :speed="1000"
        :width="'50%'"
      >
        <div class="marquee-images">
          <img src="/images/Card.png" alt="Image 1" />
          <img src="/images/Card (1).png" alt="Image 2" />
          <img src="/images/Card (2).png" alt="Image 3" />
          <img src="/images/Card (3).png" alt="Image 4" />
          <img src="/images/Card (4).png" alt="Image 5" />
          <img src="/images/Card (5).png" alt="Image 6" />
        </div>
      </vue-marquee-slider>
      <hr class="bg-grey-700 pt-6">
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
  .marquee-images {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  
  img {
    height: 100px; /* Adjust the height as needed */
    margin-right: 20px; /* Adjust the spacing between images */
  }
  </style>
  