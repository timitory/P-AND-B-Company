<template>
    <div>
        <MarketingTitle/>
        <ContentMarketing/>
        <SEO/>
        <EmailMarketing/>
        <SocialMediaMAnagement/>
        
    </div>
</template>

<script>
import EmailMarketing from './EmailMarketing.vue';
import ContentMarketing from './ContentMarketing.vue';
import MarketingTitle from './MarketingTitle.vue';
import SEO from './SEO.vue';
import SocialMediaMAnagement from './SocialMediaMAnagement.vue';


export default{
    components:{
        EmailMarketing,ContentMarketing,MarketingTitle,SEO,SocialMediaMAnagement
    }
}
</script>