import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import '@/styles/main.scss'
import PhosphorIcons from "@phosphor-icons/vue"

createApp(App).use(Quasar, quasarUserOptions).use(router).use(PhosphorIcons).mount('#app')
