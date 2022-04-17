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
import axios from 'axios'
import VueAxios from 'vue-axios'
import Icon from "vue-awesome/components/Icon";
import 'vue-awesome/icons'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)
Vue.component('v-icon', Icon)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    this.$store.commit('setLocalToken');

    if (this.$store.getters.getToken) {
      this.$store.dispatch('user/getProfile')
    } else {
      this.$router.push({name: 'Auth'})
    }
  }
}).$mount('#app')
