import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './js/utils.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue } from 'bootstrap-vue'
import './registerServiceWorker'
import Header from "@/components/Header";

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  components: { Header },
  beforeCreate() {
    this.$store.commit('getLocalToken');
  }
}).$mount('#app')
