/* eslint-disable vue/multi-word-component-names */
/* eslint-disable prettier/prettier */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'

// import 'primevue/resources/themes/nova-light/theme.css' cái này import bị fail
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import Button from 'primevue/button'

const app = createApp(App)

app.use(PrimeVue)
app.use(router)

app.component('Button', Button)

app.mount('#app')
