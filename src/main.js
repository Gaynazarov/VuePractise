import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import TheHeader from "./components/TheHeader.vue";

const app = createApp(App)

// global
app.component('the-header', TheHeader)

app.mount('#app')
