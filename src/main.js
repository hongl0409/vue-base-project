import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// common.css init css
import './styles/common.css'
import './styles/reset.css'
import './styles/border.css'

// 

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
