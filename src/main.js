
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store/store'
import VueResource from 'vue-resource'
import './assets/bootstrap.min.css'

Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
  store: store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
