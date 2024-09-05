import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import VueMarqueeSlider from 'vue-marquee-slider';
Vue.use(VueMarqueeSlider)
createApp(App).use(store).use(router).mount('#app')
