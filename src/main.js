import Vue from 'vue'
import App from './App.vue'
import store from './store'
import modal from './components/parts/Modal'
Vue.component('modal', modal)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

