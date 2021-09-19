import { createApp } from 'vue'
import App from './App.vue'
import '@imf/info-js'
import {appInfo} from '@infoJs-plugin-virtual-module'
console.log(import.meta.env)
console.log(".........",appInfo)
createApp(App).mount('#app')
