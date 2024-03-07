import { createApp } from 'vue'
import { fr } from 'yup-locales';
import { configure } from 'vee-validate'
import { setLocale } from 'yup';
import { createPinia } from 'pinia';
import './style.css'
import App from './App.vue'
import router from './router'
import './validators/min-max-validator.js'

//formulaire
setLocale(fr);
configure({
    validateOnInput: true,
    validateOnBlur: true,
    validateOnChange: true
})

//gestion d'état
const pinia = createPinia();
const app = createApp(App);

app.config.globalProperties.BASE_URL = "http://localhost:5555"
app
//.component("HelloWorld", HelloWorld)
.use(router)
.use(pinia)
.mount('#app')
