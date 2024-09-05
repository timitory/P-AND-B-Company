<template>
    <div>
        <Banner/>
        <Maquee/>
        <OurService/>
        <Service/>
        <OurWorks/>

    </div>
</template>

<script>
import Navbar from '@/components/Navbar/Navbar.vue';
import Banner from '@/components/Banner/Banner.vue';
import OurService from '@/components/OurServices/Ourservice.vue'
import Service from '@/components/OurServices/Services.vue'
import Maquee from '@/components/Banner/Maquee.vue'
import OurWorks from '@/components/OurWorks/OurWorks.vue'
export default{
    components:{Navbar,Banner,OurService,Maquee,Service,Our}
}

</script>
<style>

</style>