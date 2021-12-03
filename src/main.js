import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import router from './router'



const axiosConfig = {
  baseURL: 'http://localhost:3000',
  timeout: 30000,
};

Vue.prototype.$http = axios.create(axiosConfig)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
