<template>
    <div>
     <get-in-touch/>
    <FaqTitle/>
    <!-- <div class="container mx-auto p-4">
        <header class="text-center mb-8">
          <h1 class="text-4xl font-bold">Our Products</h1>
          <input type="text" placeholder="search....." v-model="searchedQuery" class="border p-2 w-full mt-4">
        </header>
        <div v-if="faqs.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div v-for="product in faqs" :key="product.id" class="bg-white shadow-md rounded-lg p-4">
            <img src="data:image/jpeg;base64,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" alt="image" class="w-64 rounded-lg object-cover">

            <h2 class="text-2xl font-semibold">{{ product.title }}</h2>
            <p class="text-gray-700">Price: ${{ product.price }}</p>
            <p class="text-gray-700">Category: {{ product.category }}</p>
            <p class="text-yellow-500">Rating: {{ product.rating }}</p> -->
          <!-- </div>
        </div>
        <div v-else-if="searchedQuery" class="text-center text-gray-500">
          Item not available
        </div>
      </div>  -->
      <div class="flex flex-col items-end justify-center mr-16">
        <input type="text" placeholder="Search Our Faq....." v-model="searchedQuery" class="flex justify-center items-center  outline-none border border-slate focus:outline-none focus:ring-1 focus:ring-violet focus:border-transparent focus:border-0 p-3 w-52 m-4 rounded-lg">

    </div>
    <div class="faq-list" v-if="searchedFaq.length > 0">
        

      <Faq
        v-for="(faq, index) in searchedFaq"
        :key="index"
        :question="faq.question"
        :answer="faq.answer"
      />
    </div>
    <div v-else-if="searchedQuery" class="text-center text-gray-500">
        Item not available
      </div>
  </div>
  </template>
  
  <script>
  import Faq from '../components/Faq.vue';
  import FaqTitle from '../components/FaqTitle.vue';
  import GetInTouch from '../views/GetInTouch.vue';
  
  export default {
    components: {
      Faq,FaqTitle,
      GetInTouch
    },
    data() {
      return {
        searchedQuery:'',
        faqs: [
          { question: 'What services does Pixels & Brands offer?', answer: 'Vue.js is a progressive JavaScript framework for building user interfaces.' },
          { question: 'How does Pixels & Brands ensure brand consistency?', answer: 'Vue components are reusable instances with a name and template.' },
          { question: 'What constraints are considered during the development process?', answer: 'Vue components are reusable instances with a name and template.' },
          { question: 'Who is the typical user of Pixels & Brands?', answer: 'Vue components are reusable instances with a name and template.' },
          { question: 'Here are responses to some frequently asked questions. Transparency is important to us, and we strive to give you all the information you need to choose our services wisely.', answer: 'Vue components are reusable instances with a name and template.' },
          // Add more FAQs here
  
        ],
        
      };
    },
    computed: {
      searchedFaq() {
        return this.faqs.filter(productfaq =>{
          return productfaq.question.toLowerCase().includes(this.searchedQuery.toLowerCase());
        });
      }
    },
    mounted(){
      console.log('FAQ',this.faqs)
    }
  };
  </script>
  
  <style scoped>
  .faq-list {
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    
  }
  </style>
  