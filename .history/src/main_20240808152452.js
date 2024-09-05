import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import VueMarqueeSlider from 'vue-marquee-slider';
.use(VueMarqueeSlider)
const app=createApp(App)
app.use(store)
app.use(router).mount('#app')
