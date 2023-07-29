import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import PdfViewer from './components/PdfViewer.vue'
import '@/styles/index.css';
import 'virtual:windi.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/a-cura-em-1minuto', component: PdfViewer }
  ]
})

createApp(App).use(router).mount('#app')