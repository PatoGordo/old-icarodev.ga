import Vue from 'vue'
import VueRouter from 'vue-router'
import VueScrollTo from 'vue-scrollto'

import App from './App.vue'
import Home from './pages/Home.vue'
import Page404 from './pages/Page404.vue'

import './css/wave.css'
import './css/bounce.css'
// import './css/slide-in-left.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.use(VueRouter)
Vue.use(VueScrollTo)

Vue.config.productionTip = false
Vue.config.ignoredElements = [/^ion-/]

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '*', name: 'Page404', component: Page404 }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')