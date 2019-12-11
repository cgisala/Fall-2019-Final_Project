import Vue from 'vue'
import App from './App.vue'

//Import VueRouter library, and this app's routes
import VueRouter from 'vue-router'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import ActivityAPIService from '@/services/activityService'

Vue.use(VueRouter) //Use VueRouter

//Configure Bootstrap
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Add API service to Vue prototype
//'$activityService' is a made up.
Vue.prototype.$activityService = ActivityAPIService

//Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router              /* include the routes */
}).$mount('#app')
