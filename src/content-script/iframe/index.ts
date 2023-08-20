import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from '~pages'
import '../../assets/base.scss'
import App from './app.vue'
import './index.scss'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to) => {
  if (to.path === '/') return '/iframe'
})

console.log({ routes })
console.log('12138',12138)

createApp(App).use(router).mount('#app')
