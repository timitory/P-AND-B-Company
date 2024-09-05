<template>
    <div>
        <div class="w-full flex justify-between items-center bg-dark py-11 px-32 space-x-5">
            <div class="flex justify-center bg-dark">
                <h1 class="text-white text-3xl font-extrabold leading-4">Get in touch With Us</h1>
            </div>
            <div>
                <h1 class="text-white font-thin leading-2 w-96">We are thrilled to hear from you! We can assist you whether you are prepared to begin working on your project or you just have a question. Send us a message using the form below, and a committed member of our team will respond as soon as possible.</h1>
            </div>
        </div>
        <ContactForm/>
    </div>
   
</template>
<script>
import GetInTouch from './GetInTouch.vue';
import ContactForm from './ContactForm.vue'
export default{
    components:{
        GetInTouch,ContactForm
    }
}
</script>