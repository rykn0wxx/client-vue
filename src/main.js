/* eslint no-console:0 */
import Vue from 'vue'

// Components
import './components'

// Sync router with store
import { sync } from 'vuex-router-sync'

// Plugins
import VueRipple from '@/plugins/VueRipple'

import '@/sass/styles.scss'

// Application imports
import App from './App'
import router from '@/router'
import store from '@/store'

// Sync store with router
sync(store, router)

Vue.use(VueRipple)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
