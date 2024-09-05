<template>
    <div>
      <marquee-text
        :speed="50"
        :pauseOnHover="true"
        :loop="true"
        :gradient="false"
      >
        <img src="../../../public/images/Card.png" alt="Image 1" />
        <img src="https://via.placeholder.com/150" alt="Image 2" />
        <img src="https://via.placeholder.com/150" alt="Image 3" />
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
  