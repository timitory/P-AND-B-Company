<template>
    <div>
        <Banner/>
        <Maquee/>
        <OurService/>
        <Service/>
        <OurWorks/>
        <Testimonial/>
        <Faq/>

    </div>
</template>

<script>
import Navbar from '@/components/Navbar/Navbar.vue';
import Banner from '@/components/Banner/Banner.vue';
import OurService from '@/components/OurServices/Ourservice.vue'
import Service from '@/components/OurServices/Services.vue'
import Maquee from '@/components/Banner/Maquee.vue'
import OurWorks from '@/components/OurWorks/OurWorks.vue'
import Testimonial from '@/components/Testimonials/Testimonial.vue'
import Faq from '@/components/Faq.vue';
export default{
    components:{Navbar,Banner,OurService,Maquee,Service,OurWorks,Testimonial,Faq}
}

</script>
<style>

</style>