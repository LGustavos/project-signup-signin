import Vue from 'vue'
import App from './App.vue'
import router from './routes/router'
import Vuelidate from 'vuelidate'
import './assets/css/tailwind.css'

Vue.config.productionTip = false
Vue.use(Vuelidate)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
