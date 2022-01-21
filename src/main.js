import { createApp } from 'vue'
import App from './App.vue'
//import { startWorker } from "@/mocks/worker.js"
import axios from "axios"

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

//startWorker();
createApp(App).mount('#app')
