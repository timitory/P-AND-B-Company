<template>
<div>
<ServiceTitle/>
<Services/>
<ProductLaunch/>
<Marketing/>
</div>

</template>
<script>
import Services from './Services.vue'
import ProductLaunch from './ProductLaunch.vue'
import Marketing from './Marketing.vue'
import ServiceTitle from './ServiceTitle.vue';
export default{
    name:'Service',
    components:{
        Services,
        ProductLaunch,
        Marketing,
        ServiceTitle
    }
}
</script>