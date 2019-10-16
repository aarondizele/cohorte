import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Add CSS
require('./styles/main.scss')
require('./styles/metro.scss')

import Sidenav from '@/components/Sidenav'

Vue.component('Sidenav', Sidenav)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
