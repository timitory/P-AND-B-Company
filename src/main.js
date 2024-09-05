import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import Vuex from 'vuex'
import '@fortawesome/fontawesome-free/css/all.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash,faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faEye, faEyeSlash,faArrowLeft);




// Register FontAwesomeIcon globally
const app=createApp(App)
app.use(store)
app.use(router)
app.use(Vuex)
app.mount('#app')
app.component('font-awesome-icon', FontAwesomeIcon);

