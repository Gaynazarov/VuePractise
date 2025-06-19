import { createApp, defineAsyncComponent } from 'vue'
import './style.css'
import App from './App.vue'
import TheHeader from "./components/TheHeader.vue";

const app = createApp(App)

// global
app.component('the-header', TheHeader)
app.component('async-component', defineAsyncComponent(()=>{
    return import('./components/AppAsyncComponent.vue')
}))
app.mount('#app')
