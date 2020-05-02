import Vue from 'vue'
import App from './App.vue'
import { router } from './router/router'
import VueResource from 'vue-resource'

Vue.use(VueResource);
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
