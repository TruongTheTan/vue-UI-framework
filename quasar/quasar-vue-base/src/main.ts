/* eslint-disable prettier/prettier */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options' // ko cho phép dùng file js (chưa config prettier)

createApp(App).use(Quasar, quasarUserOptions).use(router).mount('#app')
