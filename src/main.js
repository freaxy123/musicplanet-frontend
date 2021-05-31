import { createApp } from 'vue'
import router from "./routes"
import App from './App.vue'
import './index.css'
import Axios from "axios";

createApp(App).use(router).mount('#app')
