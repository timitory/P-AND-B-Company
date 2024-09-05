<template>
  
  <div class="faq-item">
    <div class="faq-question">
      <span class="text-lg text-dark">{{ question }}</span>
      <button @click="toggleAnswer" class="text-lg bg-white shadow-white shadow-2xl rounded-md py-3 px-4">
        {{ isOpen ? '-' : '+' }}
      </button>
    </div>
    <transition name="fade">
      <div v-if="isOpen" class="faq-answer-overlay" @click="toggleAnswer">
        <div class="faq-answer-content" @click.stop>
          <p>{{ answer }}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

export default {
  components:{

  },
  props: {
    question: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleAnswer() {
      this.isOpen = !this.isOpen;
    }
  },
  mounted() {
    // console.log(this.question);  // Log the question to verify it's received correctly
  }
};
</script>

<style scoped>
.faq-item {
  margin-bottom: 20px;
  margin-left: 5rem;
  margin-right: 5rem;
  
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f7f7f7;
  padding: 1.5rem;
  cursor: pointer;
}

.faq-answer-overlay {
  position: relative;
  padding: 1.1rem;
  background-color: #e0e0e0;
}

.faq-answer-content {
  padding: 10px;
}
</style>

  
  <!-- <style>
  .faq-item {
    margin-bottom: 20px;
  }
  
  .faq-question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #f8f9fa;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .faq-answer-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .faq-answer-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    max-width: 500px;
    width: 90%;
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
  }
  </style>
   -->