import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useBetsStore } from '@/stores/betsStore.js';


import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia=createPinia();

app.use(pinia)
app.use(router)

const  betsStore=useBetsStore();


app.mount('#app')
