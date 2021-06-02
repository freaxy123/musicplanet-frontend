import { createApp } from 'vue'
import router from "./routes"
import App from './App.vue'
import './index.css'
import Axios from "axios";
import VueAxios from "vue-axios";

createApp(App).use(VueAxios, Axios).use(router).mount("#app");
