<template>
    <div>
        <BrandingTitle/>
        <LogoDesign/>
        <BGD/>
        <PrintDesign/>
        <WebDs/>
        <PrintDesign/>
    </div>
</template>
<script>
import BrandingTitle from './BrandingTitle.vue';
import LogoDesign from '../LogoDesign.vue';
import BGD from './BGD.vue';
import PrintDesign from './PrintDesign.vue';
import WebDs from './WebDs.vue';
import ProductDesign from './ProductDesign.vue';
export default{
    components:{
        BrandingTitle,LogoDesign,BGD,PrintDesign,ProductDesign,WebDs
    }
}
</script>