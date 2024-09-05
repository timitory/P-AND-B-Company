<template>
  <div>
   
  <FaqTitle/>
  <div class="faq-list">
    <Faq
      v-for="(faq, index) in faqs"
      :key="index"
      :question="faq.question"
      :answer="faq.answer"
    />
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
      faqs: [
        { question: 'What services does Pixels & Brands offer?', answer: 'Vue.js is a progressive JavaScript framework for building user interfaces.' },
        { question: 'How does Pixels & Brands ensure brand consistency?', answer: 'Vue components are reusable instances with a name and template.' },
        { question: 'What constraints are considered during the development process?', answer: 'Vue components are reusable instances with a name and template.' },
        { question: 'Who is the typical user of Pixels & Brands?', answer: 'Vue components are reusable instances with a name and template.' },
        { question: 'Here are responses to some frequently asked questions. Transparency is important to us, and we strive to give you all the information you need to choose our services wisely.', answer: 'Vue components are reusable instances with a name and template.' },
        // Add more FAQs here

      ]
    };
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
