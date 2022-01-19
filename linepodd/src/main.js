import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'intersection-observer' // Optional
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'primeflex/primeflex.css';
import InputMask from 'primevue/inputmask';

Vue.config.productionTip = false
Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  InputMask,
  render: (h) => h(App)
}).$mount('#app')
