import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import VueMarqueeSlider from 'vue-marquee-slider';

const app=createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
app.use(VueMarqueeSlider)
