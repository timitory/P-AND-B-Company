<template>
    <div>
        <vue-marquee-slider
        id="marquee-slider"
        :speed="1000"
        :width="50"
      >
      <img src="../../../public/images/Card.png" alt="Image 1" />
      <img src="../../../public/images/Card (1).png" alt="Image 1" />
      <img src="../../../public/images/Card (2).png" alt="Image 1" />
      <img src="../../../public/images/Card (3).png" alt="Image 1" />
      <img src="../../../public/images/Card (4).png" alt="Image 1" />
      <img src="../../../public/images/Card (5).png" alt="Image 1" />
      </vue-marquee-slider>
        
      
    </div>
  </template>
  
  <script>
// import VueMarqueeSlider from 'vue-marquee-slider';
// export default {
//   components: {
//     VueMarqueeSlider
//   }
// }

  </script>
  
  <style scoped>
  img {
    height: 100px; /* Adjust the height as needed */
    margin-right: 20px; /* Adjust the spacing between images */
  }
  </style>
  