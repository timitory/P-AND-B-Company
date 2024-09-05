<template >
    <div>
        <ProductTitle/>
        <EventDesignandManagement/>
        <PackageDesign/>
        <DigitalLaunchCampaigne/>
        
    </div>
</template>

<script>
import DigitalLaunchCampaigne from './DigitalLaunchCampaigne.vue';
import EventDesignandManagement from './EventDesignandManagement.vue';
import PackageDesign from './PackageDesign.vue';
import ProductTitle from './ProductTitle.vue';


export default{
    components:{
        EventDesignandManagement,PackageDesign,ProductTitle,DigitalLaunchCampaigne
    }
}
</script>